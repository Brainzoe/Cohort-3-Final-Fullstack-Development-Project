import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['styled-components'],
  },
  build: {
    outDir: 'dist', // Optional: Specify the output directory
  },
  server: {
    open: true, // Automatically open the app in the default browser
  },
  base: '/',
});
