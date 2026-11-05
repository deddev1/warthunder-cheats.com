/**
 * Unique titles/descriptions per route — all War Thunder–focused, no duplicate SERP copy.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'ESP Aimbot Soft Aim for War Thunder PC Cheats 2026',
    description:
      'Shop undetected War Thunder cheats with ESP aimbot, vehicle ESP, radar and stream-proof overlays on Windows. Compare Lite, Pro, Elite.',
  },
  '/products/warthunder-cheats/': {
    title: 'All War Thunder Cheat Products | Lite, Pro, Elite',
    description:
      'Products hub for War Thunder on Steam or Gaijin Launcher—compare Lite, Pro and Elite plus HWID, UGC and utilities. Module lists, buy guides and checkout.',
  },
  '/products/warthunder-cheats/lite/': {
    title: 'War Thunder Lite Cheats | ESP, Radar & FOV',
    description:
      'Buy Lite tier: player ESP, vehicle tags, capture markers, radar and FOV changer for Arcade, Realistic and Simulator—awareness without aimbot.',
  },
  '/products/warthunder-cheats/pro/': {
    title: 'War Thunder Pro Cheats | Aimbot & Soft Aim',
    description:
      'Buy Pro tier: aimbot, Soft Aim, ballistic assist and vehicle profiles plus every Lite ESP and radar module for Windows Steam PC.',
  },
  '/products/warthunder-cheats/elite/': {
    title: 'War Thunder Elite Cheats | ESP, Aimbot, SL Helpers',
    description:
      'Purchase Elite tier: vehicle ESP, player ESP, aimbot, ballistic prediction, SL/RP farm helpers, camouflage unlock and priority Gaijin patch queue.',
  },
  '/products/warthunder-cheats/hwid-spoofer/': {
    title: 'War Thunder HWID Spoofer | Reset After Ban',
    description:
      'Buy a War Thunder HWID spoofer to rotate disk, MAC and GPU IDs after Gaijin account protection flags your hardware. Portal setup and Discord support included.',
  },
  '/products/warthunder-cheats/ugc/': {
    title: 'War Thunder UGC Recovery | Account Appeals',
    description:
      'UGC appeal workspace for Gaijin holds, bans and restrictions—document cases, track status and rebuild account access with structured workflows.',
  },
  '/products/warthunder-cheats/unlock-all/': {
    title: 'Unlock All Camouflages | Local Preview',
    description:
      'Unlock All camouflage preview for tanks, aircraft and ships on your client—local cosmetics without market purchases; standalone or bundled with Elite.',
  },
  '/products/warthunder-cheats/utilities/': {
    title: 'Compare Cheat Utilities | HWID Spoofer & UGC',
    description:
      'Utility comparison for War Thunder—HWID Spoofer vs UGC recovery use cases, feature lists and product pages. Camouflage unlock details on Unlock All.',
  },
  '/blog/': {
    title: 'Checkout – ESP and aimbot modules | War Thunder Cheats',
    description:
      'Step-by-step buy guides and checkout tips—tier picks, ESP and aimbot modules, HWID recovery after bans, and secure payment at warthunder-cheats.com.',
  },
  '/forum/': {
    title: 'Buyer Forum Q&A | ESP, Radar & Spoofer Help',
    description:
      'War Thunder buyer forum: ESP and radar setup Q&A from our guides—overlay tuning, HWID tools, patch readiness and tier picks before checkout.',
  },
  '/reviews/': {
    title: 'War Thunder Cheats Reviews | Buyer Feedback',
    description:
      'Read verified War Thunder Cheats reviews for Elite ESP and aimbot, HWID Spoofer, UGC recovery and camouflage unlock—real ratings before checkout.',
  },
  '/faq/': {
    title: 'Faq – Tiers, Checkout & Ban Risk | War Thunder Cheats',
    description:
      'FAQ before you buy: Windows, Steam or Gaijin Launcher setup, Lite vs Pro vs Elite, ban risk, checkout delivery and HWID resets on warthunder-cheats.com.',
  },
  '/terms/': {
    title: 'War Thunder Cheats Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing War Thunder cheat licenses on warthunder-cheats.com—delivery, personal-use limits, refunds, ban risk and acceptable use.',
  },
  '/about/': {
    title: 'Cheats Store for War Thunder PC Tools and Online Support',
    description:
      'Cheats Store: Meet the warthunder-cheats.com team—tiers, utilities, patch-day loader updates and Discord help after checkout on Windows 10/11.',
  },
  '/support/': {
    title: 'War Thunder Cheats Support — Discord, Loader & HWID Help',
    description:
      'Discord support for War Thunder loader errors, HWID Spoofer setup and checkout help. Open a ticket with your order ID, issue type and screenshots.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Data, Cookies & Your Rights',
    description:
      'Privacy policy for warthunder-cheats.com—cookies, analytics, Discord ticket data, checkout partners, retention and your rights when browsing or purchasing.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
