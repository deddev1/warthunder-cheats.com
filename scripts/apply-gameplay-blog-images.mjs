/**
 * Rewrites blog post covers + injects inline gameplay images with alt text.
 * Run: node scripts/apply-gameplay-blog-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const postsPath = path.join(root, 'src/data/blog/posts.ts');
const enPath = path.join(root, 'src/i18n/en.ts');

const imgs = {
  espRadar: {
    src: '/images/blog/wt-esp-radar.png',
    alt: 'War Thunder naval ESP with purple ship chams, green target box, IJN Mutsu name tag and 1.40 km distance through arctic islands',
    caption: 'Naval ESP with ship chams and distance tags',
  },
  vehicleEsp: {
    src: '/images/blog/wt-vehicle-esp.png',
    alt: 'War Thunder air ESP showing biplane third-person view with green and red aircraft boxes, player names and distance labels over a tropical coastline',
    caption: 'Air ESP boxes with name and range labels',
  },
  combatOverlay: {
    src: '/images/blog/wt-combat-overlay.png',
    alt: 'War Thunder cheat gameplay combat overlay highlighting enemy vehicles with ESP boxes and distance tags during a live battle',
    caption: 'Combat ESP overlay in a live match',
  },
  aimbotFov: {
    src: '/images/blog/wt-aimbot-fov.png',
    alt: 'War Thunder tank gunner sight with green 3D ESP boxes around M2A4 Tetrarch Pz.II and Chi-Ha tanks plus meter distances on a tropical map',
    caption: 'Tank ESP boxes through the gunner sight',
  },
  airEsp: {
    src: '/images/blog/wt-air-esp.png',
    alt: 'War Thunder modern fighter with orange ballistic prediction lines, missile speed tags and ESP labels for distant Gepard and ADATS targets',
    caption: 'Jet ballistic prediction and long-range ESP',
  },
  groundEsp: {
    src: '/images/blog/wt-ground-esp.png',
    alt: 'War Thunder ground battle cheat gameplay with vehicle ESP overlays marking enemy tanks and distances across the map',
    caption: 'Ground vehicle ESP across the battle',
  },
  mapRadar: {
    src: '/images/blog/wt-map-radar.png',
    alt: 'War Thunder tank sniper sight with bright green ESP silhouette and bounding box on an enemy medium tank at 1051 m through tropical foliage',
    caption: 'Through-cover tank ESP at long range',
  },
  hackResults: {
    src: '/images/blog/wt-hack-results.png',
    alt: 'War Thunder biplane over snow with red ESP name tags, aircraft models, kilometer distances and a circular lead/radar assist overlay',
    caption: 'Air ESP name tags and lead assist',
  },
};

const coverBySlug = {
  'cheat-codes': 'hackResults',
  'console-tips': 'vehicleEsp',
  'use-codes': 'combatOverlay',
  features: 'espRadar',
  'console-cmds': 'groundEsp',
  'lite-vs-pro': 'aimbotFov',
  elite: 'airEsp',
  aimbot: 'aimbotFov',
  esp: 'mapRadar',
  fov: 'airEsp',
  skins: 'vehicleEsp',
  'eac-patch': 'hackResults',
  hwid: 'groundEsp',
  'buy-guide': 'espRadar',
  bones: 'aimbotFov',
  'eac-error': 'combatOverlay',
  external: 'espRadar',
  'stream-proof': 'mapRadar',
};

const inlineBySlug = {
  features: ['espRadar', 'aimbotFov', 'airEsp'],
  esp: ['mapRadar', 'espRadar', 'groundEsp'],
  aimbot: ['aimbotFov', 'airEsp'],
  elite: ['hackResults', 'combatOverlay'],
  'cheat-codes': ['hackResults', 'vehicleEsp'],
  'lite-vs-pro': ['aimbotFov', 'mapRadar'],
  'buy-guide': ['espRadar', 'groundEsp'],
  external: ['vehicleEsp', 'airEsp'],
};

let posts = fs.readFileSync(postsPath, 'utf8');

// Ensure import for types still works — inject imageAlt + new image paths after each slug field block
for (const [slug, key] of Object.entries(coverBySlug)) {
  const img = imgs[key];
  const slugRe = new RegExp(
    `(slug:\\s*"${slug}",\\s*\\n\\s*image:\\s*")[^"]+(")`,
    'm',
  );
  if (!slugRe.test(posts)) {
    console.warn('cover miss', slug);
    continue;
  }
  posts = posts.replace(slugRe, `$1${img.src}$2`);

  // Insert imageAlt after image line if missing
  const blockRe = new RegExp(
    `(slug:\\s*"${slug}",\\s*\\n\\s*image:\\s*"${img.src.replace(/\//g, '\\/')}",)`,
  );
  posts = posts.replace(blockRe, (match) => {
    if (posts.includes(`slug: "${slug}"`) && posts.match(new RegExp(`slug: "${slug}"[\\s\\S]{0,200}imageAlt:`))) {
      return match;
    }
    return `${match}\n    imageAlt: ${JSON.stringify(img.alt)},`;
  });
}

// Inject inline gameplay images after first body paragraph for selected posts
for (const [slug, keys] of Object.entries(inlineBySlug)) {
  const imageBlocks = keys
    .map((k) => {
      const img = imgs[k];
      return `      { type: 'image', src: ${JSON.stringify(img.src)}, alt: ${JSON.stringify(img.alt)}, caption: ${JSON.stringify(img.caption)} },`;
    })
    .join('\n');

  const marker = `slug: "${slug}"`;
  const idx = posts.indexOf(marker);
  if (idx < 0) {
    console.warn('inline miss slug', slug);
    continue;
  }
  // Find body: [ after this slug
  const bodyIdx = posts.indexOf('body: [', idx);
  if (bodyIdx < 0 || bodyIdx - idx > 800) {
    console.warn('inline miss body', slug);
    continue;
  }
  // Find end of first { type: 'p' ... }, block
  const afterBody = posts.slice(bodyIdx);
  if (afterBody.includes(`type: 'image'`)) {
    // Avoid duplicate inject if re-run — remove previous image blocks at start? skip if already present soon after body
    const early = afterBody.slice(0, 1200);
    if (early.includes("type: 'image'")) {
      console.log('skip inline (already has images)', slug);
      continue;
    }
  }
  const firstPEnd = afterBody.search(/\n\s*\{ type: 'h2'/);
  if (firstPEnd < 0) {
    console.warn('inline miss h2', slug);
    continue;
  }
  const insertAt = bodyIdx + firstPEnd;
  posts = `${posts.slice(0, insertAt)}\n${imageBlocks}${posts.slice(insertAt)}`;
  console.log('injected inline images', slug);
}

fs.writeFileSync(postsPath, posts);

// Sync en.ts blog card images
let en = fs.readFileSync(enPath, 'utf8');
for (const [slug, key] of Object.entries(coverBySlug)) {
  const img = imgs[key];
  const re = new RegExp(`(slug:\\s*'${slug}',\\s*\\n\\s*image:\\s*')[^']+(')`);
  if (re.test(en)) {
    en = en.replace(re, `$1${img.src}$2`);
    console.log('en cover', slug);
  }
}
fs.writeFileSync(enPath, en);
console.log('done');
