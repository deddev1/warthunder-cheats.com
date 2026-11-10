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
    handle: 'warfare_main',
    rating: 5,
    product: 'Delta Force Elite',
    productHref: '/products/deltaforce-cheats/elite/',
    title: 'Elite loot ESP in Warfare',
    body: 'Bought Elite before a major patch. Loot ESP and player tags made flanking in Warfare much cleaner, and XP farm helpers cut grind between events. Portal presets loaded fast—Discord helped tune aimbot smoothing for my M4 first session.',
    date: 'Sep 12, 2026',
    verified: true,
  },
  {
    id: 'r2',
    name: 'Elena R.',
    handle: 'stream_safe_df',
    rating: 5,
    product: 'Delta Force Elite',
    productHref: '/products/deltaforce-cheats/elite/',
    title: 'Stream-proof overlays for DF creators',
    body: 'Needed stream-proof so OBS never shows ESP on Warfare matches. Worked on game capture after the blog checklist. Soft aim with a small FOV circle feels human—no snap reports from my squad.',
    date: 'Sep 4, 2026',
    verified: true,
  },
  {
    id: 'r3',
    name: 'Jordan P.',
    handle: 'ops_raider',
    rating: 5,
    product: 'Delta Force Elite',
    productHref: '/products/deltaforce-cheats/elite/',
    title: 'Ballistic prediction for Operations',
    body: 'Ballistic prediction and recoil profiles saved me in Operations raids. Started conservative like the guide said. Loader update after an EAC patch landed before I queued again.',
    date: 'Aug 28, 2026',
    verified: true,
  },
  {
    id: 'r4',
    name: 'Sam T.',
    handle: 'hwid_reset',
    rating: 5,
    product: 'HWID Spoofer',
    productHref: '/products/deltaforce-cheats/hwid-spoofer/',
    title: 'HWID Spoofer after a hardware flag',
    body: 'Fresh Easy Anti-Cheat accounts died instantly on one PC. Followed the restore-point checklist, spoofed, cold reboot, then verified IDs. Back in Delta Force the same night—support walked me through Discord.',
    date: 'Aug 21, 2026',
    verified: true,
  },
  {
    id: 'r5',
    name: 'Chris V.',
    handle: 'loot_radar',
    rating: 4,
    product: 'Delta Force Elite',
    productHref: '/products/deltaforce-cheats/elite/',
    title: 'Radar & loot ESP in Warfare',
    body: 'Radar plus loot ESP is what I use most in Warfare. Distance filters took a session to dial in, but I stop walking into ambushes. Would love more map presets—still a solid buy.',
    date: 'Aug 15, 2026',
    verified: true,
  },
  {
    id: 'r6',
    name: 'Priya N.',
    handle: 'skin_preview',
    rating: 5,
    product: 'Skin Unlock',
    productHref: '/products/deltaforce-cheats/unlock-all/',
    title: 'Unlock All for skin previews',
    body: 'Bought Unlock All standalone to preview operator and weapon skins locally. Other players still see my real inventory, which matches the product page. Fast checkout and portal download.',
    date: 'Aug 9, 2026',
    verified: true,
  },
  {
    id: 'r7',
    name: 'Diego M.',
    handle: 'ugc_help',
    rating: 4,
    product: 'UGC Recovery',
    productHref: '/products/deltaforce-cheats/ugc/',
    title: 'UGC workspace after an Easy Anti-Cheat hold',
    body: 'UGC organized my restriction docs and follow-ups—no magic unban, which they are honest about. Status tracking made Discord tickets clearer. HWID tips from the blog helped decide next steps.',
    date: 'Aug 2, 2026',
    verified: true,
  },
  {
    id: 'r8',
    name: 'Alex W.',
    handle: 'patch_day',
    rating: 5,
    product: 'Delta Force Elite',
    productHref: '/products/deltaforce-cheats/elite/',
    title: 'Loader updates after EAC patches',
    body: 'Status banner + Discord #status kept me from launching mid-patch. New loader build showed up within the window they advertise. Checkout to first battle was under an hour with portal presets.',
    date: 'Jul 26, 2026',
    verified: true,
  },
  {
    id: 'r9',
    name: 'Nina L.',
    handle: 'warfare_main_2',
    rating: 5,
    product: 'Delta Force Elite',
    productHref: '/products/deltaforce-cheats/elite/',
    title: 'Soft aim that does not look obvious',
    body: 'Bone select and smoothing defaults feel fair for Warfare. Squad noticed fewer wild snaps versus free tools we tried years ago. Support answered a loader question same evening.',
    date: 'Jul 18, 2026',
    verified: true,
  },
  {
    id: 'r10',
    name: 'Owen H.',
    handle: 'ops_grinder',
    rating: 3,
    product: 'Delta Force Elite',
    productHref: '/products/deltaforce-cheats/elite/',
    title: 'Works well after a longer setup night',
    body: 'ESP and radar do what they say in Warfare. First launch took me longer than expected—I missed a portal note and Discord had to nudge me. Once presets were loaded it felt solid. Three stars only because day-one setup was slower than the marketing made it sound.',
    date: 'Jul 11, 2026',
    verified: true,
  },
  {
    id: 'r11',
    name: 'Maya S.',
    handle: 'ops_entry',
    rating: 3,
    product: 'Delta Force Elite',
    productHref: '/products/deltaforce-cheats/elite/',
    title: 'Good awareness tools, still tuning aim',
    body: 'Loot and player ESP helped a lot in Operations. Soft aim needed more smoothing than the default for my entry frags, and I wish the in-portal tips were a bit clearer. Not a bad product—just average until you spend an evening dialing profiles.',
    date: 'Jul 3, 2026',
    verified: true,
  },
  {
    id: 'r12',
    name: 'Leo F.',
    handle: 'spoof_once',
    rating: 3,
    product: 'HWID Spoofer',
    productHref: '/products/deltaforce-cheats/hwid-spoofer/',
    title: 'Spoofer worked, guide is dense',
    body: 'Got past the hardware flag after a cold reboot and ID check. The checklist is thorough but a little long for a first-timer—I had to reread two steps. Support was polite when I asked. Fine tool; docs could be shorter for people in a hurry.',
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
