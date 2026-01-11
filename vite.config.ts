
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
// import sitemap from 'vite-plugin-sitemap'; // Replaced with custom sitemap generation
import { blogPosts } from './src/blog/data';
import { pagesData } from './src/data/generatedPagesData';

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
  '/dadar',
  '/products'
];

// Add all 150 generated service pages to sitemap
const generatedServiceRoutes = pagesData.map(page => page.url);

const dynamicRoutes = [...blogPostRoutes, ...staticRoutes, ...generatedServiceRoutes];


// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // Handle Node.js version compatibility
    global: 'globalThis',
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'Luxe assets',
          dest: '.'
        },
        {
          src: 'public/favicon.ico',
          dest: '.'
        },
        {
          src: 'public/favicon-16x16.png',
          dest: '.'
        },
        {
          src: 'public/favicon-32x32.png',
          dest: '.'
        },
        {
          src: 'public/apple-touch-icon.png',
          dest: '.'
        },
        {
          src: 'public/android-chrome-192x192.png',
          dest: '.'
        },
        {
          src: 'public/android-chrome-512x512.png',
          dest: '.'
        },
        {
          src: 'public/site.webmanifest',
          dest: '.'
        },
        {
          src: 'public/browserconfig.xml',
          dest: '.'
        }
      ]
    }),
    // sitemap({ 
    //   hostname: 'https://luxewoodenfurniturepolishing.com', 
    //   dynamicRoutes
    // }), // Replaced with custom optimized sitemap generation
  ],
  build: {
    // Enhanced build optimization for luxury performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console methods
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        safari10: true, // Fix Safari 10 issues
      },
      format: {
        comments: false, // Remove all comments
      },
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
            
            // Split generated pages into smaller chunks by service type and location
            if (pageName.includes('generated/')) {
              const fileName = pageName.split('generated/')[1];
              
              // Group by service type for better caching
              if (fileName.includes('FurniturePolishing')) {
                return 'generated-furniture-polishing';
              }
              if (fileName.includes('WoodPolishing')) {
                return 'generated-wood-polishing';
              }
              if (fileName.includes('PuPolish')) {
                return 'generated-pu-polish';
              }
              if (fileName.includes('PuGlossPolish')) {
                return 'generated-pu-gloss-polish';
              }
              if (fileName.includes('PuMattPolish')) {
                return 'generated-pu-matt-polish';
              }
              if (fileName.includes('MelaminePolish')) {
                return 'generated-melamine-polish';
              }
              if (fileName.includes('DucoPolish')) {
                return 'generated-duco-polish';
              }
              if (fileName.includes('TeakWoodPolish')) {
                return 'generated-teak-wood-polish';
              }
              if (fileName.includes('InteriorWoodFinishing')) {
                return 'generated-interior-wood-finishing';
              }
              if (fileName.includes('DoorPolishing')) {
                return 'generated-door-polishing';
              }
              if (fileName.includes('WardrobePolishing')) {
                return 'generated-wardrobe-polishing';
              }
              if (fileName.includes('DiningTablePolishing')) {
                return 'generated-dining-table-polishing';
              }
              if (fileName.includes('SofaWoodPolish')) {
                return 'generated-sofa-wood-polish';
              }
              if (fileName.includes('BedWoodPolish')) {
                return 'generated-bed-wood-polish';
              }
              if (fileName.includes('CabinetWoodPolish')) {
                return 'generated-cabinet-wood-polish';
              }
              if (fileName.includes('BookshelfrackPolish')) {
                return 'generated-bookshelfrack-polish';
              }
              if (fileName.includes('MandirPolish')) {
                return 'generated-mandir-polish';
              }
              if (fileName.includes('JhulaPolish')) {
                return 'generated-jhula-polish';
              }
              if (fileName.includes('WoodenFloorPolishing')) {
                return 'generated-wooden-floor-polishing';
              }
              if (fileName.includes('AntiqueFurniturePolish')) {
                return 'generated-antique-furniture-polish';
              }
              
              // Fallback for any other generated pages
              return 'generated-other';
            }
            
            if (pageName.includes('locations/')) {
              return 'location-pages';
            }
            return `page-${pageName.toLowerCase()}`;
          }
          
          // Component chunks for lazy-loaded components
          if (id.includes('src/components/ExitIntentPopup') ||
              id.includes('src/components/OurProcess') ||
              id.includes('src/components/StatsCounter') ||
              id.includes('src/components/BookingModal') ||
              id.includes('src/components/ServiceDetailModal')) {
            return 'lazy-components';
          }
          
          // Image optimization components
          if (id.includes('src/components/OptimizedImage') ||
              id.includes('src/components/LuxeResponsiveImage')) {
            return 'image-components';
          }
          
          // Data modules - shared across generated pages
          if (id.includes('src/data/contentTemplates') ||
              id.includes('src/data/pageDataGenerator') ||
              id.includes('src/data/generatedPagesConfig')) {
            return 'page-data';
          }
          
          // Generated pages data - separate chunk
          if (id.includes('src/data/generatedPagesData')) {
            return 'generated-data';
          }
          
          // SEO utilities
          if (id.includes('src/seo/') || id.includes('src/utils/seoHelpers')) {
            return 'seo-utils';
          }
          
          // Brand system utilities
          if (id.includes('src/utils/brandUtils') || 
              id.includes('src/utils/brandValidation') ||
              id.includes('src/config/')) {
            return 'brand-system';
          }
          
          // Large vendor libraries
          if (id.includes('node_modules') && id.includes('lodash')) {
            return 'lodash-vendor';
          }
        },
        // Optimize chunk file names with content hashing
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/[name]-[hash].js`;
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = (assetInfo.name || 'asset').split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash].[ext]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
      // Tree shaking optimization
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    // Chunk size warnings - stricter for luxury performance
    chunkSizeWarningLimit: 500, // Reduced from 800 for better performance
    // Source maps for production debugging (disabled for performance)
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Optimize CSS with enhanced settings
    cssMinify: 'lightningcss',
    // Target modern browsers for better optimization
    target: ['es2020', 'chrome80', 'firefox78', 'safari14', 'edge88'],
    // Optimize asset inlining
    assetsInlineLimit: 4096, // Inline small assets
  },
  // Enhanced dependency optimization for luxury performance
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'lucide-react',
      'react-helmet-async'
    ],
    exclude: [
      // Exclude large libraries that should be loaded on demand
      'react-markdown',
      'remark-gfm'
    ],
    // Force optimization of specific dependencies
    force: true,
  },
  
  // ESBuild configuration for better compatibility
  esbuild: {
    // Ignore TypeScript errors during build
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    target: 'es2020',
  },
  
  // Enhanced server configuration for development
  server: {
    // Optimize HMR
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
    // Preload optimization
    warmup: {
      clientFiles: [
        './src/main.tsx',
        './src/App.tsx',
        './src/pages/Home.tsx',
        './src/components/Header.tsx',
        './src/components/Footer.tsx',
      ],
    },
  },
  
  // Enhanced preview configuration
  preview: {
    port: 4173,
    strictPort: true,
    // Enable compression
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  
  // CSS optimization
  css: {
    devSourcemap: false, // Disable CSS source maps in dev for performance
    preprocessorOptions: {
      // Add any CSS preprocessor options here if needed
    },
  },
});
