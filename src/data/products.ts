import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';
import { gameplayImages } from './gameplayImages';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['esp', 'lite-vs-pro', 'fov', 'ea-patch'],
  pro: [
    'aimbot',
    'bones',
    'lite-vs-pro',
    'stream-proof',
  ],
  elite: [
    'elite',
    'features',
    'esp',
    'ea-patch',
    'buy-guide',
  ],
  'hwid-spoofer': [
    'hwid',
    'ea-error',
    'ea-patch',
    'external',
  ],
  ugc: [
    'ea-error',
    'hwid',
    'buy-guide',
  ],
  'unlock-all': [
    'skins',
    'features',
    'stream-proof',
  ],
};

const productBase = '/products/fc27-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live status banner on fc27-cheats.net and Discord #status before purchase—especially after an EA patch or client update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite FC 27 cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, EA App or Steam platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in Kick Off or a friendly, load presets, then play Ultimate Team, Clubs or Career modes.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'FC 27 and EA anti-cheat receive frequent updates, especially on major EA patch days. Confirm module availability on the live status panel at fc27-cheats.net before you purchase or launch. Overlay behavior may differ between Ultimate Team, Clubs, Career and Kick Off after patches.';

const sharedLimitations =
  'Third-party software in FC 27 can violate EA Sports Terms of Service and lead to EA bans, online bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EA anti-cheat, or Windows updates without notice.';

const wtSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'FC 27 via Steam or EA App with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets FC 27 published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const galleryRaw = {
  gpMapHack: {
    src: gameplayImages.mapRadar.src,
    alt: gameplayImages.mapRadar.alt,
    caption: gameplayImages.mapRadar.caption,
    captionDesc: gameplayImages.mapRadar.captionDesc,
  },
  gpScripts: {
    src: gameplayImages.aimbotFov.src,
    alt: gameplayImages.aimbotFov.alt,
    caption: gameplayImages.aimbotFov.caption,
    captionDesc: gameplayImages.aimbotFov.captionDesc,
  },
  gpZoomHack: {
    src: gameplayImages.espRadar.src,
    alt: gameplayImages.espRadar.alt,
    caption: gameplayImages.espRadar.caption,
    captionDesc: gameplayImages.espRadar.captionDesc,
  },
  gpSkinChanger: {
    src: gameplayImages.vehicleEsp.src,
    alt: gameplayImages.vehicleEsp.alt,
    caption: gameplayImages.vehicleEsp.caption,
    captionDesc: gameplayImages.vehicleEsp.captionDesc,
  },
  gpAutoKill: {
    src: gameplayImages.combatOverlay.src,
    alt: gameplayImages.combatOverlay.alt,
    caption: gameplayImages.combatOverlay.caption,
    captionDesc: gameplayImages.combatOverlay.captionDesc,
  },
  gpFarmBot: {
    src: gameplayImages.airEsp.src,
    alt: gameplayImages.airEsp.alt,
    caption: gameplayImages.airEsp.caption,
    captionDesc: gameplayImages.airEsp.captionDesc,
  },
  gpPlayerEsp: {
    src: gameplayImages.hackResults.src,
    alt: gameplayImages.hackResults.alt,
    caption: gameplayImages.hackResults.caption,
    captionDesc: gameplayImages.hackResults.captionDesc,
  },
  gpGroundEsp: {
    src: gameplayImages.groundEsp.src,
    alt: gameplayImages.groundEsp.alt,
    caption: gameplayImages.groundEsp.caption,
    captionDesc: gameplayImages.groundEsp.captionDesc,
  },
  gpMenuVisuals: {
    src: gameplayImages.menuVisuals.src,
    alt: gameplayImages.menuVisuals.alt,
    caption: gameplayImages.menuVisuals.caption,
    captionDesc: gameplayImages.menuVisuals.captionDesc,
  },
  gpMenuWorld: {
    src: gameplayImages.menuWorld.src,
    alt: gameplayImages.menuWorld.alt,
    caption: gameplayImages.menuWorld.caption,
    captionDesc: gameplayImages.menuWorld.captionDesc,
  },
  gpMenuAimbot: {
    src: gameplayImages.menuAimbot.src,
    alt: gameplayImages.menuAimbot.alt,
    caption: gameplayImages.menuAimbot.caption,
    captionDesc: gameplayImages.menuAimbot.captionDesc,
  },
  gpMenuMisc: {
    src: gameplayImages.menuMisc.src,
    alt: gameplayImages.menuMisc.alt,
    caption: gameplayImages.menuMisc.caption,
    captionDesc: gameplayImages.menuMisc.captionDesc,
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'fc27-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'FC 27 Lite is built for players who want information first. In EA Sports FC 27, knowing where opponents, off-ball runners and open space are before you commit wins more duels than raw finishing—Lite gives you that edge without soft aim automation.',
    },
    { type: 'h2', text: 'Low-profile by design' },
    {
      type: 'p',
      text: 'Lite skips soft aim and automation modules entirely. Your gameplay looks natural while player ESP, opponent radar and FOV changer keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'FC 27 Pro is the sweet spot for players who compete often. Soft aim, shot assist and finisher helpers help you win attacking duels without obvious snap patterns—when you tune smoothing and FOV using our portal presets.',
    },
    { type: 'h2', text: 'Match tools + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds soft aim, target selector, shot timing and position-aware profiles. You read the play before it develops and finish with settings that stay human at default values.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'FC 27 Elite is the private build for players who want everything—coin and SBC helpers, match assist, kit unlock, full ESP suite and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in Kick Off first, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first Ultimate Team, Clubs or Career session.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, opponent positioning and stamina markers, AI and pressing-trigger highlights, opponent radar, FOV changer, and stream-safe overlay hiding. Config presets for Ultimate Team, Clubs, Career and Kick Off ship in the portal—load before you queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Soft aim and shot assist' },
    {
      type: 'p',
      text: 'Soft aim, shot assist and finisher prediction with curve and power helpers, target selector and formation profiles for attackers, midfielders and defenders. Smoothing and FOV limits keep shots natural in Ultimate Team and Clubs. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at fc27-cheats.net—enough match assist for busy Ultimate Team and Clubs queues without Elite slot limits. Pair with our soft aim guide in the blog before your first session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full assist and progression suite' },
    {
      type: 'p',
      text: 'Coin and SBC helpers, match assist, kit unlock and the full ESP suite with opponent and pitch alerts. Use Kick Off or a friendly before live Ultimate Team, Clubs or Career play—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh EA App or Steam accounts fail instantly on one PC but work elsewhere—classic hardware ban enforcement after an EA ban action. Do not use for account-only bans; see [UGC](/products/fc27-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before joining a match. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Steam and EA App restrictions, EA anti-cheat and online bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EA bans cannot be reversed. UGC organizes evidence and follow-ups for EA Sports review. Pair with [HWID Spoofer](/products/fc27-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Kits display on your client for testing and content creation. Other players in the match see your actual inventory, not preview kits.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Kit unlock ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full match-assist modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpPlayerEsp', 'gpMapHack', 'gpMenuVisuals', 'gpMenuWorld'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wtSystemRequirements,
    fullFeatures: [
      'Player ESP & role outline boxes',
      'Auto-spot & off-ball player tags',
      'Player, opponent & pitch markers',
      'Held-position & skill labels',
      'Opponent radar overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Opponent pressure alerts',
      'FOV changer',
      'Ultimate Team / Clubs preset config',
      'Career / Kick Off preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Built around a clear FC 27 awareness workflow',
      paragraphs: [
        'FC 27 Lite focuses on player ESP, opponent tags, pitch markers, opponent radar and FOV changer—everything you need to read the match and find space without soft aim automation. Modules are grouped in the portal so you can tune distance, colors, and stream-proof mode before you queue.',
        'Lite is the entry path for Ultimate Team, Clubs and Career players who want awareness with minimal report risk. No soft aim, no automation helpers—just readable overlays maintained every patch at fc27-cheats.net.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpMenuAimbot', 'gpMapHack', 'gpPlayerEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wtSystemRequirements,
    fullFeatures: [
      'All Lite ESP & opponent radar modules',
      'Soft aim with smoothing',
      'Shot assist & curve helper',
      'Finisher prediction & timing assist',
      'Target selector',
      'Position-specific profiles',
      'Set-piece assist helper',
      'FOV circle drawing',
      'Smoothing & delay tuning',
      'Silent-safe default presets',
      'Opponent press alerts',
      'Kick Off test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Built around a clear FC 27 match workflow',
      paragraphs: [
        'FC 27 Pro adds soft aim, shot assist, finisher helpers and position profiles on top of every Lite module. Per-role profiles, smoothing and activation keys live in one match tab—tuned for Ultimate Team and Clubs when you start with portal presets, not max sliders.',
        'Pro is the most popular tier: enough assist for busy Ultimate Team and Clubs queues without Elite slot limits. Target selector and shot assist keep you clinical in the box while settings stay human at default values.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpFarmBot', 'gpMenuVisuals', 'gpMenuAimbot', 'gpMenuMisc'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wtSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Coin & SBC helpers',
      'SBC & coin route pathing',
      'Auto pack & reward tracker',
      'Match assist',
      'Auto finish helper',
      'Full ESP suite',
      'Event & promo alerts',
      'Vision & proximity detector',
      'Kit unlock (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Built around a full FC 27 operator workflow',
      paragraphs: [
        'Elite tier is the top match package on this site—every Lite and Pro module plus coin and SBC helpers, kit unlock, priority patch delivery and the full ESP suite.',
        'Elite slots are limited so patch cycles stay fast and builds stay maintainable. Direct dev support in Discord helps you tune conservative profiles before joining Ultimate Team or Clubs matches. Check the status banner on fc27-cheats.net before purchase.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpMapHack', 'gpPlayerEsp', 'gpZoomHack'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching FC 27.',
    limitations:
      'Spoofing does not help account-only bans. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching FC 27 after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'This FC 27 HWID spoofer helps players recover when EA anti-cheat flags PC hardware but the EA App or Steam account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only bans. After spoofing, load a conservative cheat profile from fc27-cheats.net before joining a match.',
      ],
    },
  },
  ugc: {
    images: slide('gpMapHack', 'gpPlayerEsp', 'gpZoomHack'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EA bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on fc27-cheats.net.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) is our FC 27 account recovery workspace—structured appeal workflows for Steam and EA App holds, EA ban actions and platform restrictions, not instant unban guarantees.',
        'Build custom dispute paths, track case status and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpPlayerEsp', 'gpMapHack'),
    goodToKnow:
      'Unlock All previews kits locally on your client. Other players in the match see your real inventory—not preview kits. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify EA App or Steam inventory or store state. Other players cannot see previewed kits, boots or celebrations.',
    systemRequirements: wtSystemRequirements,
    fullFeatures: [
      'Kit swap',
      'Home & away kit preview',
      'Goalkeeper & training kit preview',
      'Boot & celebration preview',
      'Stadium & pitch theme',
      'HUD & overlay theme',
      'Kit search & catalog',
      'Favorites list',
      'Squad loadout export',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'This kit unlock / Unlock All utility lets you browse home, away and goalkeeper kits locally in FC 27—searchable catalog, favorites, and squad loadout export without modifying live EA App or Steam purchases.',
        'Kits display on your client for testing and content creation. Other players see your actual inventory, not preview kits. Included free with Elite; available standalone for cosmetic preview without match-assist modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'FC 27 Lite' : cheat.name === 'Pro' ? 'FC 27 Pro' : 'FC 27 Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpScripts', 'gpAutoKill', 'gpFarmBot');

export const heroSlides = slide(
  'gpMapHack',
  'gpScripts',
  'gpZoomHack',
  'gpSkinChanger',
  'gpAutoKill',
  'gpFarmBot',
  'gpPlayerEsp',
  'gpGroundEsp',
  'gpMenuVisuals',
  'gpMenuWorld',
  'gpMenuAimbot',
  'gpMenuMisc',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Products hub for EA App or Steam PC—compare Lite, Pro and Elite tiers plus HWID Spoofer, UGC and Unlock All utilities with secure checkout.',
  buyUrl: checkoutPath('fc27'),
};
