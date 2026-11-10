/**
 * Unique titles/descriptions per route — aligned to high-intent FC 27 cheat SERPs.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy Undetected FC 27 Cheats 2026 | ESP Soft Aim',
    description:
      'Buy undetected FC 27 cheats for Ultimate Team, Rivals and Pro Clubs—player ESP, soft aim, shot assist and stream-proof overlays. Compare Lite, Pro and Elite.',
  },
  '/products/fc27-cheats/': {
    title: 'Buy FC 27 Cheats, Spoofer & UGC',
    description:
      'Shop FC 27 cheats, HWID Spoofer and UGC recovery for Steam or EA App PC—three products with module lists, buy guides and secure checkout.',
  },
  '/products/fc27-cheats/lite/': {
    title: 'Buy FC 27 Lite Cheats | Undetected ESP & Radar',
    description:
      'Buy undetected FC 27 Lite cheats: player ESP, opponent tags, pitch radar and FOV for Ultimate Team, Clubs and Career—awareness without soft aim automation.',
  },
  '/products/fc27-cheats/pro/': {
    title: 'Buy FC 27 Pro Cheats | Soft Aim & Shot Assist',
    description:
      'Buy undetected FC 27 Pro cheats: soft aim, shot assist, finisher helpers and position profiles plus every Lite ESP module for Windows Steam or EA App PC.',
  },
  '/products/fc27-cheats/elite/': {
    title: 'Buy FC 27 Elite Cheats | Full Undetected UT Suite',
    description:
      'Buy undetected FC 27 Elite cheats: player ESP, soft aim, shot assist, coin/SBC helpers, kit unlock and priority EA patch queue for Ultimate Team and Clubs.',
  },
  '/products/fc27-cheats/hwid-spoofer/': {
    title: 'Buy FC 27 HWID Spoofer | Reset After EA Ban',
    description:
      'Buy an FC 27 HWID spoofer to rotate disk, MAC and GPU IDs after EA anti-cheat flags your hardware. Portal setup and Discord support included.',
  },
  '/products/fc27-cheats/ugc/': {
    title: 'Buy FC 27 UGC Unban Tools | Account Recovery',
    description:
      'Buy FC 27 UGC unban tools for EA holds, bans and restrictions—document cases, track status and rebuild account access with structured appeal workflows.',
  },
  '/products/fc27-cheats/unlock-all/': {
    title: 'Buy FC 27 Unlock All | Kit & Skin Preview',
    description:
      'Buy FC 27 Unlock All kit preview for home, away and goalkeeper kits on your client—local cosmetics without market purchases; standalone or with Elite.',
  },
  '/products/fc27-cheats/utilities/': {
    title: 'Buy FC 27 Cheat Utilities | HWID Spoofer & UGC',
    description:
      'Buy FC 27 cheat utilities—compare HWID Spoofer vs UGC recovery use cases, feature lists and product pages. Kit unlock details on Unlock All.',
  },
  '/blog/': {
    title: 'FC 27 Cheat Guides | Buy Undetected ESP Soft Aim',
    description:
      'Read FC 27 cheat buy guides—undetected ESP, soft aim, FOV, HWID recovery after bans, and loader setup notes for Windows Steam or EA App.',
  },
  '/forum/': {
    title: 'FC 27 Cheats Forum | ESP Soft Aim & Spoofer Q&A',
    description:
      'FC 27 cheats buyer forum: undetected ESP and soft aim setup Q&A—overlay tuning, HWID tools, patch readiness and tier picks before checkout.',
  },
  '/reviews/': {
    title: 'FC 27 Cheats Reviews | Undetected Buyer Feedback',
    description:
      'Read FC 27 cheats reviews on Elite ESP and soft aim, HWID Spoofer, UGC recovery and kit unlock—ratings shared by buyers before checkout.',
  },
  '/faq/': {
    title: 'FC 27 Cheats FAQ | Buy Setup & Ban Risk',
    description:
      'FC 27 cheats FAQ before you buy: Windows, Steam or EA App setup, Lite vs Pro vs Elite, ban risk, checkout delivery and HWID resets.',
  },
  '/terms/': {
    title: 'FC27 Cheats Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing FC 27 cheat licenses on fc27-cheats.net—delivery, personal-use limits, refunds, ban risk and acceptable use.',
  },
  '/about/': {
    title: 'About FC27 Cheats | Undetected EA FC 27 Store',
    description:
      'About FC27 Cheats: buy undetected EA FC 27 tools for Ultimate Team and Clubs—tiers, utilities, patch-day loader updates and Discord support.',
  },
  '/support/': {
    title: 'FC 27 Cheats Support | Loader HWID & Checkout',
    description:
      'FC 27 cheats Discord support for loader errors, HWID Spoofer setup and checkout help. Open a ticket with your order ID, issue type and screenshots.',
  },
  '/privacy/': {
    title: 'FC27 Cheats Privacy Policy | Data & Cookies',
    description:
      'Privacy policy for fc27-cheats.net—cookies, analytics, Discord ticket data, checkout partners, retention and your rights when browsing or purchasing.',
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
