import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const dir = path.join(root, 'public/images/hero');
const widths = [512, 640, 960];

if (!fs.existsSync(dir)) {
  console.error('Missing public/images/hero');
  process.exit(1);
}

const files = fs
  .readdirSync(dir)
  .filter((file) => /\.webp$/i.test(file) && !/-\d+\.webp$/i.test(file));

for (const file of files) {
  const input = path.join(dir, file);
  const base = file.replace(/\.webp$/i, '');
  for (const width of widths) {
    const output = path.join(dir, `${base}-${width}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(output);
    console.log(`Wrote ${path.relative(root, output)}`);
  }
}

console.log('Hero image optimization complete.');
