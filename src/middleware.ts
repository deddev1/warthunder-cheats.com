import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';
import { resolvePathRedirect } from './config/path-redirects.mjs';

/** Same 301/302 map as Node serve.mjs and public/_redirects (Cloudflare). */
export const onRequest = defineMiddleware((context, next) => {
  const pathname = new URL(context.request.url).pathname;

  const checkout = resolveCheckoutPathRedirect(pathname);
  if (checkout) {
    return context.redirect(checkout, 302);
  }

  const pathRedirect = resolvePathRedirect(pathname);
  if (pathRedirect && pathRedirect !== pathname) {
    const url = new URL(context.request.url);
    return context.redirect(`${pathRedirect}${url.search}${url.hash}`, 301);
  }

  return next();
});
