import fs from 'node:fs';

const postsPath = 'src/data/blog/posts.ts';
const enPath = 'src/i18n/en.ts';
let text = fs.readFileSync(postsPath, 'utf8');
let en = fs.readFileSync(enPath, 'utf8');

const updates = [
  {
    slug: 'cheat-codes',
    title: 'Buy FC 27 Cheats vs Console Codes — What Works Online',
    seoTitle: 'Buy FC 27 Cheats vs Console Codes | Online Guide',
  },
  {
    slug: 'console-tips',
    title: 'FC 27 Cheat Setup Tips — From Kick Off Practice to Live UT',
    seoTitle: 'FC 27 Cheat Setup Tips | Kick Off to Live UT',
  },
  {
    slug: 'use-codes',
    title: 'How to Buy & Activate FC 27 Cheats After Checkout',
    seoTitle: 'How to Buy & Activate FC 27 Cheats | Setup',
  },
  {
    slug: 'features',
    title: 'Undetected FC 27 Cheat Features — ESP Soft Aim & Utilities',
    seoTitle: 'Undetected FC 27 Cheat Features | ESP Soft Aim',
  },
  {
    slug: 'console-cmds',
    title: 'FC 27 Private Loader vs Offline Trainers — Buy the Right Tool',
    seoTitle: 'FC 27 Private Loader vs Offline Trainers',
  },
  {
    slug: 'lite-vs-pro',
    title: 'Buy FC 27 Lite vs Pro Cheats — Which Undetected Tier?',
    seoTitle: 'Buy FC 27 Lite vs Pro Cheats | Tier Guide',
  },
  {
    slug: 'elite',
    title: 'Buy FC 27 Elite Cheats — Full Undetected Ultimate Team Suite',
    seoTitle: 'Buy FC 27 Elite Cheats | Undetected UT Suite',
  },
  {
    slug: 'aimbot',
    title: 'Buy FC 27 Soft Aim & Shot Assist — Undetected Pro Tools',
    seoTitle: 'Buy FC 27 Soft Aim & Shot Assist | Pro Tier',
  },
  {
    slug: 'esp',
    title: 'Buy FC 27 ESP & Radar Cheats — Undetected Lite Setup',
    seoTitle: 'Buy FC 27 ESP & Radar Cheats | Lite Setup',
  },
  {
    slug: 'fov',
    title: 'Buy FC 27 FOV Camera Cheats with ESP Awareness',
    seoTitle: 'Buy FC 27 FOV Camera Cheats | ESP Awareness',
  },
  {
    slug: 'skins',
    title: 'Buy FC 27 Unlock All — Kit & Skin Preview Utility',
    seoTitle: 'Buy FC 27 Unlock All | Kit Skin Preview',
  },
  {
    slug: 'ea-patch',
    title: 'FC 27 Patch Day Checklist Before You Buy Undetected Cheats',
    seoTitle: 'FC 27 Patch Day Checklist | Before You Buy',
  },
  {
    slug: 'hwid',
    title: 'Buy FC 27 HWID Spoofer After an EA Ban — Reset Guide',
    seoTitle: 'Buy FC 27 HWID Spoofer After Ban | Reset Guide',
  },
  {
    slug: 'buy-guide',
    title: 'How to Buy Undetected FC 27 Cheats in 2026 — Lite Pro Elite',
    seoTitle: 'How to Buy Undetected FC 27 Cheats 2026',
  },
  {
    slug: 'bones',
    title: 'Buy FC 27 Soft Aim Profiles — Target Select & Playstyles',
    seoTitle: 'Buy FC 27 Soft Aim Profiles | Target Select',
  },
  {
    slug: 'ea-error',
    title: 'EA Anti-Cheat Errors vs Buying FC 27 UGC or HWID Help',
    seoTitle: 'EA Anti-Cheat Errors | FC 27 UGC & HWID Help',
  },
  {
    slug: 'external',
    title: 'Buy External FC 27 Cheats — Safer Undetected Loader Delivery',
    seoTitle: 'Buy External FC 27 Cheats | Undetected Loader',
  },
  {
    slug: 'stream-proof',
    title: 'Buy Stream-Proof FC 27 Cheats for Creators — OBS Safe Overlay',
    seoTitle: 'Buy Stream-Proof FC 27 Cheats | OBS Safe',
  },
];

for (const u of updates) {
  const titleBeforeSlug = new RegExp(
    `(title:\\s*")([^"]*)("\\s*,\\s*\\n\\s*slug:\\s*"${u.slug}")`,
  );
  const seoAfterSlug = new RegExp(
    `(slug:\\s*"${u.slug}"\\s*,\\s*\\n\\s*seoTitle:\\s*")([^"]*)(")`,
  );
  const titleBeforeSlugSingle = new RegExp(
    `(title:\\s*')([^']*)('\\s*,\\s*\\n\\s*slug:\\s*'${u.slug}')`,
  );

  if (titleBeforeSlug.test(text)) {
    text = text.replace(titleBeforeSlug, `$1${u.title}$3`);
  } else {
    console.warn('title miss posts', u.slug);
  }

  if (seoAfterSlug.test(text)) {
    text = text.replace(seoAfterSlug, `$1${u.seoTitle}$3`);
  } else {
    console.warn('seo miss posts', u.slug);
  }

  // Sync en.ts blog card titles when slug matches
  if (titleBeforeSlugSingle.test(en)) {
    en = en.replace(titleBeforeSlugSingle, `$1${u.title}$3`);
  }
}

fs.writeFileSync(postsPath, text);
fs.writeFileSync(enPath, en);
console.log('Updated blog H1s in posts.ts and synced en.ts card titles where matched.');
