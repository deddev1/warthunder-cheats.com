# FC27 Cheats — SEO Action Plan

Prioritized from the 2026-11-10 local Agentic SEO audit.

## Critical

1. **Point `fc27-cheats.net` DNS to Cloudflare / hosting and deploy `fc27-cheats` branch**
   - Without DNS the site is not live and cannot be indexed.
   - After deploy: verify apex + www 301s, HTTPS, `/go/*` 302s, sitemap fetch.

2. **Submit sitemap in Google Search Console**
   - `https://fc27-cheats.net/sitemap-index.xml`
   - Request indexing for `/`, `/products/fc27-cheats/`, `/products/fc27-cheats/elite/`.

## High (done in this pass)

3. **Add `llms.txt`** — done (`public/llms.txt`)
4. **Trim overlong blog meta descriptions** — done (aimbot, safety, what-are)
5. **Align homepage SEO copy with 3-product catalog** — done
6. **Noindex orphan Lite/Pro/Unlock All + drop from sitemap** — already shipped in `92e4c12`

## Medium

7. **Re-run live `audit_runner.py` + PageSpeed after DNS**
   - Capture real CWV; fix LCP if hero image regresses.
8. **Optional:** soften remaining blog body mentions of Lite/Pro as “buy tiers” toward the single Cheats product + utilities (content cleanup, not a crawl blocker).
9. **Confirm Zadeyo checkout product pages** match on-site claims before ads/outreach.

## Low

10. Keep bumping `STATUS_VERIFIED_ISO` after each EA/FC 27 check for blog `dateModified` honesty.
11. Monitor Search Console for soft-404s on legacy War Thunder redirect paths.
