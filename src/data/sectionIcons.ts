import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  'Aimbot / Soft Aim': 'featureAimbot',
  'Player ESP': 'featureEsp',
  'Vehicle & player ESP': 'featureRadar',
  'Shot Assist': 'stepCrosshair',
  'Utility Suite': 'featureUtilitySuite',
  'Auto Farm Helpers': 'compareAutoFarm',
  'Stream Proof': 'streamProof',
  'FOV Hack': 'compareZoomHack',
  'Cloud Config & Updates': 'compareCloudBackup',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['setupPulse', 'setupDownload', 'setupPlay'];

export const toolkitIcons: Record<string, IconName> = {
  Combat: 'toolkitCombat',
  Vision: 'toolkitVision',
  Radar: 'toolkitRadar',
  Weapons: 'toolkitWeapons',
  Movement: 'toolkitMovement',
  Profiles: 'toolkitProfiles',
};

export const fullToolkitIcons: Record<string, IconName> = {
  gameplay: 'toolkitCombat',
  spoofers: 'toolkitSpoofers',
  rage: 'toolkitRage',
  clubs: 'setupPulse',
  qol: 'toolkitQol',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'ESP Active' },
  { icon: 'radarOnline', label: 'Radar Online' },
  { icon: 'seasonBuild', label: 'Season Build' },
  { icon: 'undetected', label: 'Undetected' },
  { icon: 'softAim', label: 'Soft Aim Ready' },
  { icon: 'noRecoil', label: 'Shot Assist' },
  { icon: 'streamProof', label: 'Stream Proof' },
  { icon: 'lootEsp', label: 'Ball ESP' },
  { icon: 'skeletonEsp', label: 'Player Outlines' },
  { icon: 'uavRadar', label: 'Pitch Radar' },
  { icon: 'mapHack', label: 'Opponent Map' },
  { icon: 'support247', label: '24/7 Support' },
  { icon: 'instantDelivery', label: 'Instant Delivery' },
  { icon: 'rankedSafe', label: 'Patch Ready' },
  { icon: 'triggerBot', label: 'Timed Finish' },
  { icon: 'boneSelect', label: 'Target Select' },
  { icon: 'liveStatus', label: 'Live Status' },
  { icon: 'autoUpdates', label: 'Auto Updates' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

/** After-purchase timeline on product detail — one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

/** Product detail requirement tiles — prefer compat-style icons where mapped */
export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatSteam',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];
