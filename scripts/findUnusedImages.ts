#!/usr/bin/env tsx

import { readdir, stat, readFile } from 'fs/promises';
import { join } from 'path';

async function getAllFiles(dir: string, extensions: string[] = []): Promise<string[]> {
  const files: string[] = [];
  
  async function scan(currentDir: string) {
    const items = await readdir(currentDir);
    
    for (const item of items) {
      const fullPath = join(currentDir, item);
      const stats = await stat(fullPath);
      
      if (stats.isDirectory()) {
        if (!item.startsWith('.') && item !== 'node_modules') {
          await scan(fullPath);
        }
      } else if (extensions.length === 0 || extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  await scan(dir);
  return files;
}

async function findUsedImages() {
  console.log('🔍 Analyzing image usage in the codebase...\n');
  
  // Get all image files in Luxe assets folder
  const imageFiles = await getAllFiles('Luxe assets', ['.webp', '.jpg', '.jpeg', '.png', '.svg']);
  const luxeAssets = imageFiles.filter(file => file.includes('Luxe assets'));
  const regularAssets = imageFiles.filter(file => !file.includes('Luxe assets'));
  
  console.log(`📁 Found ${imageFiles.length} total images:`);
  console.log(`   - ${luxeAssets.length} Luxe assets (will be preserved)`);
  console.log(`   - ${regularAssets.length} regular assets\n`);
  
  // Get all code files
  const codeFiles = await getAllFiles('.', ['.tsx', '.ts', '.js', '.jsx']);
  const filteredCodeFiles = codeFiles.filter(file => 
    !file.includes('node_modules') && 
    !file.includes('.git') && 
    !file.includes('dist') &&
    !file.includes('scripts/findUnusedImages.ts')
  );
  
  console.log(`📄 Scanning ${filteredCodeFiles.length} code files for image references...\n`);
  
  // Find all image references in code
  const usedImages = new Set<string>();
  
  for (const codeFile of filteredCodeFiles) {
    try {
      const content = await readFile(codeFile, 'utf-8');
      
      // Look for various image reference patterns
      const patterns = [
        /\/assets\/[^"'\s)]+\.(webp|jpg|jpeg|png|svg)/g,
        /assets\/[^"'\s)]+\.(webp|jpg|jpeg|png|svg)/g,
        /"[^"]*\/assets\/[^"]*\.(webp|jpg|jpeg|png|svg)[^"]*"/g,
        /'[^']*\/assets\/[^']*\.(webp|jpg|jpeg|png|svg)[^']*'/g,
      ];
      
      for (const pattern of patterns) {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            // Clean up the match to get just the path
            let cleanPath = match.replace(/['"]/g, '');
            if (cleanPath.startsWith('/Luxe assets/')) {
              cleanPath = cleanPath.substring(1); // Remove leading slash
            }
            if (cleanPath.startsWith('Luxe assets/')) {
              usedImages.add(cleanPath);
            }
          });
        }
      }
    } catch (error) {
      console.warn(`⚠️  Could not read file: ${codeFile}`);
    }
  }
  
  console.log(`✅ Found ${usedImages.size} image references in code\n`);
  
  // Identify unused images (excluding Luxe assets)
  const unusedImages: string[] = [];
  
  for (const imageFile of regularAssets) {
    const relativePath = imageFile.replace(/\\/g, '/');
    let isUsed = false;
    
    // Check if this image is referenced
    for (const usedImage of Array.from(usedImages)) {
      if (relativePath.includes(usedImage.replace(/^\//, '')) || 
          usedImage.includes(relativePath.split('/').pop() || '')) {
        isUsed = true;
        break;
      }
    }
    
    if (!isUsed) {
      unusedImages.push(relativePath);
    }
  }
  
  // Display results
  console.log('📊 ANALYSIS RESULTS:');
  console.log('===================\n');
  
  console.log('🔗 USED IMAGES:');
  Array.from(usedImages).sort().forEach(img => {
    console.log(`   ✓ ${img}`);
  });
  
  console.log(`\n🗑️  UNUSED IMAGES (${unusedImages.length}):`);
  if (unusedImages.length === 0) {
    console.log('   🎉 No unused images found!');
  } else {
    unusedImages.sort().forEach(img => {
      console.log(`   ❌ ${img}`);
    });
  }
  
  console.log(`\n🛡️  LUXE ASSETS (${luxeAssets.length}) - PRESERVED:`);
  luxeAssets.sort().forEach(img => {
    console.log(`   🔒 ${img}`);
  });
  
  return { unusedImages, usedImages: Array.from(usedImages), luxeAssets };
}

// Run the analysis
findUsedImages().catch(console.error);