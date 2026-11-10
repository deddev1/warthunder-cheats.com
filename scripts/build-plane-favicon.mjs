import sharp from 'sharp';
import { writeFileSync, mkdirSync, unlinkSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** Official Delta Force badge — keep black canvas as-is (no BG punch-out). */
const src =
  'C:/Users/3Tee System/.cursor/projects/c-Users-3Tee-System-Downloads-deltaforce-cheats-net-main/assets/fa62dadb-ff18-4ec5-be9c-f031e228709a-e90f6e40-cbb9-4a0b-a5ce-ca8cd31edcf2.png';
const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
mkdirSync(path.join(publicDir, 'images'), { recursive: true });
const outPath = (name) => path.join(publicDir, name);

const black = { r: 0, g: 0, b: 0, alpha: 1 };
const contain = { fit: 'contain', background: black };

/** Flatten any source transparency onto solid black, then size. */
async function sized(size, format = 'png') {
  const pipeline = sharp(src)
    .flatten({ background: black })
    .resize(size, size, contain);
  if (format === 'jpg') return pipeline.jpeg({ quality: 92 }).toBuffer();
  return pipeline.png().toBuffer();
}

// Wipe leftover / obsolete favicon assets before writing the new set
const obsolete = [
  'favicon.ico.png',
  'rust-icon.jpg',
  'images/favicon-source.png',
];
for (const rel of obsolete) {
  const p = outPath(rel);
  if (existsSync(p)) {
    unlinkSync(p);
    console.log('deleted', rel);
  }
}

await sharp(await sized(512)).toFile(outPath('images/favicon-source.png'));

const sizes = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['favicon.png', 48],
  ['favicon-192.png', 192],
  ['favicon-512.png', 512],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192.png', 192],
  ['android-chrome-512.png', 512],
  ['logo.png', 128],
  ['deltaforce-icon.jpg', 256],
];

for (const [name, size] of sizes) {
  const format = name.endsWith('.jpg') ? 'jpg' : 'png';
  writeFileSync(outPath(name), await sized(size, format));
  console.log('wrote', name);
}

function pngToIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  let offset = 6 + count * 16;
  const entries = [];
  for (const png of pngBuffers) {
    const w = png.readUInt32BE(16);
    const h = png.readUInt32BE(20);
    const meta = Buffer.alloc(16);
    meta[0] = w >= 256 ? 0 : w;
    meta[1] = h >= 256 ? 0 : h;
    meta.writeUInt16LE(1, 4);
    meta.writeUInt16LE(32, 6);
    meta.writeUInt32LE(png.length, 8);
    meta.writeUInt32LE(offset, 12);
    entries.push(meta);
    offset += png.length;
  }
  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

const p16 = await sized(16);
const p32 = await sized(32);
const p48 = await sized(48);
writeFileSync(outPath('favicon.ico'), pngToIco([p16, p32, p48]));
console.log('wrote favicon.ico');

const png64 = (await sized(128)).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Delta Force Cheats">
  <image href="data:image/png;base64,${png64}" width="128" height="128"/>
</svg>
`;
writeFileSync(outPath('favicon.svg'), svg);
writeFileSync(outPath('logo.svg'), svg);
console.log('wrote favicon.svg, logo.svg');

const corner = await sharp(outPath('favicon-32.png')).ensureAlpha().raw().toBuffer();
console.log('corner rgba', [...corner.slice(0, 4)]);
console.log('done');