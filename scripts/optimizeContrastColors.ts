#!/usr/bin/env npx tsx

/**
 * Optimize Contrast Colors Script
 * Systematically finds the best luxury colors that meet WCAG AA standards
 */

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

// Convert HSL to Hex
function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// Find optimal gold color that works with both white and grey text
function findOptimalGoldColor(): { accent: string; secondary: string } {
  const whiteText = '#F5F5F5';
  const greyText = '#5A5A5A';
  const blackText = '#0E0E0E';
  
  let bestAccent = '#A67C00';
  let bestSecondary = '#B8A052';
  
  // Test different gold hues and saturations
  for (let hue = 35; hue <= 55; hue += 2) {
    for (let sat = 80; sat <= 100; sat += 5) {
      for (let light = 20; light <= 45; light += 2) {
        const goldColor = hslToHex(hue, sat, light);
        
        // Check if this gold works with white text (for accent)
        const whiteOnGoldRatio = getContrastRatio(whiteText, goldColor);
        if (whiteOnGoldRatio >= 4.5) {
          bestAccent = goldColor;
        }
        
        // Check if this gold works with both black and grey text (for secondary)
        const blackOnGoldRatio = getContrastRatio(blackText, goldColor);
        const greyOnGoldRatio = getContrastRatio(greyText, goldColor);
        
        if (blackOnGoldRatio >= 4.5 && greyOnGoldRatio >= 4.5) {
          bestSecondary = goldColor;
        }
      }
    }
  }
  
  return { accent: bestAccent, secondary: bestSecondary };
}

async function optimizeContrastColors() {
  console.log('🎨 Optimizing Luxe Brand Colors for WCAG AA Compliance');
  console.log('====================================================\n');

  const fixedColors = {
    primary: '#0E0E0E',      // Jet Black (perfect)
    textPrimary: '#F5F5F5',  // Ivory White (perfect)
    textSecondary: '#4A4A4A' // Darker grey for better contrast
  };

  console.log('🔍 Finding optimal gold colors...\n');
  
  // Find the best gold colors
  const optimalGolds = findOptimalGoldColor();
  
  // Test all combinations
  const testCombinations = [
    { name: 'Ivory White on Jet Black', fg: fixedColors.textPrimary, bg: fixedColors.primary },
    { name: 'Warm Grey on Ivory White', fg: fixedColors.textSecondary, bg: fixedColors.textPrimary },
    { name: 'Jet Black on Ivory White', fg: fixedColors.primary, bg: fixedColors.textPrimary },
    { name: 'Royal Gold on Jet Black', fg: optimalGolds.accent, bg: fixedColors.primary },
    { name: 'Champagne Gold on Jet Black', fg: optimalGolds.secondary, bg: fixedColors.primary },
    { name: 'Ivory White on Royal Gold', fg: fixedColors.textPrimary, bg: optimalGolds.accent },
    { name: 'Jet Black on Champagne Gold', fg: fixedColors.primary, bg: optimalGolds.secondary },
    { name: 'Warm Grey on Champagne Gold', fg: fixedColors.textSecondary, bg: optimalGolds.secondary }
  ];

  console.log('📊 Testing All Color Combinations:');
  console.log('==================================');
  
  let allPassing = true;
  
  testCombinations.forEach(combo => {
    const ratio = getContrastRatio(combo.fg, combo.bg);
    const passes = ratio >= 4.5;
    if (!passes) allPassing = false;
    
    console.log(`${combo.name}: ${ratio.toFixed(2)}:1 ${passes ? '✅' : '❌'}`);
  });

  console.log('\n🎯 Final Optimized Colors:');
  console.log('==========================');
  console.log(`Primary (Jet Black): ${fixedColors.primary}`);
  console.log(`Accent (Royal Gold): ${optimalGolds.accent}`);
  console.log(`Secondary (Champagne Gold): ${optimalGolds.secondary}`);
  console.log(`Text Primary (Ivory White): ${fixedColors.textPrimary}`);
  console.log(`Text Secondary (Warm Grey): ${fixedColors.textSecondary}`);

  console.log('\n📝 Updated Brand Configuration:');
  console.log('```typescript');
  console.log('export const brandSystem: BrandSystem = {');
  console.log('  colors: {');
  console.log(`    primary: '${fixedColors.primary}',      // Jet Black`);
  console.log(`    accent: '${optimalGolds.accent}',       // Royal Gold (WCAG AA)`);
  console.log(`    secondary: '${optimalGolds.secondary}',    // Champagne Gold (WCAG AA)`);
  console.log(`    textPrimary: '${fixedColors.textPrimary}',  // Ivory White`);
  console.log(`    textSecondary: '${fixedColors.textSecondary}', // Warm Grey (WCAG AA)`);
  console.log('  },');
  console.log('  // ... rest of configuration');
  console.log('};');
  console.log('```');

  if (allPassing) {
    console.log('\n🎉 SUCCESS: All color combinations now meet WCAG AA standards!');
    console.log('✨ Luxury aesthetic maintained with full accessibility compliance');
  } else {
    console.log('\n⚠️  Some combinations may still need manual adjustment');
  }

  return {
    primary: fixedColors.primary,
    accent: optimalGolds.accent,
    secondary: optimalGolds.secondary,
    textPrimary: fixedColors.textPrimary,
    textSecondary: fixedColors.textSecondary
  };
}

// Run optimization
optimizeContrastColors().then(colors => {
  console.log('\n🔧 Apply these colors to src/config/brand.ts');
}).catch(console.error);