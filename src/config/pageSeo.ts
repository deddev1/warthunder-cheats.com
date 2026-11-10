/**
 * Unique titles/descriptions per route — all Delta Force–focused, no duplicate SERP copy.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy Delta Force Cheats 2026 | Undetected ESP & Aimbot',
    description:
      'Shop Delta Force cheats for Windows—loot ESP, player ESP, aimbot, radar and stream-proof overlays. Compare Lite, Pro and Elite at deltaforce-cheats.net.',
  },
  '/products/deltaforce-cheats/': {
    title: 'Delta Force Cheats | Lite, Pro, Elite',
    description:
      'Compare Delta Force cheats on Steam or Epic Games—Lite, Pro and Elite plus HWID, UGC and utilities. Module lists, buy guides and checkout.',
  },
  '/products/deltaforce-cheats/lite/': {
    title: 'Delta Force Lite Cheats | ESP, Radar & FOV',
    description:
      'Buy Lite tier: player ESP, loot tags, objective markers, radar and FOV changer for Warfare and Operations—awareness without aimbot.',
  },
  '/products/deltaforce-cheats/pro/': {
    title: 'Delta Force Pro Cheats | Aimbot & Soft Aim',
    description:
      'Buy Pro tier: aimbot, Soft Aim, ballistic assist and weapon profiles plus every Lite ESP and radar module for Windows Steam PC.',
  },
  '/products/deltaforce-cheats/elite/': {
    title: 'Delta Force Elite Cheats | ESP, Aimbot, Farm Helpers',
    description:
      'Purchase Elite tier: loot ESP, player ESP, aimbot, ballistic prediction, XP/currency farm helpers, skin unlock and priority EAC patch queue.',
  },
  '/products/deltaforce-cheats/hwid-spoofer/': {
    title: 'Delta Force HWID Spoofer | Reset After Ban',
    description:
      'Buy a Delta Force HWID spoofer to rotate disk, MAC and GPU IDs after Easy Anti-Cheat flags your hardware. Portal setup and Discord support included.',
  },
  '/products/deltaforce-cheats/ugc/': {
    title: 'Delta Force UGC Recovery | Account Appeals',
    description:
      'UGC appeal workspace for Easy Anti-Cheat holds, bans and restrictions—document cases, track status and rebuild account access with structured workflows.',
  },
  '/products/deltaforce-cheats/unlock-all/': {
    title: 'Unlock All Skins | Local Preview',
    description:
      'Unlock All skin preview for operators and weapons on your client—local cosmetics without market purchases; standalone or bundled with Elite.',
  },
  '/products/deltaforce-cheats/utilities/': {
    title: 'Compare Cheat Utilities | HWID Spoofer & UGC',
    description:
      'Utility comparison for Delta Force—HWID Spoofer vs UGC recovery use cases, feature lists and product pages. Skin unlock details on Unlock All.',
  },
  '/blog/': {
    title: 'Module Guides | ESP, Aimbot & Setup Tips',
    description:
      'Tier comparison and module explainers—ESP, aimbot, FOV, HWID recovery after bans, and loader setup notes for Windows Steam or Epic Games.',
  },
  '/forum/': {
    title: 'Buyer Forum Q&A | ESP, Radar & Spoofer Help',
    description:
      'Delta Force buyer forum: ESP and radar setup Q&A from our guides—overlay tuning, HWID tools, patch readiness and tier picks before checkout.',
  },
  '/reviews/': {
    title: 'Buyer Feedback | Tier Notes & Loader Tips',
    description:
      'Read buyer feedback on Elite ESP and aimbot, HWID Spoofer, UGC recovery and skin unlock—ratings shared by customers before checkout.',
  },
  '/faq/': {
    title: 'Faq – Tiers, Checkout & Ban Risk | Delta Force Cheats',
    description:
      'FAQ before you buy: Windows, Steam or Epic Games setup, Lite vs Pro vs Elite, ban risk, checkout delivery and HWID resets on deltaforce-cheats.net.',
  },
  '/terms/': {
    title: 'Delta Force Cheats Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing Delta Force cheat licenses on deltaforce-cheats.net—delivery, personal-use limits, refunds, ban risk and acceptable use.',
  },
  '/about/': {
    title: 'Cheats Store for Delta Force PC Tools and Online Support',
    description:
      'Cheats Store: Meet the deltaforce-cheats.net team—tiers, utilities, patch-day loader updates and Discord help after checkout on Windows 10/11.',
  },
  '/support/': {
    title: 'Delta Force Cheats Support — Discord, Loader & HWID Help',
    description:
      'Discord support for Delta Force loader errors, HWID Spoofer setup and checkout help. Open a ticket with your order ID, issue type and screenshots.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Data, Cookies & Your Rights',
    description:
      'Privacy policy for deltaforce-cheats.net—cookies, analytics, Discord ticket data, checkout partners, retention and your rights when browsing or purchasing.',
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
