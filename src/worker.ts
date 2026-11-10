/**
 * Cloudflare Worker: 301 www/http → https://deltaforce-cheats.net, then static assets.
 * Requires assets.run_worker_first = true so this runs before index.html is served.
 */
export interface Env {
  ASSETS: Fetcher;
}

const CANONICAL_HOST = 'deltaforce-cheats.net';

function needsHostRedirect(request: Request, url: URL): boolean {
  const host = url.hostname.toLowerCase();
  if (host !== CANONICAL_HOST && host !== `www.${CANONICAL_HOST}`) return false;

  const forwarded = (request.headers.get('x-forwarded-proto') ?? '')
    .split(',')[0]
    .trim()
    .toLowerCase();
  const proto = forwarded || url.protocol.replace(':', '');
  return host.startsWith('www.') || proto === 'http';
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (needsHostRedirect(request, url)) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
