#!/usr/bin/env npx tsx

/**
 * Fix Text Contrast Issues Script
 * Automatically adjusts colors to meet WCAG AA standards while maintaining luxury aesthetics
 */

import { validateLuxuryColorContrast } from '../src/utils/contrastValidation';

// Function to darken a color by a percentage
function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Function to lighten a color by a percentage
function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Calculate contrast ratio
function getContrastRatio(color1: string, color2: string): number {
  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function getRelativeLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Find optimal color adjustment
function findOptimalColor(baseColor: string, targetBackground: string, targetRatio: number = 4.5): string {
  let adjustedColor = baseColor;
  let currentRatio = getContrastRatio(adjustedColor, targetBackground);
  
  // Try darkening first
  for (let i = 5; i <= 50; i += 5) {
    const darkerColor = darkenColor(baseColor, i);
    const ratio = getContrastRatio(darkerColor, targetBackground);
    if (ratio >= targetRatio) {
      return darkerColor;
    }
  }
  
  // Try lightening if darkening didn't work
  for (let i = 5; i <= 50; i += 5) {
    const lighterColor = lightenColor(baseColor, i);
    const ratio = getContrastRatio(lighterColor, targetBackground);
    if (ratio >= targetRatio) {
      return lighterColor;
    }
  }
  
  return adjustedColor;
}

async function fixContrastIssues() {
  console.log('🔧 Fixing Text Contrast Issues for Luxe Brand');
  console.log('==============================================\n');

  // Current problematic colors
  const originalColors = {
    textSecondary: '#9A9A9A',  // Warm Grey
    accent: '#C9A24D',         // Royal Gold  
    secondary: '#E6D3A3',      // Champagne Gold
    textPrimary: '#F5F5F5',    // Ivory White
    primary: '#0E0E0E'         // Jet Black
  };

  console.log('🎨 Original Colors:');
  console.log(`   Warm Grey: ${originalColors.textSecondary}`);
  console.log(`   Royal Gold: ${originalColors.accent}`);
  console.log(`   Champagne Gold: ${originalColors.secondary}\n`);

  // Calculate improved colors
  const improvedColors = {
    // Fix Warm Grey on Ivory White (needs 4.5:1, currently 2.58:1)
    textSecondary: findOptimalColor(originalColors.textSecondary, originalColors.textPrimary, 4.5),
    
    // Fix Royal Gold to work better with Ivory White text (needs 4.5:1, currently 2.2:1)
    accent: findOptimalColor(originalColors.accent, originalColors.textPrimary, 4.5),
    
    // Fix Champagne Gold to work with Warm Grey text
    secondary: findOptimalColor(originalColors.secondary, originalColors.textSecondary, 4.5)
  };

  console.log('✨ Improved Colors:');
  console.log(`   Warm Grey: ${originalColors.textSecondary} → ${improvedColors.textSecondary}`);
  console.log(`   Royal Gold: ${originalColors.accent} → ${improvedColors.accent}`);
  console.log(`   Champagne Gold: ${originalColors.secondary} → ${improvedColors.secondary}\n`);

  // Validate new combinations
  console.log('📊 New Contrast Ratios:');
  
  const newRatios = {
    warmGreyOnIvory: getContrastRatio(improvedColors.textSecondary, originalColors.textPrimary),
    ivoryOnRoyalGold: getContrastRatio(originalColors.textPrimary, improvedColors.accent),
    warmGreyOnChampagne: getContrastRatio(improvedColors.textSecondary, improvedColors.secondary)
  };

  console.log(`   Warm Grey on Ivory White: ${newRatios.warmGreyOnIvory.toFixed(2)}:1 ${newRatios.warmGreyOnIvory >= 4.5 ? '✅' : '❌'}`);
  console.log(`   Ivory White on Royal Gold: ${newRatios.ivoryOnRoyalGold.toFixed(2)}:1 ${newRatios.ivoryOnRoyalGold >= 4.5 ? '✅' : '❌'}`);
  console.log(`   Warm Grey on Champagne Gold: ${newRatios.warmGreyOnChampagne.toFixed(2)}:1 ${newRatios.warmGreyOnChampagne >= 4.5 ? '✅' : '❌'}\n`);

  // Provide CSS variables update
  console.log('🎯 Updated CSS Variables:');
  console.log('```css');
  console.log(':root {');
  console.log(`  --luxe-text-secondary: ${improvedColors.textSecondary}; /* Darker Warm Grey */`);
  console.log(`  --luxe-accent: ${improvedColors.accent}; /* Darker Royal Gold */`);
  console.log(`  --luxe-secondary: ${improvedColors.secondary}; /* Adjusted Champagne Gold */`);
  console.log('}');
  console.log('```\n');

  // Provide brand.ts update
  console.log('📝 Brand Configuration Update:');
  console.log('```typescript');
  console.log('export const brandSystem: BrandSystem = {');
  console.log('  colors: {');
  console.log('    primary: \'#0E0E0E\',      // Jet Black');
  console.log(`    accent: '${improvedColors.accent}',       // Darker Royal Gold (WCAG AA compliant)`);
  console.log(`    secondary: '${improvedColors.secondary}',    // Adjusted Champagne Gold (WCAG AA compliant)`);
  console.log('    textPrimary: \'#F5F5F5\',  // Ivory White');
  console.log(`    textSecondary: '${improvedColors.textSecondary}', // Darker Warm Grey (WCAG AA compliant)`);
  console.log('  },');
  console.log('  // ... rest of configuration');
  console.log('};');
  console.log('```\n');

  const allPassing = Object.values(newRatios).every(ratio => ratio >= 4.5);
  
  if (allPassing) {
    console.log('🎉 All contrast issues have been resolved!');
    console.log('✅ All color combinations now meet WCAG AA standards');
    console.log('💎 Luxury aesthetic maintained with improved accessibility');
  } else {
    console.log('⚠️  Some combinations may need manual adjustment');
    console.log('💡 Consider using these colors only for decorative elements');
  }
}

// Run the fix
fixContrastIssues().catch(console.error);