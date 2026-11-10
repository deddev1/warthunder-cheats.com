import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const postsPath = path.join(root, 'src/data/blog/posts.ts');
const productsPath = path.join(root, 'src/data/products.ts');

const menus = {
  menuVisuals: {
    src: '/images/blog/wt-menu-visuals.png',
    alt: 'War Thunder cheats Visuals menu showing tank ESP toggles for bounding box, fill box, name, distance slider to 200m, vehicle name and teammate filters',
    caption: 'Visuals menu — tank ESP toggles',
  },
  menuWorld: {
    src: '/images/blog/wt-menu-world.png',
    alt: 'War Thunder cheats World menu with World ESP and Show Distance toggles on and World Distance slider set to 150m',
    caption: 'World menu — world ESP distance',
  },
  menuAimbot: {
    src: '/images/blog/wt-menu-aimbot.png',
    alt: 'War Thunder cheats Aimbot menu with enable on, RMB and Mouse 4 binds, prediction on, FOV size 12 degrees and smoothness 48',
    caption: 'Aimbot menu — FOV and smoothing',
  },
  menuMisc: {
    src: '/images/blog/wt-menu-misc.png',
    alt: 'War Thunder cheats Misc menu with Insert menu key, stream-proof on, panic key End, config save/load and cloud DMA connected status',
    caption: 'Misc menu — stream-proof and binds',
  },
};

const inject = {
  features: ['menuVisuals', 'menuWorld', 'menuAimbot', 'menuMisc'],
  aimbot: ['menuAimbot'],
  esp: ['menuVisuals', 'menuWorld'],
  'stream-proof': ['menuMisc'],
  bones: ['menuAimbot'],
  elite: ['menuVisuals', 'menuAimbot'],
};

function block(key) {
  const m = menus[key];
  return `      { type: 'image', src: ${JSON.stringify(m.src)}, alt: ${JSON.stringify(m.alt)}, caption: ${JSON.stringify(m.caption)} },`;
}

let posts = fs.readFileSync(postsPath, 'utf8');

for (const [slug, keys] of Object.entries(inject)) {
  const marker = `slug: "${slug}"`;
  const idx = posts.indexOf(marker);
  if (idx < 0) {
    console.warn('miss', slug);
    continue;
  }
  const bodyIdx = posts.indexOf('body: [', idx);
  if (bodyIdx < 0 || bodyIdx - idx > 900) {
    console.warn('no body', slug);
    continue;
  }
  const slice = posts.slice(bodyIdx, bodyIdx + 3500);
  if (slice.includes('wt-menu-')) {
    console.log('skip', slug);
    continue;
  }
  const h2Rel = slice.search(/\n\s*\{ type: 'h2'/);
  if (h2Rel < 0) {
    console.warn('no h2', slug);
    continue;
  }
  let insertRel = h2Rel;
  const early = slice.slice(0, h2Rel);
  const lastImg = early.lastIndexOf("type: 'image'");
  if (lastImg >= 0) {
    const afterImg = early.indexOf('},', lastImg);
    if (afterImg >= 0) insertRel = afterImg + 2;
  }
  const insertAt = bodyIdx + insertRel;
  const blocks = keys.map(block).join('\n');
  posts = `${posts.slice(0, insertAt)}\n${blocks}${posts.slice(insertAt)}`;
  console.log('injected', slug, keys.join(','));
}

fs.writeFileSync(postsPath, posts);

let products = fs.readFileSync(productsPath, 'utf8');
products = products
  .replace(
    "images: slide('gpPlayerEsp', 'gpMapHack', 'gpZoomHack')",
    "images: slide('gpPlayerEsp', 'gpMapHack', 'gpMenuVisuals', 'gpMenuWorld')",
  )
  .replace(
    "images: slide('gpScripts', 'gpMapHack', 'gpPlayerEsp')",
    "images: slide('gpScripts', 'gpMenuAimbot', 'gpMapHack', 'gpPlayerEsp')",
  )
  .replace(
    "images: slide('gpAutoKill', 'gpFarmBot', 'gpSkinChanger')",
    "images: slide('gpAutoKill', 'gpFarmBot', 'gpMenuVisuals', 'gpMenuAimbot', 'gpMenuMisc')",
  );
fs.writeFileSync(productsPath, products);
console.log('product galleries updated');
console.log('done');
