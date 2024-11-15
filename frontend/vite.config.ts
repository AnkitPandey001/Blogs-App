import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer' // Import autoprefixer correctly

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Setup alias for easier imports
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,    // Use imported tailwindcss here
        autoprefixer,   // Use imported autoprefixer here
      ],
    },
  },
  build: {
    minify: 'esbuild',  // For production build optimization
    outDir: 'build',    // Set output directory for built files
  },
  server: {
    port: 5173,  // Optional, if you want a custom port for development
  },
})
