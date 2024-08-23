import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: '/FCC-team-member-allocation/', // Ensure the correct base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the default directory where Vite outputs the build files
  },
});
