# Website QA Checklist

Always verify these before shipping site changes. Automated checks: `npm run build && node scripts/qa-checklist.mjs`.

## Checklist

- [ ] **Checked the whole build** — no build errors, console errors, or broken pages
- [ ] **sitemap.xml and robots.txt** are live and list every page
- [ ] **All store and affiliate links** open the right product
- [ ] **Copy is original** — no placeholder or copied leftover game text
- [ ] **Every page loads** on desktop and mobile
- [ ] **Every page has its own title,** meta description and one H1
- [ ] **Images are compressed** and have alt text

## Expected checkout URLs

| CTA | URL |
|-----|-----|
| Buy / Get access (cheats) | `https://zadeyo.com/go/QRH?to=%2Fproducts%2Fwar-thunder` |
| HWID Spoofer | `https://zadeyo.com/go/QRH?to=%2Fproducts%2Fhwid-spoofer` |
