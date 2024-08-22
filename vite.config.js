import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://dhopkins0n.github.io/FCC-team-member-allocation/',
  plugins: [react()],
});