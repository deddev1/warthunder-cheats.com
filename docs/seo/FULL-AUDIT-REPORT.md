# FC27 Cheats — Full SEO Audit Report

- **Target:** local `dist/` build for https://fc27-cheats.net/ (domain DNS not resolving at audit time)
- **Date:** 2026-11-10
- **Method:** Agentic SEO skill scripts + local HTML crawl of 60 pages
- **Overall health (local evidence):** **86 / 100**
- **Note:** `audit_runner.py` against localhost scored 36/100 because robots/security/PageSpeed/hreflang probes expect a public host. That score is **not** used below.

## Executive summary

Business type: affiliate product catalog (FC 27 cheats + utilities).

**Strengths**
- Unique titles across all HTML pages (0 duplicate title groups)
- Canonical + meta description + single H1 + Open Graph on every page
- JSON-LD present sitewide; Product/FAQ limited to catalog pages
- Forum noindex; `/go/` disallowed; sitemap excludes forum + orphan product URLs
- Catalog simplified to 3 indexable products: Cheats, HWID Spoofer, UGC
- Legacy Lite / Pro / Unlock All pages remain for deep links but are `noindex` and out of sitemap

**Top issues remaining**
1. Production DNS for `fc27-cheats.net` not resolving (Critical — deploy blocker)
2. Missing `llms.txt` before this pass (fixed)
3. A few blog meta descriptions slightly over ~160 chars (fixed)
4. Homepage copy still referenced Lite/Pro/Elite as the shop model (fixed)
5. Live CWV / security-header measurement blocked until DNS is live

## Category scores (local)

| Category | Score | Weight | Notes |
|----------|------:|-------:|-------|
| Technical SEO | 92 | 25% | robots, canonicals, indexability matrix clean locally |
| Content Quality | 82 | 20% | strong guides; some tier-comparison posts still mention Lite/Pro |
| On-Page SEO | 90 | 15% | titles/H1/desc solid after trim |
| Schema | 88 | 15% | Product+FAQ on catalog; orphans stripped of rich Product schema |
| Performance | 70 | 10% | not measurable live yet; webp + preload present |
| Images | 90 | 10% | alts present; webp variants |
| AI search readiness | 80 | 5% | llms.txt added; FAQ/schema help AEO |

**Weighted ≈ 86**

## Technical SEO

| Finding | Confidence | Evidence | Impact |
|---------|------------|----------|--------|
| DNS missing for production host | Confirmed | `fc27-cheats.net` does not resolve | Site cannot rank or convert until DNS + deploy |
| Orphans noindex + out of sitemap | Confirmed | lite/pro/unlock-all `noindex`; absent from `sitemap-0.xml` | Prevents thin/duplicate catalog dilution |
| Forum doorway controlled | Confirmed | robots Disallow `/forum/`; pages noindex | Avoids doorway spam risk |
| Unique titles | Confirmed | local scan `dupTitleGroups: 0` | Clean SERP branding |

## On-page / content

| Finding | Confidence | Evidence | Fix status |
|---------|------------|----------|------------|
| 3 blog metas >165 chars | Confirmed | aimbot, are-fc27-cheats-safe, what-are-fc27-cheats | Fixed |
| Home meta still said Lite/Pro/Elite | Confirmed | `en.ts` site.description / hero | Fixed |
| Hero metric still showed three tiers | Confirmed | `Lite · Pro · Elite` | Fixed to Cheats · Spoofer · UGC |

## Schema

- Catalog products keep Product + FAQ JSON-LD
- Orphan product pages only keep BreadcrumbList (no Product spam while noindex)
- Reviews page has no AggregateRating (QA gate)

## AI search (GEO / AEO)

- Added `/llms.txt` with primary URLs and catalog guidance
- FAQPage on home/product pages supports answer-engine extraction

## What could not be verified yet

- PageSpeed / CWV
- Production security headers / HSTS
- Live redirect chain www → apex
- External broken-link crawl against production
