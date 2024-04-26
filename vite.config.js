import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      Router: resolve(process.cwd(), './src/router'),
      Pages: resolve(process.cwd(), './src/pages'),
      Components: resolve(process.cwd(), './src/components'),
    },
  },
});
