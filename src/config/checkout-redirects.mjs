/** Checkout destinations keyed by internal product id (Zadeyo affiliate go links). */
export const CHECKOUT_URLS = {
  fc27: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fea-sports-fc-27',
  skinChanger: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fskin-changer',
  hwidSpoofer: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fugc',
};

/** Checkout paths → external product URLs (Node serve, CF _redirects, Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/fc27', CHECKOUT_URLS.fc27],
  ['/go/fc27/', CHECKOUT_URLS.fc27],
  ['/go/rust', CHECKOUT_URLS.fc27],
  ['/go/rust/', CHECKOUT_URLS.fc27],
  ['/go/warthunder', CHECKOUT_URLS.fc27],
  ['/go/warthunder/', CHECKOUT_URLS.fc27],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
