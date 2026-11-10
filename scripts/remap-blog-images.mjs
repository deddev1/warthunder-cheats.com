import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const pathMap = {
  '/images/blog/fc27-fut-overlay.webp': '/images/blog/fc27-fut-overlay.webp',
  '/images/blog/fc27-match-purple-esp-overlay.webp': '/images/blog/fc27-match-purple-esp-overlay.webp',
  '/images/blog/fc27-match-purple-esp-overlay.webp': '/images/blog/fc27-match-purple-esp-overlay.webp',
  '/images/blog/fc27-purple-match-overlay.webp': '/images/blog/fc27-purple-match-overlay.webp',
  '/images/blog/fc27-clubs-gameplay.webp': '/images/blog/fc27-clubs-gameplay.webp',
  '/images/blog/fc27-pitch-gameplay.webp': '/images/blog/fc27-pitch-gameplay.webp',
  '/images/blog/fc27-fut-overlay.webp': '/images/blog/fc27-fut-overlay.webp',
  '/images/blog/fc27-clubs-gameplay.webp': '/images/blog/fc27-clubs-gameplay.webp',
  '/images/blog/fc27-match-purple-esp-overlay.webp': '/images/blog/fc27-match-purple-esp-overlay.webp',
  '/images/blog/fc27-pro-clubs-menu-matchday.webp': '/images/blog/fc27-pro-clubs-menu-matchday.webp',
  '/images/blog/fc27-utils-menu.webp': '/images/blog/fc27-utils-menu.webp',
  '/images/blog/fc27-pro-clubs-menu-matchday.webp': '/images/blog/fc27-pro-clubs-menu-matchday.webp',
  '/images/blog/fc27-utils-menu.webp': '/images/blog/fc27-utils-menu.webp',
  '/images/blog/fc27-fut-overlay.webp': '/images/blog/fc27-fut-overlay.webp',
  '/images/blog/fc27-match-purple-esp-overlay.webp': '/images/blog/fc27-match-purple-esp-overlay.webp',
  '/images/blog/fc27-match-purple-esp-overlay.webp': '/images/blog/fc27-match-purple-esp-overlay.webp',
  '/images/blog/fc27-purple-match-overlay.webp': '/images/blog/fc27-purple-match-overlay.webp',
  '/images/blog/fc27-clubs-gameplay.webp': '/images/blog/fc27-clubs-gameplay.webp',
  '/images/blog/fc27-pitch-gameplay.webp': '/images/blog/fc27-pitch-gameplay.webp',
  '/images/blog/fc27-fut-overlay.webp': '/images/blog/fc27-fut-overlay.webp',
  '/images/blog/fc27-clubs-gameplay.webp': '/images/blog/fc27-clubs-gameplay.webp',
  '/images/blog/fc27-match-purple-esp-overlay.webp': '/images/blog/fc27-match-purple-esp-overlay.webp',
  '/images/blog/fc27-match-purple-esp-overlay.webp': '/images/blog/fc27-match-purple-esp-overlay.webp',
  '/images/blog/fc27-pro-clubs-menu-matchday.webp': '/images/blog/fc27-pro-clubs-menu-matchday.webp',
  '/images/blog/fc27-utils-menu.webp': '/images/blog/fc27-utils-menu.webp',
  '/images/blog/fc27-pro-clubs-menu-matchday.webp': '/images/blog/fc27-pro-clubs-menu-matchday.webp',
  '/images/blog/fc27-utils-menu.webp': '/images/blog/fc27-utils-menu.webp',
  '/images/blog/fc27-pitch-gameplay.webp': '/images/blog/fc27-pitch-gameplay.webp',
  '/images/blog/fc27-utils-menu.webp': '/images/blog/fc27-utils-menu.webp',
  '/images/blog/fc27-clubs-gameplay.webp': '/images/blog/fc27-clubs-gameplay.webp',
  '/images/blog/fc27-purple-match-overlay.webp': '/images/blog/fc27-purple-match-overlay.webp',
  '/images/blog/fc27-pitch-gameplay.webp': '/images/blog/fc27-pitch-gameplay.webp',
};

