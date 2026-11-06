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
    excerpt: 'Player ESP breakdown: boxes, vehicle tags, capture markers and radar covered in the ESP buy guide before checkout.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ESP and radar setup for War Thunder', sourcePath: '/blog/esp/',
    answer: 'The guide covers player boxes, names, health and distance, skeleton ESP, vehicle and objective markers, and the radar overlay. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a fight at a capture point or in urban cover.',
    tip: 'Keep the overlay uncluttered: begin with players and the nearest vehicles, then adjust the distance filters one at a time.',
  }),
  guideDiscussion({
    slug: 'esp-setup', title: 'How should I set up ESP overlay the first time?', upvotes: 58,
    excerpt: 'First-time ESP overlay setup: enable basics, confirm on an Arcade test battle, then tune one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ESP and radar setup for War Thunder', sourcePath: '/blog/esp/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover your HUD gauges, lead indicator or the crosshair.',
    detail: 'Test your layout on a low-population or Arcade test battle before relying on it in a busy one. A simple configuration is easier to read than turning on every option immediately.',
    tip: 'If the screen feels crowded, lower the vehicle ESP distance and hide low-priority AI before changing colors or sizes.',
  }),
  guideDiscussion({
    slug: 'fov-settings', title: 'What FOV hack settings feel comfortable in PvP?', upvotes: 44,
    excerpt: 'FOV hack tips: widen awareness without stretching the screen or making distant targets hard to track.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'FOV hack guide for War Thunder', sourcePath: '/blog/fov/',
    answer: 'There is no single ideal FOV for every player. The guide recommends adjusting gradually and checking that you can still judge distance, recoil and enemy movement at range.',
    detail: 'Keep a quick reset hotkey to the default FOV available so you can compare the wider view with familiar framing, especially for tank duels and close-range GRB fights.',
    tip: 'Change one step at a time and spend a short session on an Arcade test battle before settling on a new value.',
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
    excerpt: 'Practice ballistic profiles one vehicle at a time on an Arcade test battle before live PvP.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aimbot bone select and recoil scripts for War Thunder', sourcePath: '/blog/bones/',
    answer: 'Choose one vehicle lineup and one profile to test at a time. The guide walks through example profiles for tanks, fighters and SPAA, and explains how bone selection fits with ballistic assist.',
    detail: 'An Arcade test battle lets you repeat the same burst on a target and see which values need adjustment without risking a live lineup.',
    tip: 'Learn the manual gunnery pattern first; that makes it much easier to spot when a profile is over-compensating.',
  }),
  guideDiscussion({
    slug: 'elite-tools', title: 'What extra tools ship with Elite tier cheats?', upvotes: 67,
    excerpt: 'Elite tier vs Lite/Pro: SL/RP farm helpers, Camouflage unlock, priority patches and the full ESP suite.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Elite tier guide: when to upgrade your cheat tools', sourcePath: '/blog/elite/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as SL/RP farm helpers, the full radar suite, priority patch delivery and Camouflage unlock.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'lite-pro', title: 'How do Lite tier and Pro cheat tiers differ?', upvotes: 53,
    excerpt: 'Lite tier is ESP and radar; Pro adds aimbot and ballistic assist. Short buyer comparison before checkout.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Lite tier vs Pro: which tier fits you', sourcePath: '/blog/lite-vs-pro/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as player ESP, vehicle ESP, radar and FOV. Pro adds Aimbot, Soft Aim and Ballistic assist on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want the aim assist modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'skin-info', title: 'What should I know before buying Camouflage unlock?', upvotes: 38,
    excerpt: 'Camouflage unlock / Unlock All: local camouflage and decal previews, limits, and what other players see.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Skin changer and Unlock All for War Thunder', sourcePath: '/blog/skins/',
    answer: 'The guide describes Camouflage unlock as a local cosmetic preview utility for vehicle camos and decals. It explains setup, supported options, and how to restore your default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews that other players do not see; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'eac-init', title: 'Gaijin anti-cheat failed to initialize—what should I try first?', upvotes: 24,
    excerpt: 'Gaijin account protection failed to initialize: verify Steam files and reinstall Gaijin anti-cheat before assuming a ban.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Gaijin account protection failed to initialize in War Thunder', sourcePath: '/blog/gaijin-error/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify game files through Steam.',
    detail: 'It also recommends fully exiting Steam, reinstalling Gaijin anti-cheat from the game install folder, restarting the PC, and checking for conflicting overlays or drivers before trying more disruptive steps.',
    tip: 'Test a normal Steam launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'ext-loader', title: 'What does an External cheat loader mean?', upvotes: 46,
    excerpt: 'External cheat loader explained: separate process, overlay UI, portal updates vs risky injectors.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'War Thunder external cheat guide', sourcePath: '/blog/external/',
    answer: 'The article uses "external" to describe software that runs separately from the game process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever the game or Gaijin anti-cheat receives an update.',
  }),
  guideDiscussion({
    slug: 'stream-check', title: 'How do I check Stream-proof overlay in OBS?', upvotes: 21,
    excerpt: 'Stream-proof setup: record an OBS test so ESP overlays stay off your VOD before you go live.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for War Thunder', sourcePath: '/blog/stream-proof/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'hwid-check', title: 'After an Gaijin anti-cheat ban, what should I check on HWID?', upvotes: 33,
    excerpt: 'HWID Spoofer vs new account after a Gaijin anti-cheat hardware flag—checks before Discord support.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'HWID spoofer vs new account after a Gaijin anti-cheat ban', sourcePath: '/blog/hwid/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions, when a new Steam account is enough, and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'pre-install', title: 'What to review before installing cheat tools?', upvotes: 18,
    excerpt: 'Before installing cheat tools: status banner, Windows/Steam notes, and official setup on warthunder-cheats.com.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'cheat tools features: aimbot, ESP, ballistic assist and more', sourcePath: '/blog/features/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update and status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'choose-tier', title: 'How do I choose the right cheat tier to buy?', upvotes: 48,
    excerpt: 'Pick Lite, Pro or Elite cheat tools by feature set, then follow secure checkout on warthunder-cheats.com.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy cheat tools in 2026', sourcePath: '/blog/buy-guide/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching the game.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'admin-official', category: 'General', categoryTone: 'purple',
    title: 'Can I use test flight commands in live Arcade or Realistic battles?',
    excerpt: 'Quick answer from the test flight console guide: dev commands only work in custom battles or test flight where you have host rights.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'cheat codes guide: test flight console and dev / test flight commands for Arcade test battles', sourcePath: '/blog/cheat-codes/',
    body: ['No. Console commands such as test flight, invulnerability and mission editor spawns need host or admin rights, which you only have in an Arcade test battle you host or a custom battle where the host granted you access. They do not work in live Arcade, Realistic or Simulator matchmaking.', 'Use an Arcade test battle or custom battle to practice gunnery and lead before you queue. The guide also explains the difference between those built-in test flight commands and third-party cheat tools on live battles.'],
    comments: [
      { author: 'base_builder_42', age: '1 hour ago', score: 24, body: 'Correct: host the custom battle, enable mission editor tools, then open the test flight / custom battle console from the keybind you set.' },
      { author: 'ak_or_nothing', age: '48 min. ago', score: 11, body: 'The guide lists test flight, invulnerability and time controls for testing. Turn invulnerability off before you test real damage numbers.' },
      { author: 'scrap_collector', age: '35 min. ago', score: 8, body: 'Useful distinction. Admin commands are a server feature, not a cheat product.' },
    ],
  },
  {
    slug: 'f1-console', category: 'General', categoryTone: 'purple',
    title: 'How do I open the test flight console?',
    excerpt: 'Open the test flight or custom battle console from your keybind. Host tools are required before spawn commands work.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to use cheat codes', sourcePath: '/blog/use-codes/',
    body: ['Open the test flight or custom battle console from your keybind (often F1 in custom battles). In an Arcade test battle you host, enable mission editor tools so spawn and vehicle commands work.', 'If a command does nothing, confirm you are hosting or were granted host tools in that session and check the syntax in the mission editor reference.'],
    comments: [
      { author: 'air_rb_main', age: '3 hours ago', score: 17, body: 'You can rebind the console key in the keybind settings if F1 conflicts with another program on your keyboard.' },
      { author: 'carry_curious', age: '2 hours ago', score: 9, body: 'Commands need the right permission level; moderators cannot always run owner-only commands.' },
    ],
  },
  {
    slug: 'spray-safe', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Safest way to Practice lead and gunnery?',
    excerpt: 'Practice gunnery on an Arcade test battle with a static target before live Realistic or Simulator queues.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'War Thunder console cheats and tips', sourcePath: '/blog/console-tips/',
    body: ['Practice on your own Arcade test battle. Spawn a target vehicle or use the gunnery range, fire controlled bursts from a fixed distance, and compare each pass so you can see dispersion and lead.', 'The guide also covers the free camera and test flight tools, which help you inspect capture lanes and airfields without waiting for a live match.'],
    comments: [
      { author: 'stack_and_pull', age: '5 hours ago', score: 13, body: 'I bracket each burst on the target to see dispersion. It makes controlling a T-72 main-gun pattern much easier to learn.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'The free camera is handy when you want to check angles on a capture point before a major patch.' },
    ],
  },
  {
    slug: 'after-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a Gaijin anti-cheat or game patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing on an Arcade test battle before a real session.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'Gaijin anti-cheat patch day checklist for cheat tools', sourcePath: '/blog/gaijin-patch/',
    body: ['Check the current build and status notice first. After a game or Gaijin anti-cheat update, wait for a compatible build, update the loader, then verify the setup on an Arcade test battle before returning to busy Arcade, Realistic or Simulator queues.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'patch_day_vet', age: '8 hours ago', score: 12, body: 'Testing after the update before a real session is the part I used to skip. Now I check the build note and run a quick Arcade test battle.' },
      { author: 'roamer_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'lite-or-pro', category: 'Community', categoryTone: 'green',
    title: 'Lite tier or Pro: which tier includes aim assist?',
    excerpt: 'Lite tier is vision tools; Pro adds aimbot and recoil. See which cheat tier to buy for your PvP style.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'Lite tier vs Pro: which tier fits you', sourcePath: '/blog/lite-vs-pro/',
    body: ['According to the comparison guide, Lite centers on awareness features such as player ESP, vehicle ESP, radar, FOV and stream-proof options. Pro includes those features and adds Aimbot, Soft Aim, Bone Select, Trigger Bot and Ballistic assist.', 'The best fit depends on which features you need. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_raid', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'spray-server', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Practice gunnery without risking a live lineup?',
    excerpt: 'Host an Arcade test battle, spawn a target and use mission editor tools for repeatable tank and SPAA drills.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'cheat codes guide: test flight console and dev / test flight commands for Arcade test battles', sourcePath: '/blog/cheat-codes/',
    body: ['Start an Arcade test battle and host the session. Use mission editor spawns to add a vehicle and ammo, then respawn between attempts so every drill starts from the same state.', 'For realistic practice, turn invulnerability off before drilling. These tools are for sessions you host; the linked guide has the full setup steps.'],
    comments: [
      { author: 'ak_or_nothing', age: '20 hours ago', score: 10, body: 'Start with a static target and repeat the same burst until lead and dispersion feel automatic.' },
      { author: 'base_builder_42', age: '18 hours ago', score: 5, body: 'Turn invulnerability off when you want to practice with normal damage and repair constraints.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
