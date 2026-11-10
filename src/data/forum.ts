export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'esp-include', title: 'What does Player ESP include before I buy?', upvotes: 73,
    excerpt: 'Player ESP breakdown: boxes, loot tags, objective markers and radar covered in the ESP buy guide before checkout.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ESP and radar setup for Delta Force', sourcePath: '/blog/esp/',
    answer: 'The guide covers player boxes, names, health and distance, skeleton ESP, loot and objective markers, and the radar overlay. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a fight near an objective or in urban cover.',
    tip: 'Keep the overlay uncluttered: begin with players and the nearest loot markers, then adjust the distance filters one at a time.',
  }),
  guideDiscussion({
    slug: 'esp-setup', title: 'How should I set up ESP overlay the first time?', upvotes: 58,
    excerpt: 'First-time ESP overlay setup: enable basics, confirm on a firing range, then tune one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ESP and radar setup for Delta Force', sourcePath: '/blog/esp/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover your HUD, minimap or the crosshair.',
    detail: 'Test your layout on a low-population or firing range before relying on it in a busy one. A simple configuration is easier to read than turning on every option immediately.',
    tip: 'If the screen feels crowded, lower the loot ESP distance and hide low-priority AI before changing colors or sizes.',
  }),
  guideDiscussion({
    slug: 'fov-settings', title: 'What FOV hack settings feel comfortable in PvP?', upvotes: 44,
    excerpt: 'FOV hack tips: widen awareness without stretching the screen or making distant targets hard to track.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'FOV hack guide for Delta Force', sourcePath: '/blog/fov/',
    answer: 'There is no single ideal FOV for every player. The guide recommends adjusting gradually and checking that you can still judge distance, recoil and enemy movement at range.',
    detail: 'Keep a quick reset hotkey to the default FOV available so you can compare the wider view with familiar framing, especially for CQC fights and mid-range gunfights.',
    tip: 'Change one step at a time and spend a short session on a firing range before settling on a new value.',
  }),
  guideDiscussion({
    slug: 'aim-smooth', title: 'How do Aimbot smoothing settings change soft aim?', upvotes: 32,
    excerpt: 'Aimbot smoothing, FOV circles and why the PvP buy guide recommends conservative soft-aim tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aimbot and ballistic assist for PvP', sourcePath: '/blog/aimbot/',
    answer: 'Smoothing controls how quickly the crosshair moves toward a target. The guide recommends higher smoothing, a small FOV circle and a short test session before making any changes.',
    detail: 'Changing one value at a time is easier to review than adjusting FOV, smoothing and bone selection together.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'recoil-drill', title: 'Best way to test Ballistic assist weapon profiles?', upvotes: 29,
    excerpt: 'Practice ballistic profiles one weapon at a time on a firing range before live PvP.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aimbot bone select and recoil scripts for Delta Force', sourcePath: '/blog/bones/',
    answer: 'Choose one weapon loadout and one profile to test at a time. The guide walks through example profiles for ARs, SMGs, DMRs and snipers, and explains how bone selection fits with ballistic assist.',
    detail: 'A firing range lets you repeat the same burst on a target and see which values need adjustment without risking a live match.',
    tip: 'Learn the manual spray pattern first; that makes it much easier to spot when a profile is over-compensating.',
  }),
  guideDiscussion({
    slug: 'elite-tools', title: 'What extra tools ship with Elite tier cheats?', upvotes: 67,
    excerpt: 'Elite tier vs Lite/Pro: XP/currency farm helpers, Skin unlock, priority patches and the full ESP suite.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Elite tier guide: when to upgrade your cheat tools', sourcePath: '/blog/elite/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as XP/currency farm helpers, the full radar suite, priority patch delivery and Skin unlock.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'lite-pro', title: 'How do Lite tier and Pro cheat tiers differ?', upvotes: 53,
    excerpt: 'Lite tier is ESP and radar; Pro adds aimbot and ballistic assist. Short buyer comparison before checkout.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Lite tier vs Pro: which tier fits you', sourcePath: '/blog/lite-vs-pro/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as player ESP, loot ESP, radar and FOV. Pro adds Aimbot, Soft Aim and Ballistic assist on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want the aim assist modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'skin-info', title: 'What should I know before buying Skin unlock?', upvotes: 38,
    excerpt: 'Skin unlock / Unlock All: local skin and decal previews, limits, and what other players see.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Skin changer and Unlock All for Delta Force', sourcePath: '/blog/skins/',
    answer: 'The guide describes Skin unlock as a local cosmetic preview utility for operator and weapon skins. It explains setup, supported options, and how to restore your default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews that other players do not see; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'eac-init', title: 'Easy Anti-Cheat failed to initialize—what should I try first?', upvotes: 24,
    excerpt: 'Easy Anti-Cheat failed to initialize: verify Steam files and reinstall Easy Anti-Cheat before assuming a ban.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Easy Anti-Cheat failed to initialize in Delta Force', sourcePath: '/blog/eac-error/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify game files through Steam.',
    detail: 'It also recommends fully exiting Steam, reinstalling Easy Anti-Cheat from the game install folder, restarting the PC, and checking for conflicting overlays or drivers before trying more disruptive steps.',
    tip: 'Test a normal Steam launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'ext-loader', title: 'What does an External cheat loader mean?', upvotes: 46,
    excerpt: 'External cheat loader explained: separate process, overlay UI, portal updates vs risky injectors.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Delta Force external cheat guide', sourcePath: '/blog/external/',
    answer: 'The article uses "external" to describe software that runs separately from the game process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever the game or Easy Anti-Cheat receives an update.',
  }),
  guideDiscussion({
    slug: 'stream-check', title: 'How do I check Stream-proof overlay in OBS?', upvotes: 21,
    excerpt: 'Stream-proof setup: record an OBS test so ESP overlays stay off your VOD before you go live.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for Delta Force', sourcePath: '/blog/stream-proof/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'hwid-check', title: 'After an Easy Anti-Cheat ban, what should I check on HWID?', upvotes: 33,
    excerpt: 'HWID Spoofer vs new account after an Easy Anti-Cheat hardware flag—checks before Discord support.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'HWID spoofer vs new account after an Easy Anti-Cheat ban', sourcePath: '/blog/hwid/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions, when a new Steam account is enough, and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'pre-install', title: 'What to review before installing cheat tools?', upvotes: 18,
    excerpt: 'Before installing cheat tools: status banner, Windows/Steam notes, and official setup on deltaforce-cheats.net.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'cheat tools features: aimbot, ESP, ballistic assist and more', sourcePath: '/blog/features/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update and status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'choose-tier', title: 'How do I choose the right cheat tier to buy?', upvotes: 48,
    excerpt: 'Pick Lite, Pro or Elite cheat tools by feature set, then follow secure checkout on deltaforce-cheats.net.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy cheat tools in 2026', sourcePath: '/blog/buy-guide/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching the game.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'admin-official', category: 'General', categoryTone: 'purple',
    title: 'Do free cheat codes work in live Warfare or Operations?',
    excerpt: 'Quick answer from the cheat-codes guide: free code lists do not equal a live-match loader for Warfare or Operations.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'cheat codes guide: free lists vs live-match ESP and aimbot', sourcePath: '/blog/cheat-codes/',
    body: ['No. Free “cheat code” lists and training-only tools do not give ESP, aimbot or radar in live Warfare or Operations matchmaking.', 'If you want player ESP, loot ESP and aim assist on live matches, compare Lite, Pro and Elite on the products hub, then check out for portal access. The guide explains the difference clearly.'],
    comments: [
      { author: 'ops_raider_42', age: '1 hour ago', score: 24, body: 'Correct: training tools are not a substitute for a maintained loader on live servers.' },
      { author: 'ak_or_nothing', age: '48 min. ago', score: 11, body: 'I wasted time on code lists first. The features guide made the tier choice obvious.' },
      { author: 'loot_runner', age: '35 min. ago', score: 8, body: 'Useful distinction. Free codes are not a cheat product for live matches.' },
    ],
  },
  {
    slug: 'f1-console', category: 'General', categoryTone: 'purple',
    title: 'How do I get the cheat working after I buy?',
    excerpt: 'After checkout: portal login, loader download, conservative presets, then a short test before live queue.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to use Delta Force cheats after checkout', sourcePath: '/blog/use-codes/',
    body: ['Log into the operator portal with your order email, download the current loader, and load a conservative preset. Check the live status banner before you launch.', 'Test ESP and aim modules in a low-risk session first, then queue Warfare or Operations. If something fails, open Discord with your order ID and Windows version.'],
    comments: [
      { author: 'warfare_main', age: '3 hours ago', score: 17, body: 'Status banner first—saved me from launching mid-patch.' },
      { author: 'carry_curious', age: '2 hours ago', score: 9, body: 'Portal presets are easier than starting from blank sliders.' },
    ],
  },
  {
    slug: 'spray-safe', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Safest way to practice recoil and aim?',
    excerpt: 'Practice recoil control on a firing range with a static target before live Warfare or Operations queues.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'Delta Force aim practice tips', sourcePath: '/blog/console-tips/',
    body: ['Use the firing range. Pick one weapon, fire controlled bursts from a fixed distance, and compare each pass so you can see dispersion and recoil.', 'Tune Soft Aim and Ballistic assist after that, then move into a live Warfare or Operations match with conservative values.'],
    comments: [
      { author: 'stack_and_pull', age: '5 hours ago', score: 13, body: 'I bracket each burst on the target to see dispersion. It makes controlling an M4 spray pattern much easier to learn.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'One weapon at a time beats changing five sliders mid-raid.' },
    ],
  },
  {
    slug: 'after-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after an Easy Anti-Cheat or game patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing on a firing range before a real session.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'Easy Anti-Cheat patch day checklist for cheat tools', sourcePath: '/blog/eac-patch/',
    body: ['Check the current build and status notice first. After a game or Easy Anti-Cheat update, wait for a compatible build, update the loader, then verify the setup on a firing range before returning to busy Warfare or Operations queues.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'patch_day_vet', age: '8 hours ago', score: 12, body: 'Testing after the update before a real session is the part I used to skip. Now I check the build note and run a quick firing range.' },
      { author: 'roamer_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'lite-or-pro', category: 'Community', categoryTone: 'green',
    title: 'Lite tier or Pro: which tier includes aim assist?',
    excerpt: 'Lite tier is vision tools; Pro adds aimbot and recoil. See which cheat tier to buy for your PvP style.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'Lite tier vs Pro: which tier fits you', sourcePath: '/blog/lite-vs-pro/',
    body: ['According to the comparison guide, Lite centers on awareness features such as player ESP, loot ESP, radar, FOV and stream-proof options. Pro includes those features and adds Aimbot, Soft Aim, Bone Select, Trigger Bot and Ballistic assist.', 'The best fit depends on which features you need. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_raid', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'spray-server', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Practice recoil control without risking a live match?',
    excerpt: 'Use the firing range for repeatable AR and sniper drills before Warfare or Operations.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'cheat codes guide: free lists vs live-match ESP and aimbot', sourcePath: '/blog/cheat-codes/',
    body: ['Start in the firing range. Pick one weapon profile, fire the same burst from a fixed distance, then adjust Soft Aim or Ballistic assist one value at a time.', 'When the spray feels natural, move into a live Warfare or Operations match with conservative presets. The linked guide covers the full buy-vs-practice distinction.'],
    comments: [
      { author: 'ak_or_nothing', age: '20 hours ago', score: 10, body: 'Start with a static target and repeat the same burst until recoil and dispersion feel automatic.' },
      { author: 'ops_raider_42', age: '18 hours ago', score: 5, body: 'Save the profile in the portal so you can reload it after every patch.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
