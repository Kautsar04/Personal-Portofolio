import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/Personal-Portofolio/',
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    visualizer({ open: true, gzipSize: true, brotliSize: true }),
  ],
});
