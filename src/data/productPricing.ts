export type ProductPlanId = 'access';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd?: number;
  priceNote: string;
}

/** Single checkout CTA — durations live on the checkout partner. */
const accessPlan: ProductPlan = {
  id: 'access',
  label: 'Get access',
  priceNote: 'Secure checkout · instant key delivery',
};

/**
 * Optional starting USD prices for Product JSON-LD Offers.
 * Set only when the value matches live checkout; leave undefined to skip Offer
 * (FAQ rich results still apply — invalid priceless Offers do not).
 */
const fromPriceUsdBySlug: Record<string, number | undefined> = {
  lite: undefined,
  pro: undefined,
  elite: undefined,
  'hwid-spoofer': undefined,
  ugc: undefined,
  'unlock-all': undefined,
};

export function getProductPlans(_productSlug: string): ProductPlan[] {
  return [accessPlan];
}

export function getProductFromPriceUsd(productSlug: string): number | undefined {
  return fromPriceUsdBySlug[productSlug];
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

export function checkoutUrlWithPlan(baseUrl: string, _planId?: ProductPlanId): string {
  return baseUrl;
}
