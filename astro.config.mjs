// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://g0nni.github.io',
  base: '/astro-showcase-template',
  vite: {
    plugins: [tailwindcss()]
  }
});