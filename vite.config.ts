
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
  '/wooden-furniture-polish',
  '/sofa-chair-polishing',
  '/table-bed-polishing',
  '/antique-restoration',
  '/commercial-polishing'
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
});
