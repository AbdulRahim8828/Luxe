#!/usr/bin/env tsx

/**
 * Fix Hero Image for proper display
 */

import { existsSync, copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const ROOT_DIR = process.cwd();
const SOURCE_IMAGE = join(ROOT_DIR, 'assets/Luxe assets/Hero Image.webp');
const PUBLIC_ASSETS = join(ROOT_DIR, 'public/assets');
const DEST_IMAGE = join(PUBLIC_ASSETS, 'Hero Image.webp');

console.log('🖼️ Fixing hero image...');

// Ensure public/assets directory exists
if (!existsSync(PUBLIC_ASSETS)) {
  mkdirSync(PUBLIC_ASSETS, { recursive: true });
  console.log('📁 Created public/assets directory');
}

// Check if source image exists
if (!existsSync(SOURCE_IMAGE)) {
  console.error('❌ Source image not found:', SOURCE_IMAGE);
  process.exit(1);
}

// Copy image to public/assets
try {
  copyFileSync(SOURCE_IMAGE, DEST_IMAGE);
  console.log('✅ Hero image copied successfully');
  console.log('📍 From:', SOURCE_IMAGE);
  console.log('📍 To:', DEST_IMAGE);
} catch (error) {
  console.error('❌ Error copying image:', error);
  process.exit(1);
}

console.log('🎉 Hero image is ready for use!');