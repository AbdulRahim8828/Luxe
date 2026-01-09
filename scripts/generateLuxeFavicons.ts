#!/usr/bin/env tsx

/**
 * Generate LUXE Favicons from Logo
 * Converts the LUXE logo to various favicon formats and sizes
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync, copyFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const ROOT_DIR = process.cwd();
const LOGO_PATH = join(ROOT_DIR, 'assets/Luxe assets/logo.png');
const PUBLIC_DIR = join(ROOT_DIR, 'public');

console.log('🎨 Generating LUXE favicons from logo...');

// Check if logo exists
if (!existsSync(LOGO_PATH)) {
  console.error('❌ Logo not found at:', LOGO_PATH);
  process.exit(1);
}

// Ensure public directory exists
if (!existsSync(PUBLIC_DIR)) {
  mkdirSync(PUBLIC_DIR, { recursive: true });
}

async function generateFavicons() {
  try {
    console.log('📸 Processing logo image...');
    
    // Load the original logo
    const logoBuffer = await sharp(LOGO_PATH)
      .resize(512, 512, { 
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
      })
      .png()
      .toBuffer();

    // Generate different sizes
    const sizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 180, name: 'apple-touch-icon.png' },
      { size: 192, name: 'android-chrome-192x192.png' },
      { size: 512, name: 'android-chrome-512x512.png' }
    ];

    console.log('🔧 Generating favicon sizes...');
    
    for (const { size, name } of sizes) {
      await sharp(logoBuffer)
        .resize(size, size, { 
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(join(PUBLIC_DIR, name));
      
      console.log(`✅ Generated ${name} (${size}x${size})`);
    }

    // Generate ICO favicon (16x16 and 32x32 combined)
    console.log('🔧 Generating favicon.ico...');
    
    // Create a simple 32x32 favicon.ico
    await sharp(logoBuffer)
      .resize(32, 32, { 
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(join(PUBLIC_DIR, 'favicon.ico'));
    
    console.log('✅ Generated favicon.ico');

    // Update site.webmanifest
    console.log('📝 Updating site.webmanifest...');
    
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

    writeFileSync(
      join(PUBLIC_DIR, 'site.webmanifest'),
      JSON.stringify(manifest, null, 2)
    );

    console.log('✅ Updated site.webmanifest');

    // Update browserconfig.xml for Windows tiles
    console.log('📝 Updating browserconfig.xml...');
    
    const browserConfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/android-chrome-192x192.png"/>
            <TileColor>#000000</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

    writeFileSync(join(PUBLIC_DIR, 'browserconfig.xml'), browserConfig);
    
    console.log('✅ Updated browserconfig.xml');

    console.log('🎉 All LUXE favicons generated successfully!');
    console.log('📁 Files created in public/ directory:');
    console.log('   - favicon.ico');
    console.log('   - favicon-16x16.png');
    console.log('   - favicon-32x32.png');
    console.log('   - apple-touch-icon.png');
    console.log('   - android-chrome-192x192.png');
    console.log('   - android-chrome-512x512.png');
    console.log('   - site.webmanifest');
    console.log('   - browserconfig.xml');

  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

// Run the favicon generation
generateFavicons();