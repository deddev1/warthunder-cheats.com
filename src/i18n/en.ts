import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE, SUPPORT_EMAIL } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'FC27 Cheats',
    domain: 'fc27-cheats.net',
    title: 'Buy Undetected FC 27 Cheats 2026 | ESP Soft Aim & UT',
    description:
      'Buy undetected FC 27 cheats for Ultimate Team, Rivals and Pro Clubs—player ESP, soft aim, shot assist and stream-proof overlays. Shop cheats, HWID Spoofer and UGC at fc27-cheats.net.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'FC 27 — EA build online',
    eyebrow: 'FC27 Cheats · check live status',
    title: 'Buy Undetected FC 27 Cheats for Ultimate Team & Clubs',
    subtitle:
      'Shop EA FC 27 cheats for Steam and EA App PC—player ESP, soft aim, shot assist and UT tools for Rivals, Champions and Pro Clubs. Re-check status after every EA patch, then pick Cheats, HWID Spoofer or UGC.',
    ctaPrimary: 'Get access',
    ctaPrimaryHref: productBase,
    ctaDiscord: 'Shop products',
    modesLabel: 'FC 27 game modes',
    modes: ['Ultimate Team', 'Clubs', 'Career Mode', 'Kick Off'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Products', strong: 'Cheats · Spoofer · UGC' },
      { label: 'Discord support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'What you buy in one FC 27 cheat package',
    subtitle: 'ESP, shot assist, auto-play helpers and utilities—priced by tier, delivered after checkout, updated every major patch.',
    items: [
      {
        title: 'Shot assist / Soft Aim',
        subtitle: 'Win Duels. Look Human.',
        desc: 'Soft aim and shot assist with target select, smoothing and FOV limits—tuned for Ultimate Team, Clubs and Kick Off on Windows PC.',
        bullets: [
          'Shot assist with smoothing and FOV circle limits',
          'Soft aim that guides the shot without hard snaps',
          'Target select: nearest defender, keeper or open lane',
          'Attack profiles for finesse, power and driven finishes',
          'Humanized delay sliders and visibility checks',
        ],
        tags: ['fc 27 shot assist', 'soft aim', 'target select'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See Every Opponent.',
        desc: 'Readable player ESP that stays clean on dense pitches, counterattacks and high press situations.',
        bullets: [
          'Boxes, names, role tags and distance',
          'Stamina, pressure and positioning indicators',
          'Team and club color filters',
        ],
        tags: ['fc 27 esp', 'player esp', 'opponent markers'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-1',
      },
      {
        title: 'Opponent radar',
        subtitle: 'Read the Pitch Before They Do.',
        desc: 'Track rival players, off-ball runs and passing lanes so you commit with full pitch awareness in UT and Clubs.',
        bullets: [
          'Opponent positions, runs and off-ball movement',
          'Passing lane and through-ball threat markers',
          'Set-piece and counter-attack alerts',
        ],
        tags: ['opponent radar', 'pitch esp', 'lane markers'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Shot assist tuning',
        subtitle: 'Finish Under Pressure.',
        desc: 'Timing and placement helpers with per-attack profiles—start conservative and tighten as you get comfortable in Career and UT.',
        bullets: ['Per-playstyle shot profiles', 'Timing and placement sliders', 'Formation-aware presets in the portal'],
        tags: ['shot assist', 'finishing helper', 'timing assist'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-2',
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extra Tools for Clutch Moments.',
        desc: 'Radar, kit unlock and quality-of-life tools beyond raw ESP and shot assist.',
        bullets: [
          'Radar: Pitch overlay for players and opponents',
          'Kit unlock: Preview kits and boots locally on your client',
          'Auto-play helpers: Suggested inputs when space opens up',
          'Stream Proof: Hide overlays from OBS capture',
        ],
        tags: ['radar', 'kit unlock', 'auto-play'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Coin & SBC farm helpers',
        subtitle: 'Efficient Grind. Zero Burnout.',
        desc: 'Speed up Ultimate Team economy runs with helpers that stay humanized—so you farm coins and SBC steps faster without obvious bot patterns.',
        bullets: [
          'Coin route hints for Squad Battles and events',
          'SBC objective chain reminders',
          'Safe stop when rivals appear on ESP',
          'Event-day farm presets',
        ],
        tags: ['coin farm', 'sbc helper', 'ut farm'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-3',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-5',
      },
      {
        title: 'FOV (camera)',
        subtitle: 'See More of the Pitch.',
        desc: 'Adjust camera field of view for better awareness in tight boxes and wide build-up play.',
        bullets: ['Adjustable FOV range', 'Quick reset to default FOV', 'Pairs with Player ESP and radar'],
        tags: ['fov hack', 'camera fov', 'awareness'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-5 lg:row-start-5',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch Day Ready.',
        desc: 'Same presets on every PC—portal updates track FC 27 patches and EA anti-cheat update days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-5',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Why buy FC27 Cheats here—patches, not empty promises',
    subtitle:
      'Most FC 27 cheat shops ship stale loaders, obvious shot assist, and ticket bots. We built fc27-cheats.net around patch-day delivery, humanized soft aim, and real Discord support.',
    usLabel: 'FC27 Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'EA-aware builds pushed within hours of FC 27 updates—check Discord #status before you queue a match.',
      },
      {
        title: 'Humanized aim & delays',
        desc: 'Smoothing, FOV limits and conservative defaults mimic real player timing—not instant snaps that get you reported and banned.',
      },
      {
        title: 'Real Discord support',
        desc: 'Open a ticket for loader setup, configs and HWID resets—real staff, not copy-paste FAQ replies.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the FC 27 process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Shot assist, ESP and per-mode profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord tickets—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major FC 27 or EA anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Discord support',
        desc: 'Open a ticket for setup, configs and account issues.',
      },
      {
        value: '600+',
        title: 'Active users',
        desc: 'FC 27 PC players running ESP, shot assist and utilities from fc27-cheats.net.',
      },
    ],
  },
  setup: {
    eyebrow: 'From zero to dominant',
    title: 'Get your FC27 cheats running in under six minutes',
    intro:
      'A guided setup that respects your time. Buy, load, play — with a real human one message away if anything snags.',
    steps: [
      {
        step: '01',
        title: 'Choose your access',
        desc: 'Check out securely and your key lands in the member dashboard instantly — no waiting on manual approvals.',
        linkLabel: 'Instant key delivery',
        href: productBase,
      },
      {
        step: '02',
        title: 'Run the loader',
        desc: 'Download the encrypted loader, paste your key, and let the guided installer verify your environment. Confirm the live status banner after every EA patch.',
        linkLabel: 'Guided, 60-second install',
        href: '/blog/use-codes/',
      },
      {
        step: '03',
        title: 'Tune & take over',
        desc: 'Open the in-game overlay, load a preset or fine-tune sliders for your mode, and step on the pitch with a controlled, quiet edge.',
        linkLabel: 'Your settings, your style',
        href: '/#features',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching FC 27 after updates.',
    items: ['Windows 10 & 11', 'Steam PC', 'EA App PC', 'FC 27 client (Steam or EA App)', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Cheat tiers',
    title: 'Buy Undetected FC 27 Cheats — Lite, Pro & Elite',
    subtitle: 'Compare Lite ESP, Pro soft aim, and Elite UT farm helpers—same loader stack for Ultimate Team and Clubs. Confirm the live status banner before every session.',
    viewAll: 'Compare all tiers',
    explore: 'Get access',
    items: [
      {
        badge: 'Entry',
        tier: 'Awareness',
        name: 'Lite',
        title: 'Buy Undetected FC 27 Lite Cheats — ESP & Radar',
        desc: 'Lite tier covers player ESP, opponent markers, pitch radar and FOV camera for Ultimate Team, Clubs, Career Mode and Kick Off—no shot assist.',
        features: ['Player ESP', 'Opponent & lane markers', 'Radar overlay', 'FOV (camera)', 'Stream-proof mode', 'Cloud configs'],
        more: 14,
        href: `${productBase}lite/`,
        variant: 'essential',
      },
      {
        badge: 'Most popular',
        tier: 'Finishing',
        name: 'Pro',
        title: 'Buy Undetected FC 27 Pro Cheats — Soft Aim & Shot Assist',
        desc: 'Pro tier adds soft aim, shot assist and attack profiles on top of every Lite ESP and radar module for Windows PC.',
        features: ['All Lite ESP modules', 'Shot assist / Soft Aim', 'Finishing tuning', 'Target selector', 'Playstyle profiles', 'Smoothing presets'],
        more: 28,
        href: `${productBase}pro/`,
        variant: 'popular',
      },
      {
        badge: 'FC 27 Cheats',
        tier: 'Cheats',
        name: 'Elite',
        title: 'Buy Undetected FC 27 Cheats — ESP Soft Aim & UT',
        desc: 'The full FC 27 cheat suite—shot assist, player ESP, opponent radar, coin/SBC farm helpers, kit unlock and priority EA patch delivery for Windows PC.',
        features: ['Shot assist / Soft Aim', 'Finishing tuning', 'Player & opponent ESP', 'Coin/SBC farm helpers', 'Kit unlock', 'Priority patch queue'],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Buy FC 27 Cheats, Spoofer & UGC',
    subtitle:
      'Three products for Windows PC—undetected FC 27 cheats, HWID Spoofer after hardware flags, and UGC account recovery. Module lists and secure checkout on each page.',
    viewAll: 'Shop all products',
    get: 'Get access',
    explore: 'Get access',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'Buy FC 27 HWID Spoofer — Reset After EA Ban',
        subtitle: 'HWID spoofer for Steam or EA App PC after an EA anti-cheat hardware flag',
        desc: 'This HWID spoofer rotates disk serials, MAC addresses and GPU IDs after EA anti-cheat flags your machine—portal setup included before you relaunch FC 27.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'Buy FC 27 UGC Unban Tools — Account Recovery',
        subtitle: 'Appeals for restricted FC 27 accounts',
        desc: 'Buy FC 27 UGC recovery tools for EA App holds, EA anti-cheat bans and online mode restrictions—custom appeal workflows, case docs and status tracking.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Buy FC 27 Unlock All — Kit & Skin Preview',
        subtitle: 'Unlock All and kit unlock on Steam or EA App PC',
        desc: 'Unlock All with kit unlock previews kits, boots and rarity variants locally—client-side cosmetics without the in-game store.',
        features: ['Kit & boot swap', 'Player item customizer', 'Rare kit preview', 'Squad favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'FC 27 Cheat Guides — Buy Undetected ESP & Soft Aim',
    subtitle: 'High-intent buy guides for undetected FC 27 cheats—tier picks, ESP, soft aim, HWID recovery and checkout walkthroughs.',
    latestTitle: 'FC 27 Cheat Guides — Buy ESP Soft Aim & Setup',
    latestSubtitle: 'Module explainers and tier comparisons to help you pick Lite, Pro or Elite and set up ESP, soft aim and utilities.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'Browse buy guides',
    read: 'Read & buy',
    items: [
      {
        tag: 'Guides',
        title: 'What Are FC27 Cheats? Private Tools for Rivals & Champs',
        slug: 'what-are-fc27-cheats',
        image: '/images/blog/fc27-fut-overlay.webp',
        desc: 'FC27 cheats are private tools for EA FC 27—aimbot, player ESP, finishing helpers and a stealth loader built for Division Rivals and Weekend League.',
        date: 'Nov 9, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Features',
        title: 'FC27 Aimbot, ESP & Auto-Win Timing — What Actually Helps',
        slug: 'fc27-aimbot-esp-explained',
        image: '/images/blog/fc27-pitch-gameplay.webp',
        desc: 'How FC27 aimbot, player and ball ESP, and auto-win timing helpers actually work — slider-controlled soft aim, run reading and green-timed finishing for UT and Clubs.',
        date: 'Nov 9, 2026',
        readTime: '9 min read',
      },
      {
        tag: 'Guides',
        title: 'Undetected FC27 Hacks — How the Stealth Loader Stays Clean',
        slug: 'undetected-fc27-hacks',
        image: '/images/blog/fc27-purple-match-overlay.webp',
        desc: 'How undetected FC27 hacks stay clean: encrypted memory loader, daily FC 27 build monitoring and fast pause when a patch or anti-cheat change looks risky.',
        date: 'Nov 8, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'FC27 Cheats for Division Rivals, Weekend League & Clubs',
        slug: 'fc27-cheats-division-rivals-weekend-league',
        image: '/images/blog/fc27-clubs-gameplay.webp',
        desc: 'Which modes FC27 cheats cover: Ultimate Team Division Rivals, FUT Champions / Weekend League, Pro Clubs 11v11 and online seasons — with per-mode presets.',
        date: 'Nov 8, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'Are FC27 Cheats Safe? Honest Ban Risk Before You Buy',
        slug: 'are-fc27-cheats-safe',
        image: '/images/blog/fc27-match-purple-esp-overlay.webp',
        desc: 'Are FC27 cheats safe? Any third-party tool carries risk. How our stealth loader, daily monitoring and fast pauses reduce exposure—without unbannable claims.',
        date: 'Nov 7, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy FC 27 Cheats vs Console Codes — What Works Online',
        slug: 'cheat-codes',
        image: '/images/blog/fc27-fut-overlay.webp',
        desc: 'Offline Kick Off and trainer tools differ from online UT and Clubs. See what works in practice and when a private loader with ESP and shot assist is needed.',
        date: 'Aug 20, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Guides',
        title: 'FC 27 Cheat Setup Tips — From Kick Off Practice to Live UT',
        slug: 'console-tips',
        image: '/images/blog/fc27-match-purple-esp-overlay.webp',
        desc: 'Outgrown offline practice? Compare undetected ESP and shot-assist tiers for online UT and Clubs—Lite, Pro and Elite with secure checkout.',
        date: 'Aug 19, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'How to Buy & Activate FC 27 Cheats After Checkout',
        slug: 'use-codes',
        image: '/images/blog/fc27-purple-match-overlay.webp',
        desc: 'Bought FC 27 cheats? Portal login, loader download, conservative presets and first-launch checks so your ESP and shot assist run in Ultimate Team, Clubs and Career Mode.',
        date: 'Aug 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: 'Undetected FC 27 Cheat Features — ESP Soft Aim & Utilities',
        slug: 'features',
        image: '/images/blog/fc27-clubs-gameplay.webp',
        desc: 'Feature guide: Player ESP, opponent radar, shot assist, FOV camera and kit unlock by Lite, Pro and Elite tier—compare modules before checkout.',
        date: 'Aug 18, 2026',
        readTime: '12 min read',
      },
      {
        tag: 'Guides',
        title: 'FC 27 Private Loader vs Offline Trainers — Buy the Right Tool',
        slug: 'console-cmds',
        image: '/images/blog/fc27-clubs-gameplay.webp',
        desc: 'Built-in offline trainers do not carry into online UT or Clubs. Why buyers choose a private loader with ESP and shot assist—tiers, checkout and portal access.',
        date: 'Aug 17, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy FC 27 Lite vs Pro Cheats — Which Undetected Tier?',
        slug: 'lite-vs-pro',
        image: '/images/blog/fc27-pitch-gameplay.webp',
        desc: 'Lite for ESP and radar, Pro for shot assist and soft aim. Compare tiers side by side and buy the FC 27 cheat tier that fits your game mode and playstyle.',
        date: 'Aug 16, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy FC 27 Elite Cheats — Full Undetected Ultimate Team Suite',
        slug: 'elite',
        image: '/images/blog/fc27-fut-overlay.webp',
        desc: 'Elite is the full FC 27 cheats suite: shot assist, ESP, coin/SBC farm helpers, kit unlock and priority patches. See who should buy Elite and how to check out.',
        date: 'Aug 16, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy FC 27 Soft Aim & Shot Assist — Undetected Pro Tools',
        slug: 'aimbot',
        image: '/images/blog/fc27-pitch-gameplay.webp',
        desc: 'Buy FC 27 shot assist and soft aim with Pro tier. See what target select, smoothing and finishing tuning do, then compare tiers and get access.',
        date: 'Aug 15, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy FC 27 ESP & Radar Cheats — Undetected Lite Setup',
        slug: 'esp',
        image: '/images/blog/fc27-match-purple-esp-overlay.webp',
        desc: 'Buy undetected FC 27 ESP and opponent radar with Lite. See what you get, how fast setup is after checkout and when to upgrade to Pro or Elite.',
        date: 'Aug 15, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy FC 27 FOV Camera Cheats with ESP Awareness',
        slug: 'fov',
        image: '/images/blog/fc27-fut-overlay.webp',
        desc: 'FOV camera ships on Lite and carries through Pro and Elite. Buy a wider view with ESP for box battles and wide build-up—compare tiers and get access.',
        date: 'Aug 14, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy FC 27 Unlock All — Kit & Skin Preview Utility',
        slug: 'skins',
        image: '/images/blog/fc27-match-purple-esp-overlay.webp',
        desc: 'Buy FC 27 kit unlock standalone or bundled with Elite. Preview kits, boots and cosmetics locally—see what you get and where to check out.',
        date: 'Aug 14, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'FC 27 Patch Day Checklist Before You Buy Undetected Cheats',
        slug: 'ea-patch',
        image: '/images/blog/fc27-fut-overlay.webp',
        desc: 'FC 27 or EA anti-cheat patch just dropped? Check live status, pick the right tier and buy safely—patch-day checklist for checkout and first launch.',
        date: 'Aug 13, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy FC 27 HWID Spoofer After an EA Ban — Reset Guide',
        slug: 'hwid',
        image: '/images/blog/fc27-clubs-gameplay.webp',
        desc: 'Hardware flagged after an EA anti-cheat ban? Buy FC 27 HWID Spoofer, compare it to a new account, and see when UGC appeal help fits. Checkout at fc27-cheats.net.',
        date: 'Aug 13, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'How to Buy Undetected FC 27 Cheats in 2026 — Lite Pro Elite',
        slug: 'buy-guide',
        image: '/images/blog/fc27-clubs-gameplay.webp',
        desc: 'Step-by-step buy guide: choose Lite, Pro or Elite, pay at secure checkout and unlock your portal. The 2026 walkthrough from tier pick to first launch.',
        date: 'Aug 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy FC 27 Soft Aim Profiles — Target Select & Playstyles',
        slug: 'bones',
        image: '/images/blog/fc27-pitch-gameplay.webp',
        desc: 'Buy Pro for shot-assist target select and per-playstyle finishing profiles in UT, Clubs and Career. See example profiles and get access.',
        date: 'Aug 12, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'EA Anti-Cheat Errors vs Buying FC 27 UGC or HWID Help',
        slug: 'ea-error',
        image: '/images/blog/fc27-purple-match-overlay.webp',
        desc: 'An EA App or EA anti-cheat launch error is usually not a ban. Quick checks first, then when to buy UGC appeal workflows or HWID Spoofer. Then get access to FC 27 cheats.',
        date: 'Aug 11, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy External FC 27 Cheats — Safer Undetected Loader Delivery',
        slug: 'external',
        image: '/images/blog/fc27-clubs-gameplay.webp',
        desc: 'Why buyers choose external FC 27 cheats: private loader, portal updates and cloud configs. Compare tiers and get access instead of risky free downloads.',
        date: 'Aug 11, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Stream-Proof FC 27 Cheats for Creators — OBS Safe Overlay',
        slug: 'stream-proof',
        image: '/images/blog/fc27-match-purple-esp-overlay.webp',
        desc: 'Stream Proof hides your ESP and shot-assist overlay from OBS and Game Bar. Included on every tier—compare FC 27 cheats for creators and get access.',
        date: 'Aug 10, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'The full toolkit',
    title: 'What FC27 cheats unlock',
    subtitle:
      'Built undetected-first and tuned every patch cycle. Run a subtle profile in Rivals, then open it up for a Champs weekend.',
    categories: [
      {
        id: 'gameplay',
        title: 'Gameplay & meta',
        features: [
          {
            title: 'Precision Aimbot',
            desc: 'Shot and pass assistance that weights your finishing and timing, slider-controlled from subtle to full Champs mode.',
          },
          {
            title: 'Instant Power Bar',
            desc: 'Every shot is treated as fully charged the instant you tap, more consistent than manual green-timing.',
          },
          {
            title: 'Ball Teleport',
            desc: 'Turn a clean look into a goal with a single button press.',
          },
          {
            title: 'Advanced Sliders',
            desc: 'Local sliders push your players toward 99 OVR; opponent sliders quietly slow theirs down.',
          },
        ],
      },
      {
        id: 'spoofers',
        title: 'Spoofers & matchmaking',
        features: [
          {
            title: 'Division Spoofer',
            desc: 'Drop into an easier division for softer matches while wins still count for rewards and objectives.',
          },
          {
            title: 'Champions W/L Spoofer',
            desc: 'Reshape your FUT Champions record to pull easier opponents in the draw.',
          },
          {
            title: 'Champions Round Spoofer',
            desc: 'Set the Champions round you want to play.',
          },
          {
            title: 'Spoof EA ID',
            desc: 'Keep your identity hidden so opponents never know who they are facing.',
          },
        ],
      },
      {
        id: 'rage',
        title: 'Rage tools',
        features: [
          {
            title: 'Disconnect Match',
            desc: 'End a game on your terms — lead and it banks the win, behind and it cancels.',
          },
          {
            title: 'Crash Opponent',
            desc: 'Force the other player out so the match counts as their loss.',
          },
          {
            title: 'Freeze Opponent',
            desc: 'Stall their game mid-match when you need a result.',
          },
          {
            title: 'Anti-Crash',
            desc: 'Shrug off crash attempts aimed at you.',
          },
        ],
      },
      {
        id: 'clubs',
        title: 'Pro Clubs & progression',
        features: [
          {
            title: 'Pro Clubs AI Auto-Play',
            desc: 'Let the AI cover your virtual pro during Clubs matches.',
          },
          {
            title: 'XP Boost',
            desc: 'Level up and progress far faster than a normal grind.',
          },
          {
            title: 'Unlock All PlayStyles',
            desc: 'Open every PlayStyle instantly.',
          },
          {
            title: 'UT Trade Radar',
            desc: 'Live market signals to snipe and flip cards for coins.',
          },
        ],
      },
      {
        id: 'qol',
        title: 'Quality of life',
        features: [
          {
            title: 'Skip Pack Animations',
            desc: 'Blow through pack openings instead of watching every walkout.',
          },
          {
            title: 'Instant Moment',
            desc: 'Clear Moments challenges in one click.',
          },
          {
            title: 'Squad Battles Time Changer',
            desc: 'Shorten or instantly end Squad Battles games.',
          },
          {
            title: 'Desync & Alt-Tab Bypass',
            desc: 'Stay connected through server desyncs and alt-tabs with no penalties.',
          },
        ],
      },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to an FC 27 profile you can reuse every session.',
    ctaLabel: 'Shop products',
    ctaHref: productBase,
    ctaSecondary: 'Pre-purchase FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check EA build status',
        desc: 'Read the live banner on fc27-cheats.net before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Lite, Pro or Elite—the access level that matches how you play.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune smoothing in Kick Off or Squad Battles.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save Ultimate Team and Clubs presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how FC 27 plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official EA blog—check before you queue a match.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe smoothing and ESP ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real Discord support', desc: 'Stuck on the loader or shot-assist configs? Discord staff walk you through it—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'FC 27 Cheats Support — Loader, HWID & Checkout Help',
    subtitle: 'Open a Discord ticket for undetected FC 27 loader errors, HWID Spoofer setup and checkout help—or use the cards below for self-serve answers first.',
    channels: [
      {
        icon: 'messageCircle',
        title: 'Discord support',
        desc: 'Join Discord and open a ticket for loader, HWID, and account issues. Fastest path after checkout.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
      {
        icon: 'navFaq',
        title: 'Pre-purchase FAQ',
        desc: 'Tier differences, ban risk, Windows requirements, and what happens after you buy—before you open a ticket.',
        linkLabel: 'Read FAQ',
        href: '/faq/',
      },
      {
        icon: 'package',
        title: 'Products & tiers',
        desc: 'Compare Lite, Pro, Elite and utilities—module lists, screenshots, and secure checkout.',
        linkLabel: 'Shop products',
        href: productBase,
      },
      {
        icon: 'mail',
        title: 'Email support',
        desc: 'Prefer email for billing or order ID questions? Message support with your checkout confirmation.',
        linkLabel: 'Email support',
        href: `mailto:${SUPPORT_EMAIL}`,
      },
    ],
    ticketTitle: 'Include in your Discord ticket',
    ticketItems: [
      { title: 'Order ID', desc: 'Your checkout order ID from the purchase confirmation.' },
      { title: 'Issue type', desc: 'Loader, HWID Spoofer, kit unlock, or account access—say which one.' },
      { title: 'Error screenshot', desc: 'Exact error text or a screenshot from the loader or game.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'FC 27 Cheats FAQ — Buy, Setup & Ban Risk',
    subtitle: 'Clear answers before you buy undetected FC 27 cheats—tiers, ban risk, Windows support and checkout delivery.',
    items: [
      {
        num: '01',
        q: 'Where do I check if FC 27 cheats are online?',
        a: 'The live status banner is on fc27-cheats.net and in the Discord #status channel. Always check after an EA Sports FC 27 patch or an EA anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching FC 27.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party FC 27 cheats?',
        a: 'Yes—any modification carries risk. EA anti-cheat, EA Sports and online matchmaking keep evolving detection and reports. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'FC 27 via Steam or EA App on Windows 10/11 64-bit only. macOS, Linux and consoles are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'FC 27 Cheats, HWID Spoofer and UGC live at fc27-cheats.net/products/fc27-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Buy undetected FC 27 cheats — ESP, shot assist & utilities for PC. Secure checkout at fc27-cheats.net',
    explore: 'Shop',
    exploreLinks: [
      { href: '/', label: 'What you can buy', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/fc27-cheats/elite/', label: 'Buy FC 27 cheats', ariaLabel: 'FC 27 cheats' },
      { href: '/products/fc27-cheats/', label: 'Shop all products', ariaLabel: 'Products' },
      { href: '/reviews/', label: 'Buyer reviews', ariaLabel: 'Reviews' },
      { href: '/blog/', label: 'Buy guides & tier tips', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About FC27 Cheats — Undetected EA FC 27 Tools Store',
      description:
        'Meet the team behind fc27-cheats.net—buy undetected FC 27 cheats with ESP, soft aim and Windows utilities, plus patch-day updates and Discord help after checkout.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'FC27 Cheats (fc27-cheats.net) is a buyer-focused storefront for undetected FC 27 tools on Steam and EA App PC. We publish tier comparisons, setup guides, and honest risk notes so you know what you are purchasing before checkout—not vague marketing copy.',
            'We are not EA Sports and we are not affiliated with EA Sports or EA anti-cheat. FC 27 is a trademark of EA Sports. Product names on this site describe software categories (ESP, shot assist, utilities), not official game features.',
          ],
        },
        {
          heading: 'What we sell',
          paragraphs: [
            'Match tiers: Lite (player ESP, opponent radar, FOV camera), Pro (adds shot assist, soft aim, finishing tuning, target select), and Elite (full suite including coin/SBC farm helpers, kit unlock, and priority patch queue). Each tier page lists modules, screenshots, and system requirements for Windows 10/11.',
            'Utilities sold separately: HWID Spoofer for hardware-flag recovery, UGC tools for structured ban and account appeals, and kit unlock / Unlock All for local cosmetic preview. The utilities comparison page explains which tool fits a ban versus a cosmetic goal.',
            'Every listing links to secure checkout through our payment partner. After purchase, your operator portal provides the loader, setup guide, and config library for the tier you bought.',
          ],
        },
        {
          heading: 'How buying works',
          paragraphs: [
            'Use Get access on the homepage or product page to open checkout. You will complete payment on our partner checkout, then receive portal access for downloads. Keep your order confirmation email—support tickets ask for that order ID.',
            'Not sure which tier to pick? Start with the Lite vs Pro guide on the blog, the features guide for every module, or the pre-purchase FAQ. Buyer reviews on /reviews/ describe real setups in Ultimate Team, Clubs and Career Mode (ESP tuning, stream-proof overlays, spoofer workflows).',
            'We do not sell loader files through Discord DMs or random download links. Only use files from your portal after checkout.',
          ],
        },
        {
          heading: 'How we update after FC 27 patches',
          paragraphs: [
            'FC 27 patch days and EA anti-cheat updates can disable modules until a new build ships. We post status on the homepage banner and in Discord #status when builds are online, testing, or offline.',
            'Elite buyers get priority in the patch queue when slots are available. If the banner shows offline, do not launch modules—wait for the updated loader and read the EA patch day checklist on the blog before rejoining online modes.',
            'Blog posts cover post-patch workflows: checking status, downloading the latest loader, loading conservative presets, and when HWID Spoofer or UGC help applies after a ban.',
          ],
        },
        {
          heading: 'Proof and self-serve answers',
          paragraphs: [
            'The FAQ answers tier differences, ban risk, Windows/Steam/EA App requirements, and what happens after checkout. The forum hosts buyer-style Q&A on ESP setup, shot-assist smoothing, and utility choice—search there before opening a ticket.',
            'Product pages include gameplay screenshots updated for current patches. Reviews are labeled by product (Elite, HWID Spoofer, UGC, kit unlock) so you can read feedback relevant to your purchase.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Loader errors, HWID Spoofer setup, and checkout questions go through Discord tickets (linked on the Support page). Include your order ID, Windows build, FC 27 game mode, and a screenshot of any error text.',
            'For billing or refund policy questions, read the Terms of Sale first—then open a ticket if your case matches the supported refund criteria (fault on our side on a supported setup with the status banner online).',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy — Data, Cookies & Checkout',
      description:
        'Privacy policy for fc27-cheats.net: how we handle cookies, analytics, Discord tickets, checkout partners, data retention and your rights as a shopper.',
      sections: [
        {
          heading: 'Scope',
          paragraphs: [
            'This privacy policy covers fc27-cheats.net—the marketing site, guides, and product pages. It does not govern third-party checkout, payment processing, or your operator portal; those services have their own policies when you leave our domain.',
            'Last updated: October 2026. We may revise this page when our analytics or support tools change; material updates will be reflected in the date above.',
          ],
        },
        {
          heading: 'Information we collect',
          paragraphs: [
            'When Google Analytics is enabled, we may receive aggregated metrics such as pages viewed, referral source, device category, browser, and approximate geography. We use this to see which buy guides and product pages help shoppers—not to build individual advertising profiles on this site.',
            'If you open a Discord support ticket, we see what you send there: Discord username, message text, attachments you choose to upload, and any order ID or email you provide for billing lookup.',
            'We do not ask for your FC 27 account password on fc27-cheats.net. We do not store payment card numbers, CVV codes, or full billing addresses on this domain.',
          ],
        },
        {
          heading: 'Information we do not sell',
          paragraphs: [
            'We do not sell your personal information to data brokers. Affiliate checkout links may use their own tracking when you complete a purchase on the checkout domain—that processing is governed by the checkout provider’s policy, not this page.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics inform content updates: which FAQ topics need expansion, which product pages get the most pre-purchase traffic, and whether mobile readers can load guides quickly.',
            'Support data is used only to troubleshoot loader issues, utility setup, or order access. Staff may reference your ticket history if you follow up on the same order ID.',
          ],
        },
        {
          heading: 'Cookies and local storage',
          paragraphs: [
            'Analytics cookies (when enabled) measure traffic volume. You can block or delete cookies in your browser; the site remains readable without them.',
            'We store theme preference (light or dark) in local storage so your choice persists between visits. That value stays on your device unless you clear site data.',
            'We do not use advertising cookies on fc27-cheats.net for retargeting across unrelated websites.',
          ],
        },
        {
          heading: 'Checkout and delivery partners',
          paragraphs: [
            'Clicking Get access opens our secure checkout partner in the same browser tab to pay and receive portal credentials. Name, email, payment method, and fraud-prevention signals are handled by that provider.',
            'We may receive confirmation that a purchase completed (for example order ID and product tier) through support workflows you initiate—we do not host the payment form itself.',
          ],
        },
        {
          heading: 'Security',
          paragraphs: [
            'fc27-cheats.net is served over HTTPS. Do not send payment details or portal passwords through Discord tickets; use the official checkout and portal only.',
          ],
        },
        {
          heading: 'Data retention',
          paragraphs: [
            'Analytics retention follows the configuration in Google Analytics when the service is active. Discord ticket content is kept as long as needed to resolve the issue and for reasonable follow-up on the same order.',
            'You may ask us to delete support messages that are no longer needed after a case is closed, subject to legal or fraud-prevention holds.',
          ],
        },
        {
          heading: 'Your choices and rights',
          paragraphs: [
            'You can opt out of analytics cookies via browser settings or extensions. For portal or billing data held by the checkout provider, contact that provider using the links in your order email.',
            'For privacy questions about fc27-cheats.net or Discord tickets, open a ticket from the Support page. For purchase disputes, see the Terms of Sale.',
          ],
        },
        {
          heading: 'Children',
          paragraphs: [
            'fc27-cheats.net is not directed at children under 13, and we do not knowingly collect personal information from children. FC 27 is rated for mature audiences; purchasers must comply with Steam, EA App and local age rules.',
          ],
        },
      ],
    },
    terms: {
      title: 'FC27 Cheats Terms of Sale',
      description:
        'Rules for purchasing FC 27 cheat licenses on fc27-cheats.net—delivery, personal use, refunds, EA anti-cheat risk and acceptable product use.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using fc27-cheats.net or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to FC 27 cheat tiers (Lite, Pro, Elite) and utility tools (HWID Spoofer, UGC, kit unlock / Unlock All) delivered through a portal and loader for Steam or EA App on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when FC 27 or EA anti-cheat updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. fc27-cheats.net does not process or store payment card numbers.',
            'After purchase, use the portal linked from your order flow to download the current loader and setup guide before launching FC 27.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, EA anti-cheat bans, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—FC 27 on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—open a ticket on our Discord. Include your order ID, Windows version, FC 27 client build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for FC 27 can conflict with game updates and EA anti-cheat. EA Sports and online services may take action against accounts. You use this software at your own risk, including possible bans.',
            'Check the homepage status banner before every session. Do not queue online matches while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, join our Discord and open a ticket via the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'FC 27 Cheats Support — Loader, HWID & Checkout Help',
      description:
        'Get Discord support for FC 27 loader errors, HWID Spoofer setup and checkout questions at fc27-cheats.net.',
      sections: [
        {
          heading: 'Before you open a ticket',
          paragraphs: [
            'Check the live status banner on the homepage and in Discord #status—especially after an FC 27 update or EA patch. If status is offline, wait for the new build instead of forcing an old loader.',
            'Download the loader only from your operator portal (linked in your order email). Do not run files from DMs, YouTube links, or forum attachments.',
            'Have your checkout order ID, Windows version (10 or 11), FC 27 client build, and a screenshot of the exact error ready. Redact unrelated personal info from screenshots when possible.',
          ],
        },
        {
          heading: 'Loader and in-game issues',
          paragraphs: [
            'Start the loader before FC 27, use the setup guide tier for your purchase, and test in Kick Off or Squad Battles with conservative ESP ranges and shot-assist smoothing.',
            'If an EA App or EA anti-cheat error shows “failed to initialize,” read the EA anti-cheat errors guide on the blog first—many cases are driver or overlay conflicts, not a ban. Include whether the issue started right after a patch.',
            'For shot assist or ESP tuning, say which game mode (Ultimate Team, Clubs, Career) and formation you use. Staff can suggest portal presets; they cannot guarantee ban immunity.',
          ],
        },
        {
          heading: 'HWID Spoofer and utilities',
          paragraphs: [
            'HWID tickets: note whether you are on a fresh EA or Steam account, if EA anti-cheat flagged hardware, and whether you ran the compatibility scan from the spoofer guide. Follow cleanup steps before relaunching FC 27.',
            'UGC tickets: describe ban type (Steam, EA anti-cheat, online restriction) and what appeal steps you already tried. UGC tools organize cases—they do not automatically remove bans.',
            'Kit unlock tickets: confirm you purchased the utility or Elite tier that includes it, and whether the issue is preview-only (client-side) versus a loader error.',
          ],
        },
        {
          heading: 'Checkout and portal access',
          paragraphs: [
            'If payment succeeded but portal access is missing, wait a few minutes and check spam for the order email. Open a ticket with the order ID and the email used at checkout—do not share card numbers in Discord.',
            'Wrong tier purchased? Ask in a ticket before rebuying; staff may advise upgrade paths through the portal when available.',
            'Refund requests must match the criteria in our Terms of Sale (fault on our side on a supported setup with status online). Change-of-mind or ban-related refunds are not offered.',
          ],
        },
        {
          heading: 'Buying help (pre-purchase)',
          paragraphs: [
            'Compare Lite, Pro and Elite on the products hub, read Lite vs Pro and the features guide, or search the FAQ for tier and ban-risk questions. Reviews on /reviews/ are grouped by product for ESP, Elite, spoofer, and UGC feedback.',
            'Utility shoppers: use the utilities comparison table for HWID Spoofer vs UGC vs kit unlock, then open the product page for screenshots and requirements before Get access.',
          ],
        },
        {
          heading: 'What to expect from support',
          paragraphs: [
            'Tickets are answered in Discord when staff are online—peak times follow EU and US evenings. One ticket per issue keeps threads clear; bump only after 24 hours with new logs if nothing changed.',
            'We do not provide ban guarantees, account unbans, or instructions to evade EA rules. We help with loader delivery, setup, and product behavior described on fc27-cheats.net.',
          ],
        },
      ],
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Get access',
    browseCheatsMobile: 'Get access',
    homeAria: 'FC27 Cheats home',
    checkoutAria: 'Get access to FC27 Cheats',
    discordAria: 'Join FC27 Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
