import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'Vue3XTerm',
      fileName: (format) => `vue3-xterm.${format}.js`
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['vue', 'xterm'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
          xterm: 'Terminal'
        }
      }
    }
  }
});