const metaBySrc = {
  '/images/blog/fc27-fut-overlay.webp': {
    alt: 'EA Sports FC 27 Ultimate Team cheat overlay during a FUT match',
    caption: 'Ultimate Team overlay',
  },
  '/images/blog/fc27-match-purple-esp-overlay.webp': {
    alt: 'FC 27 match gameplay with purple ESP overlay highlighting opponents on the pitch',
    caption: 'Purple ESP overlay',
  },
  '/images/blog/fc27-purple-match-overlay.webp': {
    alt: 'FC 27 purple cheat overlay active during a live match on PC',
    caption: 'Match overlay',
  },
  '/images/blog/fc27-clubs-gameplay.webp': {
    alt: 'EA Sports FC 27 Clubs gameplay with cheat overlays on the pitch',
    caption: 'Clubs gameplay',
  },
  '/images/blog/fc27-pitch-gameplay.webp': {
    alt: 'EA Sports FC 27 cheat gameplay overlay showing assists during a match on the pitch',
    caption: 'Pitch gameplay',
  },
  '/images/blog/fc27-pro-clubs-menu-matchday.webp': {
    alt: 'FC 27 Pro Clubs cheat menu open on Matchday with purple UI panels',
    caption: 'Pro Clubs menu',
  },
  '/images/blog/fc27-utils-menu.webp': {
    alt: 'EA Sports FC 27 cheat utility menu showing helper tools and toggles',
    caption: 'Utility tools',
  },
};

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue;
      walk(full, out);
    } else if (/\.(ts|astro|mjs|js)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

let filesChanged = 0;
for (const file of walk(root)) {
  let text = fs.readFileSync(file, 'utf8');
  const original = text;
  for (const [from, to] of Object.entries(pathMap)) {
    text = text.split(from).join(to);
  }
  if (text !== original) {
    fs.writeFileSync(file, text);
    filesChanged += 1;
    console.log('paths', path.relative(root, file));
  }
}

function syncAlts(filePath) {
  let text = fs.readFileSync(filePath, 'utf8');
  for (const [src, meta] of Object.entries(metaBySrc)) {
    const esc = escapeRegExp(src);
    const altEsc = escapeRegExp(meta.alt);
    text = text.replace(
      new RegExp(`(image:\\s*"${esc}",\\s*\\n\\s*imageAlt:\\s*")[^"]*(")`, 'g'),
      `$1${meta.alt}$2`,
    );
    text = text.replace(
      new RegExp(`(image:\\s*'${esc}',\\s*\\n\\s*imageAlt:\\s*')[^']*(')`, 'g'),
      `$1${meta.alt}$2`,
    );
    text = text.replace(
      new RegExp(`(src:\\s*"${esc}",\\s*alt:\\s*")[^"]*(")`, 'g'),
      `$1${meta.alt}$2`,
    );
    text = text.replace(
      new RegExp(`(src:\\s*'${esc}',\\s*alt:\\s*')[^']*(')`, 'g'),
      `$1${meta.alt}$2`,
    );
    text = text.replace(
      new RegExp(`(src:\\s*"${esc}",\\s*alt:\\s*"${altEsc}",\\s*caption:\\s*")[^"]*(")`, 'g'),
      `$1${meta.caption}$2`,
    );
    text = text.replace(
      new RegExp(`(src:\\s*'${esc}',\\s*alt:\\s*'${altEsc}',\\s*caption:\\s*')[^']*(')`, 'g'),
      `$1${meta.caption}$2`,
    );
    // gameplayImages style: src then alt on own fields
    text = text.replace(
      new RegExp(`(src:\\s*'${esc}',\\s*\\n\\s*alt:\\s*')[^']*(')`, 'g'),
      `$1${meta.alt}$2`,
    );
    text = text.replace(
      new RegExp(`(src:\\s*"${esc}",\\s*\\n\\s*alt:\\s*")[^"]*(")`, 'g'),
      `$1${meta.alt}$2`,
    );
  }
  fs.writeFileSync(filePath, text);
  console.log('alts', path.relative(root, filePath));
}

syncAlts(path.join(root, 'src/data/blog/posts.ts'));
syncAlts(path.join(root, 'src/data/gameplayImages.ts'));
syncAlts(path.join(root, 'src/i18n/en.ts'));
syncAlts(path.join(root, 'src/config/seo.ts'));

console.log(`Done. Path remaps in ${filesChanged} files.`);
