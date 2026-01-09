#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

console.log('🔧 Starting to fix double asset paths...');

// Find all TypeScript and TSX files
const files = glob.sync('**/*.{ts,tsx}', {
  ignore: ['node_modules/**', 'dist/**', '.git/**']
});

let totalReplacements = 0;
let filesModified = 0;

files.forEach(file => {
  try {
    const content = readFileSync(file, 'utf-8');
    
    // Replace double asset paths
    const updatedContent = content.replace(/\/Luxe assets\/Luxe assets\//g, '/Luxe assets/');
    
    if (content !== updatedContent) {
      const replacements = (content.match(/\/Luxe assets\/Luxe assets\//g) || []).length;
      totalReplacements += replacements;
      filesModified++;
      
      writeFileSync(file, updatedContent);
      console.log(`✅ Fixed ${replacements} double paths in: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error);
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Files modified: ${filesModified}`);
console.log(`✅ Total replacements: ${totalReplacements}`);
console.log(`🚀 Double asset paths fixed!`);