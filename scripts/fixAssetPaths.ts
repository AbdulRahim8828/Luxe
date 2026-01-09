#!/usr/bin/env tsx

import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { join } from 'path';

async function getAllFiles(dir: string, extensions: string[] = []): Promise<string[]> {
  const files: string[] = [];
  
  async function scan(currentDir: string) {
    try {
      const items = await readdir(currentDir);
      
      for (const item of items) {
        const fullPath = join(currentDir, item);
        const stats = await stat(fullPath);
        
        if (stats.isDirectory()) {
          if (!item.startsWith('.') && item !== 'node_modules' && item !== 'dist' && item !== 'Luxe assets') {
            await scan(fullPath);
          }
        } else if (extensions.length === 0 || extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(`Could not read directory: ${currentDir}`);
    }
  }
  
  await scan(dir);
  return files;
}

async function fixAssetPaths() {
  console.log('Fixing asset paths from /assets/ to /Luxe assets/...\n');
  
  // Get all code files
  const codeFiles = await getAllFiles('.', ['.tsx', '.ts', '.js', '.jsx', '.json', '.md']);
  const filteredCodeFiles = codeFiles.filter(file => 
    !file.includes('node_modules') && 
    !file.includes('.git') && 
    !file.includes('dist') &&
    !file.includes('scripts/fixAssetPaths.ts')
  );
  
  console.log(`Processing ${filteredCodeFiles.length} files...\n`);
  
  let totalReplacements = 0;
  let filesModified = 0;
  
  for (const file of filteredCodeFiles) {
    try {
      const content = await readFile(file, 'utf-8');
      
      // Simple replacement: /assets/ -> /Luxe assets/
      const newContent = content.replace(/\/assets\//g, '/Luxe assets/');
      
      if (newContent !== content) {
        const replacements = (content.match(/\/assets\//g) || []).length;
        await writeFile(file, newContent, 'utf-8');
        console.log(`✅ ${file}: ${replacements} replacements`);
        filesModified++;
        totalReplacements += replacements;
      }
      
    } catch (error) {
      console.warn(`Could not process file: ${file}`);
    }
  }
  
  console.log(`\nSUMMARY:`);
  console.log(`Files processed: ${filteredCodeFiles.length}`);
  console.log(`Files modified: ${filesModified}`);
  console.log(`Total replacements: ${totalReplacements}`);
  console.log(`\nAsset path fixing complete!`);
}

// Run the fix
fixAssetPaths().catch(console.error);