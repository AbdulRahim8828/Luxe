#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

interface AssetMapping {
  oldName: string;
  newName: string;
  category: string;
  description: string;
}

// Define asset categories and their mappings
const assetMappings: AssetMapping[] = [
  // Furniture pieces
  { oldName: '2-Chester-Drawer.webp', newName: 'luxe-furniture-chester-drawer-2.webp', category: 'furniture', description: 'chester-drawer-2' },
  { oldName: '3-Chester-Drawer.webp', newName: 'luxe-furniture-chester-drawer-3.webp', category: 'furniture', description: 'chester-drawer-3' },
  { oldName: '4-Chester-Drawer.webp', newName: 'luxe-furniture-chester-drawer-4.webp', category: 'furniture', description: 'chester-drawer-4' },
  { oldName: '5-Chester-Drawer.webp', newName: 'luxe-furniture-chester-drawer-5.webp', category: 'furniture', description: 'chester-drawer-5' },
  { oldName: '6-Chester-Drawer.webp', newName: 'luxe-furniture-chester-drawer-6.webp', category: 'furniture', description: 'chester-drawer-6' },
  { oldName: 'Chester Drawer.jpeg', newName: 'luxe-furniture-chester-drawer.jpeg', category: 'furniture', description: 'chester-drawer' },
  
  { oldName: '3-Door-Cabinet.webp', newName: 'luxe-furniture-cabinet-3-door.webp', category: 'furniture', description: 'cabinet-3-door' },
  { oldName: 'Single-Door-cabinet.webp', newName: 'luxe-furniture-cabinet-single-door.webp', category: 'furniture', description: 'cabinet-single-door' },
  { oldName: 'Cabinet-polish.webp', newName: 'luxe-polishing-cabinet.webp', category: 'polishing', description: 'cabinet' },
  { oldName: 'Cabinet Wood Polish.jpeg', newName: 'luxe-polishing-cabinet-wood.jpeg', category: 'polishing', description: 'cabinet-wood' },
  
  { oldName: '3-Door-wardrobe.webp', newName: 'luxe-furniture-wardrobe-3-door.webp', category: 'furniture', description: 'wardrobe-3-door' },
  { oldName: '4-Door-Wardrobe.webp', newName: 'luxe-furniture-wardrobe-4-door.webp', category: 'furniture', description: 'wardrobe-4-door' },
  { oldName: 'Sliding-wardrobe.webp', newName: 'luxe-furniture-wardrobe-sliding.webp', category: 'furniture', description: 'wardrobe-sliding' },
  { oldName: 'Wardrobe-polish.webp', newName: 'luxe-polishing-wardrobe.webp', category: 'polishing', description: 'wardrobe' },
  
  { oldName: '3-Shelves.webp', newName: 'luxe-furniture-shelves-3.webp', category: 'furniture', description: 'shelves-3' },
  { oldName: '5-Shelves.webp', newName: 'luxe-furniture-shelves-5.webp', category: 'furniture', description: 'shelves-5' },
  { oldName: '7-Shelves.webp', newName: 'luxe-furniture-shelves-7.webp', category: 'furniture', description: 'shelves-7' },
  { oldName: 'Wooden Shelves.jpeg', newName: 'luxe-furniture-shelves-wooden.jpeg', category: 'furniture', description: 'shelves-wooden' },
  { oldName: 'Wooden-Shelves.webp', newName: 'luxe-furniture-shelves-wooden.webp', category: 'furniture', description: 'shelves-wooden' },
  
  // Polishing services
  { oldName: 'Bed-polish.webp', newName: 'luxe-polishing-bed.webp', category: 'polishing', description: 'bed' },
  { oldName: 'Dining-polish.webp', newName: 'luxe-polishing-dining.webp', category: 'polishing', description: 'dining' },
  { oldName: 'Door-polish.webp', newName: 'luxe-polishing-door.webp', category: 'polishing', description: 'door' },
  { oldName: 'Center-table-polish.webp', newName: 'luxe-polishing-center-table.webp', category: 'polishing', description: 'center-table' },
  { oldName: 'Coffe-table-polish.webp', newName: 'luxe-polishing-coffee-table.webp', category: 'polishing', description: 'coffee-table' },
  { oldName: 'Study-table-polish.webp', newName: 'luxe-polishing-study-table.webp', category: 'polishing', description: 'study-table' },
  { oldName: 'TV-unit-polish.webp', newName: 'luxe-polishing-tv-unit.webp', category: 'polishing', description: 'tv-unit' },
  { oldName: 'Mandir-polish.webp', newName: 'luxe-polishing-mandir.webp', category: 'polishing', description: 'mandir' },
  { oldName: 'Jhula-Polish.webp', newName: 'luxe-polishing-jhula.webp', category: 'polishing', description: 'jhula' },
  { oldName: 'sofa-polish.webp', newName: 'luxe-polishing-sofa.webp', category: 'polishing', description: 'sofa' },
  { oldName: 'side-table.webp', newName: 'luxe-polishing-side-table.webp', category: 'polishing', description: 'side-table' },
  
  // Process images
  { oldName: 'consultation-booking.webp', newName: 'luxe-process-consultation-booking.webp', category: 'process', description: 'consultation-booking' },
  { oldName: 'Cleaning & Sanding.webp', newName: 'luxe-process-cleaning-sanding.webp', category: 'process', description: 'cleaning-sanding' },
  { oldName: 'Cleaning & Sanding (2).webp', newName: 'luxe-process-cleaning-sanding-2.webp', category: 'process', description: 'cleaning-sanding-2' },
  { oldName: 'select-wood-polish-shade.webp', newName: 'luxe-process-shade-selection.webp', category: 'process', description: 'shade-selection' },
  { oldName: 'filling-gaps-polish-application.webp', newName: 'luxe-process-gap-filling-application.webp', category: 'process', description: 'gap-filling-application' },
  { oldName: 'drying-finishing.webp', newName: 'luxe-process-drying-finishing.webp', category: 'process', description: 'drying-finishing' },
  { oldName: 'drying-finishing (1).webp', newName: 'luxe-process-drying-finishing-2.webp', category: 'process', description: 'drying-finishing-2' },
  
  // Specialty furniture
  { oldName: 'Metal-Bed.webp', newName: 'luxe-furniture-bed-metal.webp', category: 'furniture', description: 'bed-metal' },
  { oldName: 'Steel-Bed.webp', newName: 'luxe-furniture-bed-steel.webp', category: 'furniture', description: 'bed-steel' },
  { oldName: 'Metal-cupboard.webp', newName: 'luxe-furniture-cupboard-metal.webp', category: 'furniture', description: 'cupboard-metal' },
  { oldName: 'Kitchen-Steel.webp', newName: 'luxe-furniture-kitchen-steel.webp', category: 'furniture', description: 'kitchen-steel' },
  { oldName: 'Kitchen-trolly.webp', newName: 'luxe-furniture-kitchen-trolley.webp', category: 'furniture', description: 'kitchen-trolley' },
  { oldName: 'Crockery.webp', newName: 'luxe-furniture-crockery-unit.webp', category: 'furniture', description: 'crockery-unit' },
  { oldName: 'Deco.webp', newName: 'luxe-furniture-decorative.webp', category: 'furniture', description: 'decorative' },
  
  // Sofa and chairs
  { oldName: 'Sofa And chair.webp', newName: 'luxe-furniture-sofa-chair-set.webp', category: 'furniture', description: 'sofa-chair-set' },
  { oldName: 'Sofa_Fabric_Change_20.webp', newName: 'luxe-service-sofa-fabric-change.webp', category: 'service', description: 'sofa-fabric-change' },
  
  // Specialty services
  { oldName: 'Antique Restoration.jpg', newName: 'luxe-service-antique-restoration.jpg', category: 'service', description: 'antique-restoration' },
  { oldName: 'Chair Repair.jpg', newName: 'luxe-service-chair-repair.jpg', category: 'service', description: 'chair-repair' },
  { oldName: 'Table & Bed Polishing.jpg', newName: 'luxe-service-table-bed-polishing.jpg', category: 'service', description: 'table-bed-polishing' },
  { oldName: 'Floor-polishing.jpeg', newName: 'luxe-service-floor-polishing.jpeg', category: 'service', description: 'floor-polishing' },
  
  // Polish types
  { oldName: 'PU.webp', newName: 'luxe-polish-pu-finish.webp', category: 'polish', description: 'pu-finish' },
  { oldName: 'wooden furniture .webp', newName: 'luxe-furniture-wooden-collection.webp', category: 'furniture', description: 'wooden-collection' },
  
  // Blog and marketing images
  { oldName: '5 Common Mistakes To Avoid.webp', newName: 'luxe-blog-common-mistakes-avoid.webp', category: 'blog', description: 'common-mistakes-avoid' },
  { oldName: 'A1 Furniture Polishing Price And Service In Bandra.webp', newName: 'luxe-blog-pricing-services-bandra.webp', category: 'blog', description: 'pricing-services-bandra' },
  { oldName: 'Best Wood Polishing In Andheri.webp', newName: 'luxe-blog-wood-polishing-andheri.webp', category: 'blog', description: 'wood-polishing-andheri' },
  { oldName: 'Furniture Polishing Services In Jogeshwari.webp', newName: 'luxe-blog-services-jogeshwari.webp', category: 'blog', description: 'services-jogeshwari' },
  { oldName: 'Furntiure Polishing Guide For Mumbai.webp', newName: 'luxe-blog-polishing-guide-mumbai.webp', category: 'blog', description: 'polishing-guide-mumbai' },
  { oldName: 'How To Maintain Wooden Furniture At Home.webp', newName: 'luxe-blog-maintain-wooden-furniture.webp', category: 'blog', description: 'maintain-wooden-furniture' },
  { oldName: 'Top Furniture Polish Services in Mumbai.webp', newName: 'luxe-blog-top-services-mumbai.webp', category: 'blog', description: 'top-services-mumbai' },
  { oldName: 'Ultimate Guide to choose.webp', newName: 'luxe-blog-ultimate-guide-choose.webp', category: 'blog', description: 'ultimate-guide-choose' },
  { oldName: 'Why Choose A1 Furniture Polish for Wooden Furniture in Goregaon.webp', newName: 'luxe-blog-why-choose-luxe-goregaon.webp', category: 'blog', description: 'why-choose-luxe-goregaon' },
  { oldName: 'Wood Polishing Cost in Mumbai.webp', newName: 'luxe-blog-polishing-cost-mumbai.webp', category: 'blog', description: 'polishing-cost-mumbai' },
  
  // Brand assets
  { oldName: 'A1_favicon.svg', newName: 'luxe-brand-favicon.svg', category: 'brand', description: 'favicon' },
  
  // JavaScript files (blog assets)
  { oldName: 'a1-furniture-polish-pricing-services-bandra.js', newName: 'luxe-blog-pricing-services-bandra.js', category: 'blog', description: 'pricing-services-bandra' },
  { oldName: 'best-wood-polishing-in-andheri.js', newName: 'luxe-blog-wood-polishing-andheri.js', category: 'blog', description: 'wood-polishing-andheri' },
  { oldName: 'choosing-the-right-wood-polish.js', newName: 'luxe-blog-choosing-wood-polish.js', category: 'blog', description: 'choosing-wood-polish' },
  { oldName: 'common-polishing-mistakes.js', newName: 'luxe-blog-common-polishing-mistakes.js', category: 'blog', description: 'common-polishing-mistakes' },
  { oldName: 'how-to-maintain-wooden-furniture.js', newName: 'luxe-blog-maintain-wooden-furniture.js', category: 'blog', description: 'maintain-wooden-furniture' },
  { oldName: 'professional-furniture-polishing-services-in-jogeshwari.js', newName: 'luxe-blog-professional-services-jogeshwari.js', category: 'blog', description: 'professional-services-jogeshwari' },
  { oldName: 'step-by-step-furniture-polishing-guide-for-mumbai-homes.js', newName: 'luxe-blog-step-by-step-guide-mumbai.js', category: 'blog', description: 'step-by-step-guide-mumbai' },
  { oldName: 'top-furniture-polish-services-mumbai.js', newName: 'luxe-blog-top-services-mumbai.js', category: 'blog', description: 'top-services-mumbai' },
  { oldName: 'why-choose-a1-furniture-polish-goregaon.js', newName: 'luxe-blog-why-choose-luxe-goregaon.js', category: 'blog', description: 'why-choose-luxe-goregaon' },
  { oldName: 'wood-polishing-cost-mumbai.js', newName: 'luxe-blog-polishing-cost-mumbai.js', category: 'blog', description: 'polishing-cost-mumbai' }
];

