import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://warthunder-cheats.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/warthunder-cheats/',
    '/cheats/lite/': '/products/warthunder-cheats/',
    '/cheats/pro/': '/products/warthunder-cheats/',
    '/cheats/elite/': '/products/warthunder-cheats/elite/',
    '/cheats/compare/': '/blog/lite-vs-pro/',
    '/contact/': '/support/',
    '/products/rust-cheats/': '/products/warthunder-cheats/',
    '/products/rust-cheats/elite/': '/products/warthunder-cheats/elite/',
    '/products/rust-cheats/utilities/': '/products/warthunder-cheats/utilities/',
    '/products/dota-2-cheats/': '/products/warthunder-cheats/',
    '/products/dota-2-cheats/elite/': '/products/warthunder-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/warthunder-cheats/utilities/',
  },
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
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
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
