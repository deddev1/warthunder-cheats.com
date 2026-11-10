import type { IconName } from '../components/icons/types';
import { blogPostPath, normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

/** Plain tier names — avoid repeating the same anchor text across many FAQ answers. */
const elite = 'Elite';
const lite = 'Lite';
const pro = 'Pro';
const productsHub = link('FC 27 cheat products hub', ROUTES.products);
const productsHubAlt = link('main FC 27 products catalog', ROUTES.products);
const productsHubGuides = link('tier pages on the products hub', ROUTES.products);
const hwid = link('HWID Spoofer utility page', productPath('hwid-spoofer'));
const hwidAlt = link('hardware ID spoofer listing', productPath('hwid-spoofer'));
const ugc = link('UGC appeal workspace', productPath('ugc'));
const ugcAlt = link('UGC ban-appeal tool page', productPath('ugc'));
const ugcInit = link('UGC recovery options', productPath('ugc'));
const skin = link('Kit unlock product', productPath('unlock-all'));
const skinAlt = link('standalone Kit unlock page', productPath('unlock-all'));
const faqPage = link('pre-purchase FAQ hub', ROUTES.faq);
const faqPageAlt = link('complete buying FAQ index', ROUTES.faq);
const blog = link('FC 27 buy guides archive', ROUTES.blog);
const litePage = link('Lite ESP and radar tier page', ROUTES.products);
const proPage = link('Pro aimbot tier page', ROUTES.products);
const elitePage = link('Elite full-suite product page', productPath('elite'));

const guideFeatures = link('FC 27 cheats features guide', blogPostPath('features'));
const guideLiteVsPro = link('Lite vs Pro guide', blogPostPath('lite-vs-pro'));
const guideElite = link('Elite tier guide', blogPostPath('elite'));
const guideEsp = link('ESP and radar setup guide', blogPostPath('esp'));
const guidePatch = link('EA patch day checklist', blogPostPath('ea-patch'));
const guideBuy = link('how to buy FC 27 cheats in 2026', blogPostPath('buy-guide'));
const guideExternal = link('external cheat guide', blogPostPath('external'));
const guideStream = link('stream-proof setup guide', blogPostPath('stream-proof'));
const guideAdmin = link('practice-mode and dev commands guide', blogPostPath('cheat-codes'));
const guideHwid = link('HWID spoofer vs new account guide', blogPostPath('hwid'));
const guideEacInit = link('EA launcher failed to initialize troubleshooting guide', blogPostPath('ea-error'));
const guideRecoil = link('aimbot and shot timing assist guide', blogPostPath('aimbot'));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if FC 27 cheats are online?',
    a: a('The live status banner is on fc27-cheats.net and in the Discord #status channel. Always check it after a FC 27 update, a major patch, or an EA account protection update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching FC 27, and start the loader before the game so EA anti-cheat sees a clean launch order.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using FC 27 cheats?',
    a: a('Yes—any third-party software carries risk. EA anti-cheat, EA Sports server-side checks and admin reports all evolve, and FC 27 bans can follow your EA account and hardware. Read the current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('FC 27 on EA App for PC, Windows 10/11 64-bit only. FC 27 console editions, macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists ${link('FC 27 Cheats in the catalog', productPath('elite'))}, ${link('HWID Spoofer in the catalog', productPath('hwid-spoofer'))}, and ${link('UGC in the catalog', productPath('ugc'))} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is FC 27 ESP and what does it show?',
    a: `Player ESP draws boxes, names, stamina, distance and role outlines through the defensive line. It also marks opponents, the ball, penalty boxes, halfway lines, AI teammates and off-ball runners. ${lite} covers the full awareness overlay. ${pro} and ${elite} add soft aim on top. Setup details are in the ${guideEsp}. Browse the ${litePage} for module lists.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP and radar are information overlays—they never move your mouse. Aimbot, Soft Aim and Shot timing assist are aim assist modules on ${pro} and ${elite}. You can run ESP-only on ${lite} and keep a much quieter footprint in a match.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier do I need for ESP only?',
    a: `${lite} is awareness only: Player ESP, Player and squad ESP, radar, FOV hack and stream-proof overlay. ${pro} adds Aimbot, Soft Aim and Shot timing assist. ${elite} adds farm helpers, Kit unlock and priority patches.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes Aimbot and Shot timing assist?',
    a: `${pro} ships soft aim / precision aimbot, target select, timed finish helpers and shot timing assist. ${elite} includes everything in Pro plus FUT coins farm helpers and Kit unlock. ${lite} has no aim assist—it is overlay only.`,
    scopes: ['pro'],
  },
  {
    id: 'aim-modes',
    topic: 'scripts',
    icon: 'faqEspVsScripts',
    q: 'Aimbot or Soft Aim—which should I use?',
    a: `Hard aimbot snaps finishing and pass placement more aggressively and looks obvious in replays. Soft Aim only nudges shot placement toward the target with smoothing, which looks closer to a human. Start with Soft Aim, a small FOV and a humanized smoothing value. See the ${guideRecoil}.`,
    scopes: ['pro', 'elite'],
  },
  {
    id: 'no-shot timing',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'How does shot timing assist work in FC 27?',
    a: `Shot timing assist compensates for finishing variance with per-formation profiles—strikers, wingers, midfielders and keepers and more. Keep compensation below 100% so shots still look natural, and test each lineup in Kick-Off with CPU before risking a live Career queue.`,
    scopes: ['pro', 'elite'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do you rank Lite vs Pro vs Elite?',
    a: `ESP and radar only → ${lite}. Soft aim and shot assist for Rivals/Champs → ${pro}. Full suite, farm helpers and priority patches → ${elite}. Compare on the ${proPage} or in the ${guideLiteVsPro}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite limited slots?',
    a: `Elite is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast, especially on FC 27 update and EA patch days. Check the status banner before checkout, or read the ${guideElite}.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${lite}, ${pro} and ${elite} hides overlays from OBS, Discord share and capture cards. Record a short local test before going live. Full steps are in the ${guideStream}.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected FC 27 cheats guaranteed?',
    a: a('No. Undetected is a point-in-time label on the homepage status banner—not a permanent guarantee. Re-check after every EA or FC 27 patch. Stop if status shows updating, testing or detected, and never play on your main account while status is unclear.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP-only safer than aimbot?',
    a: a('ESP is quieter than an obvious aimbot or perfect green-timing pattern in a replay, but it is still a cheat. Opponents, clips and EA anti-cheat do not ignore overlays because aim assist is off. Conservative presets and sensible reaction timing reduce reports.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when a fresh EA account gets blocked instantly on one PC but works on another—a hardware-level restriction. It is not for account-only bans; see ${ugcAlt} for appeal workflows instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'hwid-after-ban',
    topic: 'safety',
    icon: 'faqHwidWhen',
    q: 'Do I need a new account and a spoofer after an EA ban?',
    a: `Usually both: a new EA account with FC 27, plus ${hwidAlt} if the ban is tied to your hardware. Read the ${guideHwid} before buying anything, and never reuse the banned account on your main PC.`,
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is UGC?',
    a: `${ugc} (Unban & Governance Control) is an appeal workspace for EA Sports and EA bans and Steam restrictions—custom workflows and case tracking, not a guaranteed unban service.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Kit unlock modify my Steam inventory?',
    a: `${skin} previews club kits and player items, decals and cosmetic packs locally on your client. Other players see your real inventory. Included with ${elite}; available standalone for cosmetic preview only.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the FC 27 install?',
    a: `FC27 Cheats runs external with cloud config sync—no files are written into the FC 27 install directory. EA anti-cheat risk still applies. See the ${guideExternal} and ${productsHubAlt}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are practice-mode commands the same as FC 27 cheats?',
    a: `No. F1 console commands like practice mode, trainer invincibility and give only work for admins on servers you own or moderate. Paid FC 27 cheats are separate products for live Ultimate Team and Clubs—see the ${elitePage} and the ${guideAdmin}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to tier pages and ${productsHubGuides}. Checkout runs through our secure partner—never paste loader files from random Discord DMs. Walkthrough: ${guideBuy}.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each cheat tier page includes a compare table. This FAQ page collects product, cheat and blog answers in one place, and the ${guideFeatures} maps every module to a tier.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should stay on Lite?',
    a: `Players who only want awareness—Player ESP, Player ESP and radar—and will not touch aim assist. If you keep wanting shot timing control, buy ${pro} instead.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Pro?',
    a: `PvP players who want Aimbot, Soft Aim and Shot timing assist with ESP and radar included. Pro is the most popular tier at fc27-cheats.net.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Operators who want FUT coins farm helpers, Kit unlock and priority patch delivery when slots are open.`,
    scopes: ['elite'],
  },
  {
    id: 'eac-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after an EA anti-cheat or FC 27 update?',
    a: a('Check fc27-cheats.net status and Discord #status. Do not launch until the banner shows online. Reload your loader, then use conservative presets and test in Kick-Off with CPU first. The EA patch day checklist covers the full routine.'),
  },
  {
    id: 'eac-init',
    topic: 'setup',
    icon: 'faqEacUpdate',
    q: 'EA anti-cheat says it failed to initialize—is that a ban?',
    a: `Usually not. It is most often a broken EA anti-cheat install, a service conflict or a blocked driver. Verify FC 27 files in EA App, reinstall EA anti-cheat from the FC 27 install and restart before assuming a ban. See the ${guideEacInit}; if it is a real ban, check ${ugcInit}.`,
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open Discord after purchase with your order email, Windows version and FC 27 client build. Staff walk through loader setup live.'),
  },
  {
    id: 'server-types',
    topic: 'plans',
    icon: 'faqServerModes',
    q: 'Do tiers work on Ultimate Team, Clubs and Career?',
    a: `Yes—${lite}, ${pro} and ${elite} include presets for Ultimate Team, Clubs and Career in the portal. Tune ESP distance, aim FOV and smoothing before your first midfield duel or box push.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes FOV Hack?',
    a: `FOV Hack ships on ${lite} and carries through ${pro} and ${elite}. A wider field of view helps in urban map fights and wide pitch rivals, but keep it near the default range so the server does not flag it.`,
    scopes: ['lite'],
  },
  {
    id: 'vehicle-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Player and squad ESP highlight?',
    a: `Opponents and teammates, penalty boxes, halfway lines, AI teammates and bonus runs—filtered by role and distance. All tiers include it, and the ${link('readable ESP layout tips', blogPostPath('esp'))} explains how to keep the screen readable.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which tier includes FUT coins farm helpers?',
    a: `FUT coins farm helpers for FUT coins and packs grind routes are ${elite} only. ${pro} covers aim assist without farm automation.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private FC 27 cheats?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. FC27 Cheats ships portal delivery for ESP, aim assist and radar tiers.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat and blog answers—or read ${blog} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'FC 27 topics',
  title: 'Browse FC 27 cheat answers by category',
  subtitle: 'Filter FC 27 plans, ESP, aimbot, products, setup and buy-guide answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'eac-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I use practice-mode commands in live Ultimate Team or Clubs?',
      a: a('No. Practice-mode and offline trainer tools only work when you host Kick-Off or Career offline. Live Ultimate Team, Rivals and Clubs need separate FC 27 cheats from fc27-cheats.net tiers—and carries ban risk.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `ESP and radar guides → ${lite}. Aimbot and shot timing guides → ${pro}. Farm helpers and Kit unlock topics → ${elite}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes after each FC 27 update or major patch.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in Kick-Off with CPU first?',
      a: a('Yes. Load conservative presets in Kick-Off with CPU or low-pop Kick-Off with friends before busy Ultimate Team, Clubs and Career queues. Tune aim FOV, smoothing and ESP distance caps over several sessions.'),
    },
  ],
  Features: [
    {
      id: 'blog-features-modules',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Are all modules in this article on every tier?',
      a: `No. Lite is ESP, radar and FOV only; ${pro} adds Aimbot, Soft Aim and Shot timing assist; ${elite} adds farm helpers and Kit unlock. Check the compare table before checkout.`,
    },
  ],
  Updates: [
    {
      id: 'blog-updates-eac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'How fast do builds update after an EA patch?',
      a: `Elite gets priority delivery; Lite and Pro follow once the build is verified. Do not launch until the banner is green—see the ${guidePatch}.`,
    },
  ],
  Troubleshooting: [
    {
      id: 'blog-trouble-eac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Is an EA anti-cheat error always a ban?',
      a: a('No. Start with Steam file verification, an EA anti-cheat reinstall and a clean restart. A ban message names the account or hardware; startup errors usually do not.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-eac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee undetected status?',
      a: a('No article replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to Lite, Pro, Elite and the ${link('checkout-ready products overview', ROUTES.products)}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every FC 27 update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('map-hack') || slug.includes('esp') || slug.includes('radar') || slug.includes('zoom')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers ESP and radar from this article?',
      a: `${lite} includes Player ESP, Player and squad ESP, radar and FOV hack. ${pro} adds aim assist on the same overlay stack.`,
    });
  }
  if (slug.includes('script') || slug.includes('combo') || slug.includes('shot timing') || slug.includes('aim')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which tier includes the aimbot and shot timing modules in this article?',
      a: `${pro} and ${elite} ship soft aim, target select and shot timing assist. ${lite} is ESP and radar only.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('eac')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace HWID or UGC products?',
      a: `Recovery and EA anti-cheat guides complement ${link('HWID recovery product details', productPath('hwid-spoofer'))} and ${link('UGC case-tracking page', productPath('ugc'))}—read product pages for workflow scope and realistic outcomes.`,
    });
  }
  if (slug.includes('stream')) {
    slugHints.push({
      id: 'blog-slug-stream',
      topic: 'esp',
      icon: 'faqStreamProof',
      q: 'Does stream-proof mode hide everything from OBS?',
      a: `It hides the cheat overlay on supported capture methods. Always record a local test with your exact OBS scene first—see the ${guideStream}.`,
    });
  }
  if (slug.includes('skin')) {
    slugHints.push({
      id: 'blog-slug-skin',
      topic: 'products',
      icon: 'faqSkinChanger',
      q: 'Do other players see my changed skins?',
      a: `No. ${skinAlt} is a local preview on your client; other players see your real inventory.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP (boxes, names, stamina)', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Player outlines & role tags', icon: 'skeletonEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Ball & opponent ESP', icon: 'lootEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Pitch radar overlay', icon: 'compareMinimapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'FOV camera hack', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Stream Proof overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
  { feature: 'Precision aimbot / soft aim', icon: 'featureAimbot' as const, lite: false, pro: true, elite: true },
  { feature: 'Soft Aim (smoothed)', icon: 'softAim' as const, lite: false, pro: true, elite: true },
  { feature: 'Target select (near/far post, keeper)', icon: 'boneSelect' as const, lite: false, pro: true, elite: true },
  { feature: 'Shot FOV & target selector', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'Shot timing / power-bar assist', icon: 'noRecoil' as const, lite: false, pro: true, elite: true },
  { feature: 'Playstyle profiles (ST, winger, CDM)', icon: 'stepCrosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Timed finish helper', icon: 'triggerBot' as const, lite: false, pro: true, elite: true },
  { feature: 'FUT coins & SBC farm helpers', icon: 'compareAutoFarm' as const, lite: false, pro: false, elite: true },
  { feature: 'Full pitch radar suite', icon: 'uavRadar' as const, lite: false, pro: false, elite: true },
  { feature: 'Kit unlock (Unlock All)', icon: 'compareSkinChanger' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Direct Discord support', icon: 'compareDevSupport' as const, lite: false, pro: false, elite: true },
];
