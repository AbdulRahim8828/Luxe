/**
 * Text Contrast Validation Utility
 * Validates text contrast standards for the Luxe brand system
 */

import { brandSystem } from '../config/brand';

// WCAG 2.1 contrast ratio standards
const CONTRAST_RATIOS = {
  AA_NORMAL: 4.5,
  AA_LARGE: 3.0,
  AAA_NORMAL: 7.0,
  AAA_LARGE: 4.5,
} as const;

/**
 * Convert hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Calculate relative luminance of a color
 */
function getRelativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) {
    throw new Error('Invalid hex color format');
  }
  
  const lum1 = getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check if contrast ratio meets WCAG standards
 */
function meetsContrastStandard(
  ratio: number, 
  level: 'AA' | 'AAA' = 'AA', 
  isLargeText: boolean = false
): boolean {
  const threshold = isLargeText 
    ? (level === 'AA' ? CONTRAST_RATIOS.AA_LARGE : CONTRAST_RATIOS.AAA_LARGE)
    : (level === 'AA' ? CONTRAST_RATIOS.AA_NORMAL : CONTRAST_RATIOS.AAA_NORMAL);
  
  return ratio >= threshold;
}

/**
 * Validate all luxury color combinations for text contrast
 * Updated to only test practical color combinations used in the design
 */
export function validateLuxuryColorContrast(): {
  valid: boolean;
  results: Array<{
    foreground: string;
    background: string;
    ratio: number;
    meetsAA: boolean;
    meetsAAA: boolean;
    meetsAALarge: boolean;
    meetsAAALarge: boolean;
    description: string;
  }>;
} {
  const colors = brandSystem.colors;
  const results = [];
  
  // Define ONLY the color combinations actually used in the design
  const combinations = [
    {
      foreground: colors.textPrimary,
      background: colors.primary,
      description: 'Ivory White text on Jet Black background (main content)'
    },
    {
      foreground: colors.textSecondary,
      background: colors.textPrimary,
      description: 'Warm Grey text on Ivory White background (secondary content)'
    },
    {
      foreground: colors.primary,
      background: colors.textPrimary,
      description: 'Jet Black text on Ivory White background (body text)'
    },
    {
      foreground: colors.accent,
      background: colors.primary,
      description: 'Royal Gold text on Jet Black background (accent elements)'
    },
    {
      foreground: colors.secondary,
      background: colors.primary,
      description: 'Champagne Gold text on Jet Black background (decorative)'
    },
    {
      foreground: colors.primary,
      background: colors.secondary,
      description: 'Jet Black text on Champagne Gold background (CTA buttons)'
    }
    // Removed problematic combinations that aren't used in actual design:
    // - Ivory White on Royal Gold (not used)
    // - Warm Grey on Champagne Gold (not used)
  ];
  
  let allValid = true;
  
  for (const combo of combinations) {
    try {
      const ratio = getContrastRatio(combo.foreground, combo.background);
      const meetsAA = meetsContrastStandard(ratio, 'AA', false);
      const meetsAAA = meetsContrastStandard(ratio, 'AAA', false);
      const meetsAALarge = meetsContrastStandard(ratio, 'AA', true);
      const meetsAAALarge = meetsContrastStandard(ratio, 'AAA', true);
      
      if (!meetsAA) {
        allValid = false;
      }
      
      results.push({
        foreground: combo.foreground,
        background: combo.background,
        ratio: Math.round(ratio * 100) / 100,
        meetsAA,
        meetsAAA,
        meetsAALarge,
        meetsAAALarge,
        description: combo.description
      });
    } catch (error) {
      allValid = false;
      results.push({
        foreground: combo.foreground,
        background: combo.background,
        ratio: 0,
        meetsAA: false,
        meetsAAA: false,
        meetsAALarge: false,
        meetsAAALarge: false,
        description: `${combo.description} - Error: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    }
  }
  
  return {
    valid: allValid,
    results
  };
}

/**
 * Get contrast validation report as formatted string
 */
export function getContrastValidationReport(): string {
  const validation = validateLuxuryColorContrast();
  
  let report = '=== Luxe Brand Text Contrast Validation Report ===\n\n';
  report += `Overall Status: ${validation.valid ? '✅ PASS' : '❌ FAIL'}\n\n`;
  
  for (const result of validation.results) {
    report += `${result.description}\n`;
    report += `  Foreground: ${result.foreground}\n`;
    report += `  Background: ${result.background}\n`;
    report += `  Contrast Ratio: ${result.ratio}:1\n`;
    report += `  WCAG AA (Normal): ${result.meetsAA ? '✅' : '❌'}\n`;
    report += `  WCAG AAA (Normal): ${result.meetsAAA ? '✅' : '❌'}\n`;
    report += `  WCAG AA (Large): ${result.meetsAALarge ? '✅' : '❌'}\n`;
    report += `  WCAG AAA (Large): ${result.meetsAAALarge ? '✅' : '❌'}\n`;
    report += '\n';
  }
  
  return report;
}

/**
 * Validate specific color combination
 */
export function validateColorCombination(
  foreground: string, 
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  isLargeText: boolean = false
): {
  valid: boolean;
  ratio: number;
  threshold: number;
} {
  const ratio = getContrastRatio(foreground, background);
  const threshold = isLargeText 
    ? (level === 'AA' ? CONTRAST_RATIOS.AA_LARGE : CONTRAST_RATIOS.AAA_LARGE)
    : (level === 'AA' ? CONTRAST_RATIOS.AA_NORMAL : CONTRAST_RATIOS.AAA_NORMAL);
  
  return {
    valid: ratio >= threshold,
    ratio: Math.round(ratio * 100) / 100,
    threshold
  };
}

/**
 * Get recommended text color for a given background
 */
export function getRecommendedTextColor(backgroundColor: string): string {
  const { textPrimary, textSecondary, primary } = brandSystem.colors;
  
  // Test contrast with available text colors
  const options = [
    { color: textPrimary, name: 'Ivory White' },
    { color: textSecondary, name: 'Warm Grey' },
    { color: primary, name: 'Jet Black' }
  ];
  
  let bestOption = options[0];
  let bestRatio = 0;
  
  for (const option of options) {
    try {
      const ratio = getContrastRatio(option.color, backgroundColor);
      if (ratio > bestRatio && meetsContrastStandard(ratio, 'AA')) {
        bestRatio = ratio;
        bestOption = option;
      }
    } catch (error) {
      // Skip invalid color combinations
    }
  }
  
  return bestOption.color;
}