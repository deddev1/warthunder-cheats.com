export const SITE_DOMAIN = 'warthunder-cheats.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const PRODUCT_BASE = '/products/warthunder-cheats/';
export const TITLE_PREFIX = 'War Thunder Cheats & Hacks';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
/** Discord invite for support tickets. Override with PUBLIC_DISCORD_URL. */
export const DISCORD_URL =
  (typeof import.meta !== 'undefined' && (import.meta.env.PUBLIC_DISCORD_URL as string | undefined)?.trim()) ||
  'https://discord.gg/Vu85F8auQS';
