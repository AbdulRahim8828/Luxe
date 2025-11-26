
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import sitemap from 'vite-plugin-sitemap';
import { blogPosts } from './src/data/blogPosts';

const blogPostRoutes = blogPosts.map(post => `/blog/${post.slug}`);
const staticRoutes = [
  '/about',
  '/services',
  '/blog',
  '/contact',
  '/services/wooden-furniture-polish',
  '/sofa-chair-polishing',
  '/services/table-and-bed-polishing',
  '/services/antique-restoration',
  '/services/commercial-polishing',
  '/sofa-fabric-change',
  '/office-chair-repair',
  '/goregaon-furniture-polish',
  '/powai-furniture-polish',
  '/products'
];
const dynamicRoutes = [...blogPostRoutes, ...staticRoutes];


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'assets',
          dest: '.'
        }
      ]
    }),
    sitemap({ 
      hostname: 'https://a1furniturepolish.com', 
      dynamicRoutes
    }),
  ],
  build: {
    // Optimize build output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    // Enhanced code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - loaded on every page
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          
          // UI libraries - icons and components
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
          
          // SEO and meta libraries
          if (id.includes('node_modules/react-helmet-async')) {
            return 'seo-vendor';
          }
          
          // Markdown and content libraries (used in blog)
          if (id.includes('node_modules/react-markdown') || 
              id.includes('node_modules/remark-gfm')) {
            return 'markdown-vendor';
          }
          
          // Route-based code splitting for pages
          if (id.includes('src/pages/')) {
            const pageName = id.split('src/pages/')[1].split('.')[0];
            return `page-${pageName.toLowerCase()}`;
          }
          
          // Component chunks for lazy-loaded components
          if (id.includes('src/components/ExitIntentPopup') ||
              id.includes('src/components/OurProcess') ||
              id.includes('src/components/StatsCounter')) {
            return 'lazy-components';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Source maps for production debugging (optional)
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Optimize CSS
    cssMinify: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  }
});
