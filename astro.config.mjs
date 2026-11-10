import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

// Path + checkout redirects live in one map (scripts/redirects.mjs +
// src/config/checkout-redirects.mjs) and are emitted to public/_redirects
// via scripts/write-redirects.mjs. Node serve.mjs and Astro middleware use
// the same maps for real 301/302 responses.
export default defineConfig({
  site: 'https://fc27-cheats.net',
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') && !page.includes('/go/') && !page.includes('/forum/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      cssCodeSplit: true,
      modulePreload: { polyfill: false },
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
});
