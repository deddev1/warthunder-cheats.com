export const SITE_DOMAIN = 'fc27-cheats.net';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const PRODUCT_BASE = '/products/fc27-cheats/';
export const TITLE_PREFIX = 'Buy FC 27 Cheats';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
/** Discord invite for support tickets. Override with PUBLIC_DISCORD_URL. */
export const DISCORD_URL =
  (typeof import.meta !== 'undefined' && (import.meta.env.PUBLIC_DISCORD_URL as string | undefined)?.trim()) ||
  'https://discord.gg/Vu85F8auQS';
