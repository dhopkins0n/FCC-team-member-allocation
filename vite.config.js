import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/FCC-team-member-allocation/',
  plugins: [react()],
});