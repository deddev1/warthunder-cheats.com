/**
 * Cloudflare Worker: 301 www/http → https://warthunder-cheats.com, then static assets.
 * Assets binding is configured in wrangler.toml.
 */
export interface Env {
  ASSETS: Fetcher;
}

const CANONICAL_HOST = 'warthunder-cheats.com';

function needsHostRedirect(url: URL): boolean {
  const host = url.hostname.toLowerCase();
  if (host !== CANONICAL_HOST && host !== `www.${CANONICAL_HOST}`) return false;
  return host.startsWith('www.') || url.protocol === 'http:';
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (needsHostRedirect(url)) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
