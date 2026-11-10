import fs from 'node:fs';

const map = {
  'cheat-codes': 'Buy FC 27 Cheats vs Console Codes — What Works Online',
  'console-tips': 'FC 27 Cheat Setup Tips — From Kick Off Practice to Live UT',
  'use-codes': 'How to Buy & Activate FC 27 Cheats After Checkout',
  features: 'Undetected FC 27 Cheat Features — ESP Soft Aim & Utilities',
  'console-cmds': 'FC 27 Private Loader vs Offline Trainers — Buy the Right Tool',
  'lite-vs-pro': 'Buy FC 27 Lite vs Pro Cheats — Which Undetected Tier?',
  elite: 'Buy FC 27 Elite Cheats — Full Undetected Ultimate Team Suite',
  aimbot: 'Buy FC 27 Soft Aim & Shot Assist — Undetected Pro Tools',
  esp: 'Buy FC 27 ESP & Radar Cheats — Undetected Lite Setup',
  fov: 'Buy FC 27 FOV Camera Cheats with ESP Awareness',
  skins: 'Buy FC 27 Unlock All — Kit & Skin Preview Utility',
  'ea-patch': 'FC 27 Patch Day Checklist Before You Buy Undetected Cheats',
  hwid: 'Buy FC 27 HWID Spoofer After an EA Ban — Reset Guide',
  'buy-guide': 'How to Buy Undetected FC 27 Cheats in 2026 — Lite Pro Elite',
  bones: 'Buy FC 27 Soft Aim Profiles — Target Select & Playstyles',
  'ea-error': 'EA Anti-Cheat Errors vs Buying FC 27 UGC or HWID Help',
  external: 'Buy External FC 27 Cheats — Safer Undetected Loader Delivery',
  'stream-proof': 'Buy Stream-Proof FC 27 Cheats for Creators — OBS Safe Overlay',
};

const seoMap = {
  'cheat-codes': 'Buy FC 27 Cheats vs Console Codes | Online Guide',
  'console-tips': 'FC 27 Cheat Setup Tips | Kick Off to Live UT',
  'use-codes': 'How to Buy & Activate FC 27 Cheats | Setup',
  features: 'Undetected FC 27 Cheat Features | ESP Soft Aim',
  'console-cmds': 'FC 27 Private Loader vs Offline Trainers',
  'lite-vs-pro': 'Buy FC 27 Lite vs Pro Cheats | Tier Guide',
  elite: 'Buy FC 27 Elite Cheats | Undetected UT Suite',
  aimbot: 'Buy FC 27 Soft Aim & Shot Assist | Pro Tier',
  esp: 'Buy FC 27 ESP & Radar Cheats | Lite Setup',
  fov: 'Buy FC 27 FOV Camera Cheats | ESP Awareness',
  skins: 'Buy FC 27 Unlock All | Kit Skin Preview',
  'ea-patch': 'FC 27 Patch Day Checklist | Before You Buy',
  hwid: 'Buy FC 27 HWID Spoofer After Ban | Reset Guide',
  'buy-guide': 'How to Buy Undetected FC 27 Cheats 2026',
  bones: 'Buy FC 27 Soft Aim Profiles | Target Select',
  'ea-error': 'EA Anti-Cheat Errors | FC 27 UGC & HWID Help',
  external: 'Buy External FC 27 Cheats | Undetected Loader',
  'stream-proof': 'Buy Stream-Proof FC 27 Cheats | OBS Safe',
};

let posts = fs.readFileSync('src/data/blog/posts.ts', 'utf8');
let en = fs.readFileSync('src/i18n/en.ts', 'utf8');

for (const [slug, title] of Object.entries(map)) {
  // posts: title may use " or '; slug may use " or '
  posts = posts.replace(
    new RegExp(`(title:\\s*["'])([^"']*)(["']\\s*,\\s*\\n\\s*slug:\\s*["']${slug}["'])`),
    `$1${title}$3`,
  );
  posts = posts.replace(
    new RegExp(`(slug:\\s*["']${slug}["']\\s*,\\s*\\n\\s*seoTitle:\\s*["'])([^"']*)(["'])`),
    `$1${seoMap[slug]}$3`,
  );

  en = en.replace(
    new RegExp(`(title:\\s*["'])([^"']*)(["']\\s*,\\s*\\n\\s*slug:\\s*["']${slug}["'])`),
    `$1${title}$3`,
  );
}

fs.writeFileSync('src/data/blog/posts.ts', posts);
fs.writeFileSync('src/i18n/en.ts', en);
console.log('Synced remaining titles/seoTitles');
