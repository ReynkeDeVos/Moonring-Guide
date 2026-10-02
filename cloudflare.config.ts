import { defineConfig } from 'cf/config';

export default defineConfig({
  accountId: '24a43ce47ad5045dfe4124411bfe5105',
  worker: {
    name: 'moonring-guide',
    compatibilityDate: '2026-10-01',
    workersDev: true
  }
});
