import { defineConfig } from 'vite';

export default defineConfig({
  base: '/test-task/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});