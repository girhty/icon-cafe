import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ICON CAFE — Editorial Luxury / Modern Brutalist single-page experience
export default defineConfig({
  base: '/icon-cafe/',
  output: 'static',
  site: 'https://icon-cafe.example.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  compressHTML: true,
});