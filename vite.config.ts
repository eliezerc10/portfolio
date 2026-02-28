import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { criticalCssPlugin } from './vite-plugin-critical-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    criticalCssPlugin()
  ],
  base: '/portfolio/',
  css: {
    devSourcemap: true,
    postcss: './postcss.config.js',
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Swiper library
          if (id.includes('node_modules/swiper')) {
            return 'swiper-vendor';
          }
          // React Scroll library
          if (id.includes('node_modules/react-scroll')) {
            return 'scroll-vendor';
          }
          // Cloudinary libraries (large, separate chunk)
          if (id.includes('node_modules/@cloudinary')) {
            return 'cloudinary-vendor';
          }
          // Component-based splitting for lazy-loaded components
          if (id.includes('src/components/navbar')) {
            return 'navbar';
          }
          if (id.includes('src/components/about')) {
            return 'about';
          }
          if (id.includes('src/components/skills')) {
            return 'skills';
          }
          if (id.includes('src/components/experience')) {
            return 'experience';
          }
          if (id.includes('src/components/contact')) {
            return 'contact';
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