// Function to rename files in a directory
async function renameAssetsInDirectory(dirPath: string): Promise<void> {
  console.log(`\n🔄 Processing directory: ${dirPath}`);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory ${dirPath} does not exist, skipping...`);
    return;
  }

  const files = fs.readdirSync(dirPath);
  let renamedCount = 0;

  for (const mapping of assetMappings) {
    const oldPath = path.join(dirPath, mapping.oldName);
    const newPath = path.join(dirPath, mapping.newName);

    if (fs.existsSync(oldPath)) {
      try {
        fs.renameSync(oldPath, newPath);
        console.log(`✅ Renamed: ${mapping.oldName} → ${mapping.newName}`);
        renamedCount++;
      } catch (error) {
        console.error(`❌ Failed to rename ${mapping.oldName}:`, error);
      }
    }
  }

  console.log(`📊 Renamed ${renamedCount} files in ${dirPath}`);
}

// Function to update file references in code
async function updateFileReferences(): Promise<void> {
  console.log('\n🔄 Updating file references in code...');
  
  const filesToUpdate = [
    'src/data/servicePageData.ts',
    'src/data/services.ts',
    'src/data/commonPageData.ts'
  ];

  for (const filePath of filesToUpdate) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let updatedCount = 0;

        for (const mapping of assetMappings) {
          const oldRef = `/assets/${mapping.oldName}`;
          const newRef = `/assets/${mapping.newName}`;
          
          if (content.includes(oldRef)) {
            content = content.replace(new RegExp(oldRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newRef);
            updatedCount++;
          }
        }

        if (updatedCount > 0) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`✅ Updated ${updatedCount} references in ${filePath}`);
        } else {
          console.log(`ℹ️  No references to update in ${filePath}`);
        }
      } catch (error) {
        console.error(`❌ Failed to update ${filePath}:`, error);
      }
    } else {
      console.log(`⚠️  File ${filePath} does not exist, skipping...`);
    }
  }
}

// Function to generate asset mapping report
function generateAssetReport(): void {
  console.log('\n📋 Asset Renaming Report');
  console.log('========================');
  
  const categories = [...new Set(assetMappings.map(m => m.category))];
  
  for (const category of categories) {
    const categoryMappings = assetMappings.filter(m => m.category === category);
    console.log(`\n📁 ${category.toUpperCase()} (${categoryMappings.length} files):`);
    
    for (const mapping of categoryMappings) {
      console.log(`   ${mapping.oldName} → ${mapping.newName}`);
    }
  }
  
  console.log(`\n📊 Total files to rename: ${assetMappings.length}`);
}

// Main execution
async function main(): Promise<void> {
  console.log('🚀 Starting Luxe Asset Renaming Process');
  console.log('=======================================');
  
  // Generate report first
  generateAssetReport();
  
  // Rename assets in main assets directory
  await renameAssetsInDirectory('assets');
  
  // Rename assets in public/assets directory
  await renameAssetsInDirectory('public/assets');
  
  // Update file references in code
  await updateFileReferences();
  
  console.log('\n✨ Luxe Asset Renaming Process Complete!');
  console.log('========================================');
  console.log('All assets have been renamed to follow the "luxe-[category]-[description]" convention.');
  console.log('File references in code have been updated accordingly.');
}

// Run the script
main().catch(console.error);

export { assetMappings, renameAssetsInDirectory, updateFileReferences };