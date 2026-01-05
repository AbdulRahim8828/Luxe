/**
 * Luxe Brand Contrast Guidelines
 * Approved color combinations that meet WCAG AA standards
 */

import { brandSystem } from '../config/brand';

export interface ContrastGuideline {
  foreground: string;
  background: string;
  usage: string;
  contrastRatio: number;
  wcagLevel: 'AA' | 'AAA';
  textSize: 'normal' | 'large' | 'any';
}

/**
 * Approved high-contrast color combinations for the Luxe brand
 */
export const approvedContrastCombinations: ContrastGuideline[] = [
  {
    foreground: brandSystem.colors.textPrimary, // Ivory White
    background: brandSystem.colors.primary,     // Jet Black
    usage: 'Primary text on dark backgrounds, hero sections, headers',
    contrastRatio: 17.71,
    wcagLevel: 'AAA',
    textSize: 'any'
  },
  {
    foreground: brandSystem.colors.primary,     // Jet Black
    background: brandSystem.colors.textPrimary, // Ivory White
    usage: 'Body text, main content areas, cards',
    contrastRatio: 17.71,
    wcagLevel: 'AAA',
    textSize: 'any'
  },
  {
    foreground: brandSystem.colors.accent,      // Royal Gold
    background: brandSystem.colors.primary,     // Jet Black
    usage: 'Accent text, CTAs, highlights on dark backgrounds',
    contrastRatio: 8.05,
    wcagLevel: 'AAA',
    textSize: 'any'
  },
  {
    foreground: brandSystem.colors.secondary,   // Champagne Gold
    background: brandSystem.colors.primary,     // Jet Black
    usage: 'Secondary accent text, decorative elements on dark backgrounds',
    contrastRatio: 13.06,
    wcagLevel: 'AAA',
    textSize: 'any'
  },
  {
    foreground: brandSystem.colors.primary,     // Jet Black
    background: brandSystem.colors.secondary,   // Champagne Gold
    usage: 'Text on light gold backgrounds, special sections',
    contrastRatio: 13.06,
    wcagLevel: 'AAA',
    textSize: 'any'
  }
];

/**
 * Color combinations to avoid (do not meet WCAG AA standards)
 */
export const avoidedContrastCombinations: ContrastGuideline[] = [
  {
    foreground: brandSystem.colors.textSecondary, // Warm Grey
    background: brandSystem.colors.textPrimary,   // Ivory White
    usage: 'AVOID: Insufficient contrast for accessibility',
    contrastRatio: 2.58,
    wcagLevel: 'AA',
    textSize: 'normal'
  },
  {
    foreground: brandSystem.colors.textPrimary,   // Ivory White
    background: brandSystem.colors.accent,        // Royal Gold
    usage: 'AVOID: Insufficient contrast for accessibility',
    contrastRatio: 2.20,
    wcagLevel: 'AA',
    textSize: 'normal'
  },
  {
    foreground: brandSystem.colors.textSecondary, // Warm Grey
    background: brandSystem.colors.secondary,     // Champagne Gold
    usage: 'AVOID: Insufficient contrast for accessibility',
    contrastRatio: 1.90,
    wcagLevel: 'AA',
    textSize: 'normal'
  }
];

/**
 * Get the best text color for a given background color
 */
export function getBestTextColor(backgroundColor: string): string {
  // Find the approved combination with the highest contrast
  const matchingCombination = approvedContrastCombinations.find(
    combo => combo.background.toLowerCase() === backgroundColor.toLowerCase()
  );
  
  if (matchingCombination) {
    return matchingCombination.foreground;
  }
  
  // Default to high contrast combinations
  const { primary, textPrimary } = brandSystem.colors;
  
  // If background is dark, use light text
  if (backgroundColor.toLowerCase() === primary.toLowerCase()) {
    return textPrimary;
  }
  
  // If background is light, use dark text
  return primary;
}

/**
 * Validate if a color combination is approved
 */
