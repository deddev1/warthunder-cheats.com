export interface Review {
  id: string;
  name: string;
  handle: string;
  rating: 1 | 2 | 3 | 4 | 5;
  product: string;
  productHref: string;
  title: string;
  body: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Marcus K.',
    handle: 'ut_striker',
    rating: 5,
    product: 'FC 27 Elite',
    productHref: '/products/fc27-cheats/elite/',
    title: 'Finally stopped guessing runs in Clubs',
    body: "Been stuck in Div 4 forever. Grabbed Elite on a whim before the last big update and honestly the player tags alone changed how I defend. Farm helpers are a nice bonus between promos. Discord guy helped me tone down the aim so it doesn't look ridiculous on stream.",
    date: 'Sep 12, 2026',
    verified: true,
  },
  {
    id: 'r2',
    name: 'Elena R.',
    handle: 'stream_safe_fc',
    rating: 5,
    product: 'FC 27 Elite',
    productHref: '/products/fc27-cheats/elite/',
    title: "OBS doesn't catch the overlay",
    body: "I stream UT Rivals and was paranoid viewers would see boxes. Turned stream-proof on, recorded a test clip, all clean. Soft aim is dialed pretty low on my side so chat doesn't call me out. Worth it just for that.",
    date: 'Sep 4, 2026',
    verified: true,
  },
  {
    id: 'r3',
    name: 'Jordan P.',
    handle: 'career_main',
    rating: 5,
    product: 'FC 27 Elite',
    productHref: '/products/fc27-cheats/elite/',
    title: 'Career finishing feels less random now',
    body: "I mostly play Career, not Champs. Timed shots used to be a coin flip for me. Kept everything quiet at first like they tell you and it just… works. Patch dropped mid-week and the new loader was already there when I checked.",
    date: 'Aug 28, 2026',
    verified: true,
  },
  {
    id: 'r4',
    name: 'Sam T.',
    handle: 'hwid_reset',
    rating: 5,
    product: 'HWID Spoofer',
    productHref: '/products/fc27-cheats/hwid-spoofer/',
    title: 'New accounts kept dying on my PC',
    body: "Every fresh account got hit the second I launched FC on this machine. Did the restore point thing, ran the spoofer, rebooted, double-checked IDs. Was back in that same night. Support stayed with me on Discord until it stuck.",
    date: 'Aug 21, 2026',
    verified: true,
  },
  {
    id: 'r5',
    name: 'Chris V.',
    handle: 'clubs_radar',
    rating: 4,
    product: 'FC 27 Elite',
    productHref: '/products/fc27-cheats/elite/',
    title: 'Radar is what I actually leave on',
    body: "I'm not a rage player. Radar + knowing where teammates are in Clubs is 90% of why I keep paying. Took me a night to stop cluttering the screen with filters. Would love a couple more presets, but yeah I'd buy again.",
    date: 'Aug 15, 2026',
    verified: true,
  },
  {
    id: 'r6',
    name: 'Priya N.',
    handle: 'camo_preview',
    rating: 5,
    product: 'Kit Unlock',
    productHref: '/products/fc27-cheats/unlock-all/',
    title: 'Just wanted to preview kits',
    body: "Didn't need the full suite. Bought Unlock All so I can mess with kits and boots on my client for content. Friends still see my real stuff online, which is what I wanted. Checkout was quick, download was quick.",
    date: 'Aug 9, 2026',
    verified: true,
  },
  {
    id: 'r7',
    name: 'Diego M.',
    handle: 'ugc_help',
    rating: 4,
    product: 'UGC Recovery',
    productHref: '/products/fc27-cheats/ugc/',
    title: 'Helped me stay organized after a hold',
    body: "Got hit with a restriction and had zero idea what to send. UGC didn't magically unban me (they never promised that) but the case tracking stopped me from losing emails and screenshots. Made Discord tickets way less messy.",
    date: 'Aug 2, 2026',
    verified: true,
  },
  {
    id: 'r8',
    name: 'Alex W.',
    handle: 'patch_day',
    rating: 5,
    product: 'FC 27 Elite',
    productHref: '/products/fc27-cheats/elite/',
    title: "They actually pause when it's risky",
    body: "I used to launch mid-patch like an idiot. Now I check the banner and Discord first. Last update they paused, then dropped a build and I was in under an hour with my old preset. That alone keeps me subscribed.",
    date: 'Jul 26, 2026',
    verified: true,
  },
  {
    id: 'r9',
    name: 'Nina L.',
    handle: 'clubs_main',
    rating: 5,
    product: 'FC 27 Elite',
    productHref: '/products/fc27-cheats/elite/',
    title: "Doesn't look like free cheat garbage",
    body: "Tried some free junk years ago and my mates roasted me for the snaps. Defaults here are way calmer in Clubs. Had one loader question and someone answered the same night. Feels like people who actually play the game built it.",
    date: 'Jul 18, 2026',
    verified: true,
  },
  {
    id: 'r10',
    name: 'Owen H.',
    handle: 'ut_grinder',
    rating: 3,
    product: 'FC 27 Elite',
    productHref: '/products/fc27-cheats/elite/',
    title: "Good once it's running, setup annoyed me",
    body: "ESP does what I need in Career. First night I skipped a portal note and sat there confused until Discord pointed it out. After that? Fine. Knocking a couple stars off because day one took longer than I expected from the site.",
    date: 'Jul 11, 2026',
    verified: true,
  },
  {
    id: 'r11',
    name: 'Maya S.',
    handle: 'rivals_winger',
    rating: 3,
    product: 'FC 27 Elite',
    productHref: '/products/fc27-cheats/elite/',
    title: 'ESP great, aim still fighting me',
    body: "Seeing players early in Rivals is legit. Soft aim defaults were too grabby for how I play on the wing so I spent an evening cranking smoothing. Not broken — just not plug-and-play if you're picky. Portal tips could be clearer.",
    date: 'Jul 3, 2026',
    verified: true,
  },
  {
    id: 'r12',
    name: 'Leo F.',
    handle: 'spoof_once',
    rating: 3,
    product: 'HWID Spoofer',
    productHref: '/products/fc27-cheats/hwid-spoofer/',
    title: 'Worked, but the guide is a lot',
    body: "Got past the hardware flag after reboot and checking IDs. The walkthrough is thorough which is good, but I had to reread a couple steps because I was rushing. Support was chill about dumb questions. Tool's fine — just wish there was a short version for people in a hurry.",
    date: 'Jun 27, 2026',
    verified: true,
  },
];

export function getReviewStats(items: Review[] = reviews) {
  const count = items.length;
  const sum = items.reduce((acc, r) => acc + r.rating, 0);
  const average = count ? Math.round((sum / count) * 10) / 10 : 0;
  const fiveStar = items.filter((r) => r.rating === 5).length;
  return { count, average, fiveStar, verified: items.filter((r) => r.verified).length };
}

export function getRatingBreakdown(items: Review[] = reviews) {
  const total = items.length || 1;
  return ([5, 4, 3, 2, 1] as const).map((stars) => {
    const count = items.filter((r) => r.rating === stars).length;
    return {
      stars,
      count,
      pct: Math.round((count / total) * 100),
    };
  });
}

export function getReviewProducts(items: Review[] = reviews) {
  return [...new Set(items.map((r) => r.product))];
}
