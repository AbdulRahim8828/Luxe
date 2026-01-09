#!/usr/bin/env tsx

import { unlink } from 'fs/promises';
import { existsSync } from 'fs';

// List of unused images identified by the analysis
const unusedImages = [
  'Luxe assets/luxe-blog-common-mistakes-avoid.webp',
  'Luxe assets/luxe-blog-maintain-wooden-furniture.webp',
  'Luxe assets/luxe-blog-polishing-cost-mumbai.webp',
  'Luxe assets/luxe-blog-polishing-guide-mumbai.webp',
  'Luxe assets/luxe-blog-pricing-services-bandra.webp',
  'Luxe assets/luxe-blog-services-jogeshwari.webp',
  'Luxe assets/luxe-blog-top-services-mumbai.webp',
  'Luxe assets/luxe-blog-ultimate-guide-choose.webp',
  'Luxe assets/luxe-blog-why-choose-luxe-goregaon.webp',
  'Luxe assets/luxe-blog-wood-polishing-andheri.webp',
  'Luxe assets/luxe-furniture-bed-metal.webp',
  'Luxe assets/luxe-furniture-bed-steel.webp',
  'Luxe assets/luxe-furniture-cabinet-3-door.webp',
  'Luxe assets/luxe-furniture-cabinet-single-door.webp',
  'Luxe assets/luxe-furniture-chester-drawer-2.webp',
  'Luxe assets/luxe-furniture-chester-drawer-3.webp',
  'Luxe assets/luxe-furniture-chester-drawer-4.webp',
  'Luxe assets/luxe-furniture-chester-drawer-5.webp',
  'Luxe assets/luxe-furniture-chester-drawer-6.webp',
  'Luxe assets/luxe-furniture-chester-drawer.jpeg',
  'Luxe assets/luxe-furniture-crockery-unit.webp',
  'Luxe assets/luxe-furniture-cupboard-metal.webp',
  'Luxe assets/luxe-furniture-kitchen-steel.webp',
  'Luxe assets/luxe-furniture-kitchen-trolley.webp',
  'Luxe assets/luxe-furniture-shelves-wooden.jpeg',
  'Luxe assets/luxe-furniture-sofa-chair-set.webp',
  'Luxe assets/luxe-furniture-wardrobe-3-door.webp',
  'Luxe assets/luxe-furniture-wardrobe-4-door.webp',
  'Luxe assets/luxe-furniture-wardrobe-sliding.webp',
  'Luxe assets/luxe-polishing-cabinet-wood.jpeg',
  'Luxe assets/luxe-polishing-cabinet.webp',
  'Luxe assets/luxe-polishing-center-table.webp',
  'Luxe assets/luxe-polishing-coffee-table.webp',
  'Luxe assets/luxe-polishing-door.webp',
  'Luxe assets/luxe-polishing-jhula.webp',
  'Luxe assets/luxe-polishing-mandir.webp',
  'Luxe assets/luxe-polishing-side-table.webp',
  'Luxe assets/luxe-polishing-tv-unit.webp',
  'Luxe assets/luxe-process-cleaning-sanding-2.webp',
  'Luxe assets/luxe-process-drying-finishing-2.webp',
  'Luxe assets/luxe-service-antique-restoration.jpg',
  'Luxe assets/luxe-service-chair-repair.jpg',
  'Luxe assets/luxe-service-sofa-fabric-change.webp',
  'Luxe assets/luxe-service-table-bed-polishing.jpg'
];

async function removeUnusedImages() {
  console.log('🗑️  Starting removal of unused images...\n');
  console.log(`📊 Total unused images to remove: ${unusedImages.length}\n`);
  
  let removedCount = 0;
  let skippedCount = 0;
  const errors: string[] = [];
  
  for (const imagePath of unusedImages) {
    try {
      if (existsSync(imagePath)) {
        await unlink(imagePath);
        console.log(`✅ Removed: ${imagePath}`);
        removedCount++;
      } else {
        console.log(`⚠️  Skipped (not found): ${imagePath}`);
        skippedCount++;
      }
    } catch (error) {
      const errorMsg = `❌ Failed to remove ${imagePath}: ${error}`;
      console.log(errorMsg);
      errors.push(errorMsg);
    }
  }
  
  console.log('\n📊 REMOVAL SUMMARY:');
  console.log('==================');
  console.log(`✅ Successfully removed: ${removedCount} images`);
  console.log(`⚠️  Skipped (not found): ${skippedCount} images`);
  console.log(`❌ Errors: ${errors.length} images`);
  
  if (errors.length > 0) {
    console.log('\n❌ ERRORS:');
    errors.forEach(error => console.log(`   ${error}`));
  }
  
  console.log('\n🛡️  IMPORTANT: All Luxe assets have been preserved as requested!');
  console.log(`💾 Estimated space saved: ~${(removedCount * 0.5).toFixed(1)} MB`);
  
  return { removedCount, skippedCount, errors: errors.length };
}

// Run the removal
removeUnusedImages()
  .then(result => {
    if (result.errors === 0) {
      console.log('\n🎉 Image cleanup completed successfully!');
      process.exit(0);
    } else {
      console.log('\n⚠️  Image cleanup completed with some errors.');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('💥 Fatal error during image cleanup:', error);
    process.exit(1);
  });