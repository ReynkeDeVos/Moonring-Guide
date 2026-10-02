import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
export default defineConfig({
  plugins: [viteSingleFile()],
  esbuild: { jsx: 'automatic', jsxImportSource: 'preact' },
  build: { assetsInlineLimit: 1000000, target: 'es2022' }
});
