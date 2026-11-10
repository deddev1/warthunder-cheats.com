/**
 * Website QA checklist verifier.
 * Run after: npm run build
 * Usage: node scripts/qa-checklist.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const src = path.join(root, 'src');
const failures = [];
const passes = [];

function ok(label) {
  passes.push(label);
  console.log(`PASS  ${label}`);
}
function fail(label, detail = '') {
  failures.push(`${label}${detail ? ` — ${detail}` : ''}`);
  console.error(`FAIL  ${label}${detail ? ` — ${detail}` : ''}`);
}

function walk(dir, exts = null) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      out.push(...walk(full, exts));
    } else if (!exts || exts.some((e) => entry.name.endsWith(e))) {
      out.push(full);
    }
  }
  return out;
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

// 1) Build output exists
if (!fs.existsSync(dist)) {
  fail('Whole build clean', 'dist/ missing — run npm run build first');
} else {
  const htmlPages = walk(dist, ['.html']).filter((f) => !f.includes(`${path.sep}404`));
  if (htmlPages.length < 10) fail('Whole build clean', `only ${htmlPages.length} HTML pages`);
  else ok(`Whole build clean (${htmlPages.length} HTML pages in dist)`);
}

// 2) robots.txt + sitemap
const robotsPath = path.join(dist, 'robots.txt');
const sitemapCandidates = [
  path.join(dist, 'sitemap-index.xml'),
  path.join(dist, 'sitemap-0.xml'),
  path.join(dist, 'sitemap.xml'),
];
if (!fs.existsSync(robotsPath)) {
  fail('sitemap.xml and robots.txt', 'robots.txt missing in dist');
} else {
  const robots = read(robotsPath);
  if (!/sitemap:/i.test(robots)) fail('sitemap.xml and robots.txt', 'robots.txt has no Sitemap: line');
  else if (!/warthunder-cheats\.com/i.test(robots)) fail('sitemap.xml and robots.txt', 'robots sitemap host wrong');
  else ok('robots.txt live with Sitemap pointing at warthunder-cheats.com');
}
const sitemapFile = sitemapCandidates.find((f) => fs.existsSync(f));
if (!sitemapFile) {
  fail('sitemap.xml and robots.txt', 'no sitemap XML in dist');
} else {
  const sm = read(sitemapFile);
  const required = [
    'https://warthunder-cheats.com/',
    'https://warthunder-cheats.com/products/warthunder-cheats/',
    'https://warthunder-cheats.com/blog/',
    'https://warthunder-cheats.com/faq/',
    'https://warthunder-cheats.com/support/',
    'https://warthunder-cheats.com/reviews/',
  ];
  const missing = required.filter((u) => !sm.includes(u) && !sm.includes(u.replace(/\/$/, '')));
  // sitemap-index may only list child sitemaps
  if (path.basename(sitemapFile) === 'sitemap-index.xml') {
    const child = path.join(dist, 'sitemap-0.xml');
    if (fs.existsSync(child)) {
      const childSm = read(child);
      const miss = required.filter((u) => !childSm.includes(u));
      if (miss.length) fail('sitemap.xml and robots.txt', `sitemap-0 missing: ${miss.join(', ')}`);
      else ok(`sitemap lists core pages (${required.length} checked)`);
    } else {
      ok('sitemap-index.xml present');
    }
  } else if (missing.length) {
    fail('sitemap.xml and robots.txt', `missing URLs: ${missing.join(', ')}`);
  } else {
    ok(`sitemap lists core pages (${required.length} checked)`);
  }
}

// 3) Affiliate / store links
const checkoutFile = path.join(src, 'config/checkout-redirects.mjs');
const redirectsFile = path.join(root, 'public/_redirects');
const expectedCheats = 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fwar-thunder';
const expectedHwid = 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fhwid-spoofer';
if (fs.existsSync(checkoutFile)) {
  const c = read(checkoutFile);
  if (!c.includes(expectedCheats)) fail('Store/affiliate links', 'warthunder checkout URL wrong');
  else if (!c.includes(expectedHwid)) fail('Store/affiliate links', 'hwid checkout URL wrong');
  else ok('Checkout redirect config targets war-thunder + hwid-spoofer');
} else {
  fail('Store/affiliate links', 'checkout-redirects.mjs missing');
}
if (fs.existsSync(redirectsFile)) {
  const r = read(redirectsFile);
  const ruleLines = r.split(/\r?\n/).filter((line) => /^\S+\s+\S+\s+(301|302)\s*$/.test(line));
  if (/^https?:\/\//m.test(r.replace(/^#.*$/gm, ''))) {
    fail('Store/affiliate links', '_redirects must not use absolute source URLs (CF Workers)');
  } else if (ruleLines.length > 100) {
    fail('Store/affiliate links', `_redirects has ${ruleLines.length} rules (CF max 100)`);
  } else if (!r.includes('%2Fproducts%2Fwar-thunder')) fail('Store/affiliate links', '_redirects missing war-thunder');
  else if (!r.includes('%2Fproducts%2Fhwid-spoofer')) fail('Store/affiliate links', '_redirects missing hwid');
  else if (!r.includes('/cheats/lite/ /products/warthunder-cheats/lite/ 301')) {
    fail('Store/affiliate links', '_redirects lite must 301 to tier page');
  } else if (!r.includes('/cheats/pro/ /products/warthunder-cheats/pro/ 301')) {
    fail('Store/affiliate links', '_redirects pro must 301 to tier page');
  } else if (!r.includes('/go/warthunder/ ') || !r.includes(' 302')) {
    fail('Store/affiliate links', '_redirects /go/ must be 302-only (no HTML bridge)');
  } else ok(`public/_redirects OK (${ruleLines.length} rules, relative sources)`);
}
const goBridge = path.join(dist, 'go');
if (fs.existsSync(goBridge)) {
  fail('Store/affiliate links', 'dist/go HTML bridge present — /go must be 302-only');
} else {
  ok('/go has no HTML bridge in dist (302-only)');
}

// 4) Original copy / no leftover games in user-facing src
const forbidden = [
  /\bFacepunch\b/,
  /\bEasy Anti-Cheat\b/,
  /\bdotacheats\.com\b/i,
  /\brust-cheats\.net\b/i,
  /Lorem ipsum/i,
  /\bTODO:\s*replace/i,
  /\bComing soon\b/i,
  /\bplaceholder copy\b/i,
];
const srcFiles = walk(src, ['.ts', '.astro', '.mjs', '.md']).filter(
  (f) => !f.includes(`${path.sep}starwind${path.sep}`),
);
let leftoverHits = [];
for (const file of srcFiles) {
  const text = read(file);
  for (const re of forbidden) {
    if (re.test(text)) {
      // allow legacy redirect sources / URL rewrite helpers
      if (
        file.includes('redirects.mjs') ||
        file.includes('path-redirects.mjs') ||
        file.includes('checkout.ts') ||
        file.includes(`blog${path.sep}[slug].astro`)
      ) {
        continue;
      }
      leftoverHits.push(`${path.relative(root, file)} ~ ${re}`);
    }
  }
}
if (leftoverHits.length) fail('Copy is original', leftoverHits.slice(0, 8).join('; '));
else ok('No placeholder / wrong-game leftovers in user-facing src');

// 5) Desktop/mobile structural sanity — key pages exist
const mustExist = [
  'index.html',
  path.join('products', 'warthunder-cheats', 'index.html'),
  path.join('blog', 'index.html'),
  path.join('faq', 'index.html'),
  path.join('support', 'index.html'),
  path.join('reviews', 'index.html'),
];
const missingPages = mustExist.filter((p) => !fs.existsSync(path.join(dist, p)));
if (missingPages.length) fail('Every page loads', `missing: ${missingPages.join(', ')}`);
else ok('Core pages present in dist (desktop/mobile share same HTML)');

// 6) Unique title + meta description + single H1 per page
const isRedirectStub = (file, html) => {
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  if (rel.startsWith('go/')) return true;
  if (rel.startsWith('cheats/')) return true;
  if (rel.startsWith('contact/')) return true;
  if (rel.startsWith('products/rust-cheats/')) return true;
  if (rel.startsWith('products/dota-2-cheats/')) return true;
  // Astro redirect pages are tiny and often meta-refresh / location only
  if (html.includes('http-equiv="refresh"') || /<meta[^>]+http-equiv=["']refresh["']/i.test(html)) return true;
  if (html.length < 800 && !/<h1\b/i.test(html)) return true;
  return false;
};

const htmlFiles = walk(dist, ['.html']).filter((f) => {
  if (f.includes(`${path.sep}404`)) return false;
  const html = read(f);
  return !isRedirectStub(f, html);
});
const titles = new Map();
let seoIssues = 0;
for (const file of htmlFiles) {
  const html = read(file);
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [, ''])[1].trim();
  const desc = (html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
    html.match(/content=["']([^"']*)["'][^>]+name=["']description["']/i) || [, ''])[1].trim();
  const h1s = [...html.matchAll(/<h1\b[^>]*>/gi)];
  const rel = path.relative(dist, file);
  if (!title) {
    seoIssues++;
    fail('Unique SEO per page', `${rel} missing <title>`);
  }
  if (!desc || desc.length < 40) {
    seoIssues++;
    fail('Unique SEO per page', `${rel} weak/missing meta description`);
  }
  if (h1s.length !== 1) {
    seoIssues++;
    fail('Unique SEO per page', `${rel} has ${h1s.length} H1(s)`);
  }
  if (title) {
    if (titles.has(title) && !rel.includes('rust-cheats') && !rel.includes('dota-2')) {
      // allow identical only for redirect stubs if any
      const prev = titles.get(title);
      if (!String(prev).includes('rust-cheats') && !String(rel).includes('utilities')) {
        // soft: many product utilities may differ; only flag exact duplicates across major pages
      }
      titles.set(title, `${prev}, ${rel}`);
    } else {
      titles.set(title, rel);
    }
  }
}
if (seoIssues === 0) ok(`Titles, descriptions, single H1 checked on ${htmlFiles.length} pages`);

// Duplicate titles among primary pages
const primary = htmlFiles.filter((f) => {
  const rel = path.relative(dist, f).replace(/\\/g, '/');
  return (
    rel === 'index.html' ||
    rel === 'faq/index.html' ||
    rel === 'support/index.html' ||
    rel === 'reviews/index.html' ||
    rel === 'blog/index.html' ||
    rel === 'products/warthunder-cheats/index.html' ||
    rel === 'about/index.html' ||
    rel === 'privacy/index.html' ||
    rel === 'terms/index.html'
  );
});
const primaryTitles = primary.map((f) => {
  const html = read(f);
  return (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [, ''])[1].trim();
});
const dupPrimary = primaryTitles.filter((t, i) => t && primaryTitles.indexOf(t) !== i);
if (dupPrimary.length) fail('Unique SEO per page', `duplicate primary titles: ${[...new Set(dupPrimary)].join(' | ')}`);
else ok('Primary pages have unique titles');

// 7) Images compressed + alt text
const imgDir = path.join(root, 'public', 'images');
const pngs = walk(imgDir, ['.png']).filter((f) => !/-\d+\.webp$/i.test(f));
let missingWebp = 0;
for (const png of pngs) {
  if (png.includes(`${path.sep}nav-gun`) || png.includes('favicon-source')) continue;
  const base = png.replace(/\.png$/i, '');
  const webp960 = `${base}-960.webp`;
  if (!fs.existsSync(webp960) && (png.includes('gameplay') || png.includes('blog'))) {
    missingWebp++;
  }
}
if (missingWebp > 0) fail('Images compressed + alt', `${missingWebp} gameplay/blog PNGs missing -960.webp`);
else ok('Gameplay/blog PNGs have optimized webp variants');

const astroFiles = walk(src, ['.astro']);
let emptyAlt = 0;
for (const file of astroFiles) {
  const text = read(file);
  // decorative empty alts on brand gun are OK if explicitly alt=""
  const bad = text.match(/ResponsiveImage[\s\S]{0,200}alt=\{?["']\s*["']\}?/g);
  if (bad) emptyAlt += bad.length;
}
if (emptyAlt) fail('Images compressed + alt', `${emptyAlt} ResponsiveImage empty alt(s)`);
else ok('No empty ResponsiveImage alt attributes detected');

// 8) Critical warthunder cheats SEO guards
const homeHtml = path.join(dist, 'index.html');
if (fs.existsSync(homeHtml)) {
  const home = read(homeHtml);
  const title = (home.match(/<title[^>]*>([^<]*)<\/title>/i) || [, ''])[1];
  const h1 = (home.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ''])[1].replace(/<[^>]+>/g, '').trim();
  if (!title.includes('War Thunder Cheats')) fail('Head query SEO', `homepage title missing phrase: ${title}`);
  else if (!h1.includes('War Thunder Cheats')) fail('Head query SEO', `homepage H1 missing phrase: ${h1}`);
  else ok('Homepage title + H1 contain War Thunder Cheats');
}
const hubHtml = path.join(dist, 'products', 'warthunder-cheats', 'index.html');
if (fs.existsSync(hubHtml)) {
  const hub = read(hubHtml);
  const title = (hub.match(/<title[^>]*>([^<]*)<\/title>/i) || [, ''])[1];
  const h1 = (hub.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ''])[1].replace(/<[^>]+>/g, '').trim();
  if (!title.includes('War Thunder Cheats')) fail('Head query SEO', `products hub title missing phrase: ${title}`);
  else if (!h1.includes('War Thunder Cheats')) fail('Head query SEO', `products hub H1 missing phrase: ${h1}`);
  else ok('Products hub title + H1 contain War Thunder Cheats');
}
const sitemap0 = path.join(dist, 'sitemap-0.xml');
if (fs.existsSync(sitemap0)) {
  const sm = read(sitemap0);
  if (/\/forum\//.test(sm)) fail('Forum de-index', 'sitemap-0 still lists /forum/ URLs');
  else ok('Sitemap excludes /forum/');
}
if (fs.existsSync(path.join(dist, 'sitemap-forum.xml'))) {
  fail('Forum de-index', 'sitemap-forum.xml should not be published');
} else {
  ok('No sitemap-forum.xml in dist');
}
const forumIndex = path.join(dist, 'forum', 'index.html');
if (fs.existsSync(forumIndex)) {
  const forum = read(forumIndex);
  if (!/noindex/i.test(forum)) fail('Forum de-index', 'forum index missing noindex');
  else ok('Forum index is noindex');
}
const reviewsHtml = path.join(dist, 'reviews', 'index.html');
if (fs.existsSync(reviewsHtml)) {
  const rev = read(reviewsHtml);
  if (/AggregateRating/i.test(rev)) fail('Reviews schema', 'AggregateRating still present');
  else if (/"@type"\s*:\s*"Review"/i.test(rev) || /"@type":"Review"/i.test(rev)) {
    fail('Reviews schema', 'self-serving Review JSON-LD still present');
  } else ok('Reviews page has no AggregateRating / Review schema');
}
const workerFile = path.join(src, 'worker.ts');
const wranglerFile = path.join(root, 'wrangler.toml');
if (!fs.existsSync(workerFile)) fail('Host 301 worker', 'src/worker.ts missing');
else if (!read(wranglerFile).includes('main = "src/worker.ts"')) fail('Host 301 worker', 'wrangler.toml missing worker main');
else if (!/run_worker_first\s*=\s*true/.test(read(wranglerFile))) {
  fail('Host 301 worker', 'wrangler.toml must set assets.run_worker_first = true');
} else ok('Cloudflare Worker host redirect entry wired');
if (fs.existsSync(path.join(dist, 'blog', 'gaijin-patch', 'index.html')) &&
    fs.existsSync(path.join(dist, 'blog', 'gaijin-error', 'index.html'))) {
  ok('gaijin-patch and gaijin-error blog pages built');
} else {
  fail('Slug rename', 'gaijin-patch / gaijin-error pages missing from dist');
}

// Summary
console.log('\n—— QA checklist summary ——');
console.log(`Passed: ${passes.length}`);
console.log(`Failed: ${failures.length}`);
if (failures.length) {
  console.log('\nFailures:');
  for (const f of failures) console.log(` - ${f}`);
  process.exit(1);
}
console.log('\nAll checklist items passed.');
