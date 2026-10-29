import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pages = [
  'index.html',
  'about.html',
  'authentication.html',
  'collections.html',
  'contact.html',
  'layaway.html',
  'sell-to-us.html',
  'shop.html',
  'vip-extended-layaway.html',
  'watch-preview.html',
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replace('.html', ''), resolve(__dirname, page)]),
      ),
    },
  },
});
