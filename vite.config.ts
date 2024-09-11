import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // Important for loading resources in production
  build: {
    outDir: 'dist',
    emptyOutDir: true  // Clears the directory on every build
  }
});
