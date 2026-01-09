#!/usr/bin/env tsx

import { readFile, writeFile } from 'fs/promises';

async function removeAssemblyServices() {
  console.log('🗑️  Starting removal of assembly-related services...\n');
  
  try {
    // Read the servicePageData file
    const filePath = 'src/data/servicePageData.ts';
    const content = await readFile(filePath, 'utf-8');
    
    console.log('📄 Reading servicePageData.ts...');
    
    // Find the start and end of IKEA services section
    const ikeaStartComment = '// IKEA Furniture Assembly Services';
    const startIndex = content.indexOf(ikeaStartComment);
    
    if (startIndex === -1) {
      console.log('❌ Could not find IKEA services section');
      return;
    }
    
    // Find the end of the IKEA services (look for the next service that's not IKEA)
    // We'll look for the shoe-rack-polish service which comes after IKEA services
    const nextServiceStart = content.indexOf('id: \'shoe-rack-polish\'');
    
    if (nextServiceStart === -1) {
      console.log('❌ Could not find end of IKEA services section');
      return;
    }
    
    // Find the start of the shoe-rack-polish object (go back to find the opening brace)
    let endIndex = nextServiceStart;
    while (endIndex > startIndex && content[endIndex] !== '{') {
      endIndex--;
    }
    
    // Go back to find the comma before this object
    while (endIndex > startIndex && content[endIndex] !== ',') {
      endIndex--;
    }
    
    console.log(`📍 Found IKEA services section from position ${startIndex} to ${endIndex}`);
    
    // Remove the IKEA services section
    const beforeIkea = content.substring(0, startIndex);
    const afterIkea = content.substring(endIndex + 1);
    
    const newContent = beforeIkea + afterIkea;
    
    // Also need to remove 'ikea' from ServiceCategory type
    const updatedContent = newContent.replace(
      /export type ServiceCategory = '[^']*';/,
      "export type ServiceCategory = 'polish' | 'sofa' | 'product';"
    );
    
    // Write the updated content back
    await writeFile(filePath, updatedContent, 'utf-8');
    
    console.log('✅ Successfully removed all IKEA assembly services from servicePageData.ts');
    console.log('✅ Updated ServiceCategory type to remove "ikea"');
    
    // Count how many services were removed
    const removedServices = (content.match(/id: 'ikea-[^']*'/g) || []).length;
    console.log(`📊 Removed ${removedServices} IKEA assembly services`);
    
    return { success: true, removedCount: removedServices };
    
  } catch (error) {
    console.error('❌ Error removing assembly services:', error);
    return { success: false, error };
  }
}

// Run the removal
removeAssemblyServices()
  .then(result => {
    if (result?.success) {
      console.log('\n🎉 Assembly services removal completed successfully!');
      console.log('\n📋 NEXT STEPS:');
      console.log('   1. The IkeaAssembly.tsx page file still exists but is no longer used');
      console.log('   2. All IKEA services have been removed from the data');
      console.log('   3. The Products tab now shows "Coming Soon" instead');
      process.exit(0);
    } else {
      console.log('\n⚠️  Assembly services removal failed.');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('💥 Fatal error during assembly services removal:', error);
    process.exit(1);
  });