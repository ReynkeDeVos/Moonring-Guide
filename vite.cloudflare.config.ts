import { cloudflare } from '@cloudflare/vite-plugin';
import { mergeConfig } from 'vite';
import offlineConfig from './vite.config.ts';

// Keep the offline build unchanged and include its exported research files.
export default mergeConfig(offlineConfig, {
  plugins: [cloudflare({ types: { generate: false } })],
  publicDir: 'dist',
  build: { outDir: 'dist-cloudflare' }
});
