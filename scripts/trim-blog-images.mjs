import fs from 'node:fs';

/**
 * Blog detail pages already render post.image as the hero.
 * Keep that as the single relevant image — strip all body image blocks.
 */
const path = new URL('../src/data/blog/posts.ts', import.meta.url);
const src = fs.readFileSync(path, 'utf8');

const cleaned = src.replace(
  /\n\s*\{\s*type:\s*'image',\s*src:\s*"[^"]*",\s*alt:\s*"[^"]*",\s*caption:\s*"[^"]*"\s*\},?/g,
  '',
);

fs.writeFileSync(path, cleaned);

const remaining = (cleaned.match(/type:\s*'image'/g) || []).length;
console.log('body image blocks remaining:', remaining);
if (remaining > 0) {
  console.error('Failed to strip all body images');
  process.exit(1);
}

const covers = [...cleaned.matchAll(/^\s*image:\s*"([^"]+)"/gm)].map((m) => m[1]);
console.log('cover images:', covers.length);
console.log('done');
