import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/server';

export default defineConfig({
  integrations: [react()],
  adapter: vercel(),
});