export function isApprovedContrastCombination(
  foreground: string, 
  background: string
): boolean {
  return approvedContrastCombinations.some(
    combo => 
      combo.foreground.toLowerCase() === foreground.toLowerCase() &&
      combo.background.toLowerCase() === background.toLowerCase()
  );
}

/**
 * Get usage guidelines for a color combination
 */
export function getContrastUsageGuideline(
  foreground: string, 
  background: string
): string | null {
  const approved = approvedContrastCombinations.find(
    combo => 
      combo.foreground.toLowerCase() === foreground.toLowerCase() &&
      combo.background.toLowerCase() === background.toLowerCase()
  );
  
  if (approved) {
    return approved.usage;
  }
  
  const avoided = avoidedContrastCombinations.find(
    combo => 
      combo.foreground.toLowerCase() === foreground.toLowerCase() &&
      combo.background.toLowerCase() === background.toLowerCase()
  );
  
  return avoided ? avoided.usage : null;
}

/**
 * CSS classes for approved contrast combinations
 */
export const contrastClasses = {
  // High contrast combinations
  'text-ivory-on-black': 'text-[#F5F5F5] bg-[#0E0E0E]',
  'text-black-on-ivory': 'text-[#0E0E0E] bg-[#F5F5F5]',
  'text-gold-on-black': 'text-[#C9A24D] bg-[#0E0E0E]',
  'text-champagne-on-black': 'text-[#E6D3A3] bg-[#0E0E0E]',
  'text-black-on-champagne': 'text-[#0E0E0E] bg-[#E6D3A3]',
  
  // Utility classes
  'luxe-high-contrast': 'text-[#F5F5F5] bg-[#0E0E0E]',
  'luxe-high-contrast-reverse': 'text-[#0E0E0E] bg-[#F5F5F5]',
  'luxe-accent-contrast': 'text-[#C9A24D] bg-[#0E0E0E]',
} as const;

/**
 * Generate contrast validation report for developers
 */
export function generateContrastGuidelinesReport(): string {
  let report = '# Luxe Brand Contrast Guidelines\n\n';
  
  report += '## ✅ Approved High-Contrast Combinations\n\n';
  for (const combo of approvedContrastCombinations) {
    report += `### ${combo.usage}\n`;
    report += `- **Foreground:** ${combo.foreground}\n`;
    report += `- **Background:** ${combo.background}\n`;
    report += `- **Contrast Ratio:** ${combo.contrastRatio}:1\n`;
    report += `- **WCAG Level:** ${combo.wcagLevel}\n`;
    report += `- **Text Size:** ${combo.textSize}\n\n`;
  }
  
  report += '## ❌ Combinations to Avoid\n\n';
  for (const combo of avoidedContrastCombinations) {
    report += `### ${combo.usage}\n`;
    report += `- **Foreground:** ${combo.foreground}\n`;
    report += `- **Background:** ${combo.background}\n`;
    report += `- **Contrast Ratio:** ${combo.contrastRatio}:1 (Below WCAG AA)\n\n`;
  }
  
  report += '## 🎨 CSS Classes\n\n';
  report += '```css\n';
  Object.entries(contrastClasses).forEach(([className, styles]) => {
    report += `.${className} { ${styles.replace(/text-\[([^\]]+)\]/, 'color: $1').replace(/bg-\[([^\]]+)\]/, 'background-color: $1')} }\n`;
  });
  report += '```\n\n';
  
  report += '## 📋 Best Practices\n\n';
  report += '1. Always use Ivory White (#F5F5F5) text on Jet Black (#0E0E0E) backgrounds\n';
  report += '2. Use Jet Black (#0E0E0E) text on Ivory White (#F5F5F5) backgrounds for body content\n';
  report += '3. Royal Gold (#C9A24D) works well for accents on dark backgrounds\n';
  report += '4. Avoid using Warm Grey (#9A9A9A) on light backgrounds\n';
  report += '5. Test all custom color combinations with the contrast validation utility\n';
  
  return report;
}