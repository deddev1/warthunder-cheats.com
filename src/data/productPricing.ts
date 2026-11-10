export type ProductPlanId = 'access';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd?: number;
  priceNote: string;
}

/** Single checkout CTA — durations and prices live on Zadeyo, not on this site. */
const accessPlan: ProductPlan = {
  id: 'access',
  label: 'Get access',
  priceNote: 'Secure checkout · instant key delivery',
};

export function getProductPlans(_productSlug: string): ProductPlan[] {
  return [accessPlan];
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

export function checkoutUrlWithPlan(baseUrl: string, _planId?: ProductPlanId): string {
  return baseUrl;
}
