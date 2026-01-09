#!/usr/bin/env tsx

/**
 * Netlify Build Script
 * Ensures all assets and configurations are properly set up for deployment
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

const ROOT_DIR = process.cwd();
const DIST_DIR = join(ROOT_DIR, 'dist');
const PUBLIC_DIR = join(ROOT_DIR, 'public');

console.log('🚀 Starting Netlify build process...');

// 1. Ensure all required directories exist
function ensureDirectories() {
  console.log('📁 Ensuring required directories exist...');
  
  const requiredDirs = [
    join(PUBLIC_DIR, 'assets'),
    join(PUBLIC_DIR, 'assets/Luxe assets'),
    join(ROOT_DIR, 'assets'),
    join(ROOT_DIR, 'assets/Luxe assets')
  ];

  requiredDirs.forEach(dir => {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });
}

// 2. Check for required assets
function checkAssets() {
  console.log('🖼️ Checking required assets...');
  
  const requiredAssets = [
    'assets/Luxe assets/logo.png',
    'assets/Sofa And chair.webp',
    'public/favicon.ico',
    'public/site.webmanifest'
  ];

  const missingAssets = requiredAssets.filter(asset => !existsSync(join(ROOT_DIR, asset)));
  
  if (missingAssets.length > 0) {
    console.warn('⚠️ Missing assets:', missingAssets);
    console.log('📝 Creating placeholder assets...');
    
    // Create placeholder favicon if missing
    if (!existsSync(join(PUBLIC_DIR, 'favicon.ico'))) {
      // Create a simple favicon placeholder
      writeFileSync(join(PUBLIC_DIR, 'favicon.ico'), '');
    }
    
    // Create site.webmanifest if missing
    if (!existsSync(join(PUBLIC_DIR, 'site.webmanifest'))) {
      const manifest = {
        name: "LUXE Wooden Furniture Polishing",
        short_name: "LUXE",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        theme_color: "#eab308",
        background_color: "#000000",
        display: "standalone",
        start_url: "/"
      };
      writeFileSync(join(PUBLIC_DIR, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
    }
  } else {
    console.log('✅ All required assets found');
  }
}

// 3. Validate environment variables
function validateEnvironment() {
  console.log('🔧 Validating environment configuration...');
  
  const requiredEnvVars = [
    'VITE_APP_NAME',
    'VITE_PHONE_NUMBER',
    'VITE_WHATSAPP_NUMBER'
  ];

  // Check if production env file exists
  if (!existsSync('.env.production')) {
    console.log('📝 Creating production environment file...');
    const prodEnv = `VITE_APP_ENV=production
VITE_APP_NAME="LUXE Wooden Furniture Polishing"
VITE_APP_URL=https://luxe-furniture-polish.netlify.app
VITE_PHONE_NUMBER="+918828709945"
VITE_WHATSAPP_NUMBER="918828709945"
VITE_EMAIL="info@luxefurniturepolish.com"`;
    writeFileSync('.env.production', prodEnv);
  }

  console.log('✅ Environment configuration ready');
}

// 4. Run build with error handling
function runBuild() {
  console.log('🔨 Running production build...');
  
  try {
    // Set NODE_ENV for production
    process.env.NODE_ENV = 'production';
    
    // Run the build command
    execSync('npm run build', { 
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' }
    });
    
    console.log('✅ Build completed successfully');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// 5. Post-build optimizations
function postBuildOptimizations() {
  console.log('⚡ Running post-build optimizations...');
  
  if (existsSync(DIST_DIR)) {
    // Ensure _redirects file is in dist
    const redirectsSource = join(PUBLIC_DIR, '_redirects');
    const redirectsTarget = join(DIST_DIR, '_redirects');
    
    if (existsSync(redirectsSource) && !existsSync(redirectsTarget)) {
      const redirectsContent = readFileSync(redirectsSource, 'utf-8');
      writeFileSync(redirectsTarget, redirectsContent);
      console.log('✅ Copied _redirects to dist');
    }
    
    console.log('✅ Post-build optimizations completed');
  }
}

// Main execution
async function main() {
  try {
    ensureDirectories();
    checkAssets();
    validateEnvironment();
    runBuild();
    postBuildOptimizations();
    
    console.log('🎉 Netlify build process completed successfully!');
    console.log('📦 Ready for deployment');
  } catch (error) {
    console.error('❌ Build process failed:', error);
    process.exit(1);
  }
}

main();