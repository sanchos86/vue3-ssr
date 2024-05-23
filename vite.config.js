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
      HttpClient: resolve(process.cwd(), './http-client'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules') && id.includes('vue3-lazy-hydration')) {
            return 'vue3-lazy-hydration';
          }
        },
      }
    }
  }
});
