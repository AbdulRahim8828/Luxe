/**
 * Brand Validation Utilities
 * Functions to validate brand consistency across the application
 */

import { brandSystem, brandConfig } from '../config/brand';

/**
 * Validation result interface
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validate brand name consistency in text content
 */
export const validateBrandNameConsistency = (content: string): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const oldBrandName = 'A1 Furniture Polish';
  const newBrandName = brandConfig.name;

  // Check for old brand name references
  if (content.includes(oldBrandName)) {
    result.isValid = false;
    result.errors.push(`Found old brand name "${oldBrandName}" in content`);
  }

  // Check if new brand name is present where expected
  const brandKeywords = ['furniture', 'polish', 'service'];
  const hasBrandKeywords = brandKeywords.some(keyword => 
    content.toLowerCase().includes(keyword)
  );

  if (hasBrandKeywords && !content.includes(newBrandName)) {
    result.warnings.push(`Content mentions furniture services but doesn't include brand name "${newBrandName}"`);
  }

  return result;
};

/**
 * Validate color palette compliance
 */
export const validateColorPalette = (colors: string[]): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const luxuryColors = Object.values(brandSystem.colors);
  const invalidColors = colors.filter(color => 
    !luxuryColors.includes(color.toUpperCase())
  );

  if (invalidColors.length > 0) {
    result.isValid = false;
    result.errors.push(`Invalid colors found: ${invalidColors.join(', ')}. Must use luxury palette colors only.`);
  }

  return result;
};

/**
 * Validate typography consistency
 */
export const validateTypography = (fontFamily: string, elementType: 'heading' | 'body'): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const expectedFont = elementType === 'heading' 
    ? brandSystem.typography.headings 
    : brandSystem.typography.body;

  if (!fontFamily.includes(expectedFont)) {
    result.isValid = false;
    result.errors.push(`Invalid font for ${elementType}: "${fontFamily}". Expected: "${expectedFont}"`);
  }

  return result;
};

/**
 * Validate CTA text consistency
 */
export const validateCTAText = (ctaText: string, ctaType: 'primary' | 'secondary'): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const expectedPrimary = 'Get a Free Inspection';
  const expectedSecondary = 'View Our Work';

  const expectedText = ctaType === 'primary' ? expectedPrimary : expectedSecondary;

  if (ctaText !== expectedText) {
    result.isValid = false;
    result.errors.push(`Invalid ${ctaType} CTA text: "${ctaText}". Expected: "${expectedText}"`);
  }

  return result;
};

/**
 * Validate URL structure for luxury branding
 */
export const validateURLStructure = (url: string): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const oldBrandPatterns = ['a1-furniture', 'a1furniture', 'a1_furniture'];
  const hasOldPattern = oldBrandPatterns.some(pattern => 
    url.toLowerCase().includes(pattern)
  );

  if (hasOldPattern) {
    result.isValid = false;
    result.errors.push(`URL contains old brand references: ${url}`);
  }

  // Check for clean URL structure
  if (url.includes('//') || url.includes('..')) {
    result.warnings.push(`URL structure could be cleaner: ${url}`);
  }

  return result;
};

/**
 * Validate asset naming convention
 */
export const validateAssetNaming = (filename: string): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const luxePrefix = 'luxe-';
  const oldPrefixes = ['a1-', 'a1_', 'a1furniture'];

  // Check for old brand prefixes
  const hasOldPrefix = oldPrefixes.some(prefix => 
    filename.toLowerCase().includes(prefix)
  );

  if (hasOldPrefix) {
    result.isValid = false;
    result.errors.push(`Asset filename contains old brand references: ${filename}`);
  }

  // Check for luxury naming convention
  if (!filename.toLowerCase().startsWith(luxePrefix) && 
      !filename.toLowerCase().includes('luxe')) {
    result.warnings.push(`Asset filename should follow luxury naming convention (luxe-[category]-[description]): ${filename}`);
  }

  return result;
};

/**
 * Validate SEO keyword integration
 */
export const validateSEOKeywords = (title: string, description: string): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const luxuryKeywords = [
    'luxury', 'premium', 'wooden furniture', 'polishing', 'mumbai'
  ];

  const titleLower = title.toLowerCase();
  const descriptionLower = description.toLowerCase();

  const missingKeywords = luxuryKeywords.filter(keyword => 
    !titleLower.includes(keyword) && !descriptionLower.includes(keyword)
  );

  if (missingKeywords.length > 0) {
    result.warnings.push(`Consider including luxury keywords: ${missingKeywords.join(', ')}`);
  }

  // Check for brand name in SEO content
  if (!title.includes(brandConfig.name) && !description.includes(brandConfig.name)) {
    result.warnings.push(`SEO content should include brand name: ${brandConfig.name}`);
  }

  return result;
};

/**
 * Validate internal link structure
 */
export const validateInternalLinks = (links: string[]): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const invalidLinks = links.filter(link => {
    // Check for old brand references in URLs
    const oldPatterns = ['a1-furniture', 'a1furniture'];
    return oldPatterns.some(pattern => link.toLowerCase().includes(pattern));
  });

  if (invalidLinks.length > 0) {
    result.isValid = false;
    result.errors.push(`Internal links contain old brand references: ${invalidLinks.join(', ')}`);
  }

  // Check for broken link patterns
  const suspiciousLinks = links.filter(link => 
    link.includes('undefined') || link.includes('null') || link === '#'
  );

  if (suspiciousLinks.length > 0) {
    result.warnings.push(`Suspicious internal links found: ${suspiciousLinks.join(', ')}`);
  }

  return result;
};

/**
 * Comprehensive brand validation
 */
export const validateBrandCompliance = (content: {
  text?: string;
  colors?: string[];
  fonts?: { family: string; type: 'heading' | 'body' }[];
  ctas?: { text: string; type: 'primary' | 'secondary' }[];
  urls?: string[];
  assets?: string[];
  seo?: { title: string; description: string };
}): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  // Validate text content
  if (content.text) {
    const textValidation = validateBrandNameConsistency(content.text);
    result.errors.push(...textValidation.errors);
    result.warnings.push(...textValidation.warnings);
    if (!textValidation.isValid) result.isValid = false;
  }

  // Validate colors
  if (content.colors) {
    const colorValidation = validateColorPalette(content.colors);
    result.errors.push(...colorValidation.errors);
    result.warnings.push(...colorValidation.warnings);
    if (!colorValidation.isValid) result.isValid = false;
  }

  // Validate fonts
  if (content.fonts) {
    content.fonts.forEach(font => {
      const fontValidation = validateTypography(font.family, font.type);
      result.errors.push(...fontValidation.errors);
      result.warnings.push(...fontValidation.warnings);
      if (!fontValidation.isValid) result.isValid = false;
    });
  }

  // Validate CTAs
  if (content.ctas) {
    content.ctas.forEach(cta => {
      const ctaValidation = validateCTAText(cta.text, cta.type);
      result.errors.push(...ctaValidation.errors);
      result.warnings.push(...ctaValidation.warnings);
      if (!ctaValidation.isValid) result.isValid = false;
    });
  }

  // Validate URLs
  if (content.urls) {
    const urlValidation = validateInternalLinks(content.urls);
    result.errors.push(...urlValidation.errors);
    result.warnings.push(...urlValidation.warnings);
    if (!urlValidation.isValid) result.isValid = false;
  }

  // Validate assets
  if (content.assets) {
    content.assets.forEach(asset => {
      const assetValidation = validateAssetNaming(asset);
      result.errors.push(...assetValidation.errors);
      result.warnings.push(...assetValidation.warnings);
      if (!assetValidation.isValid) result.isValid = false;
    });
  }

  // Validate SEO
  if (content.seo) {
    const seoValidation = validateSEOKeywords(content.seo.title, content.seo.description);
    result.errors.push(...seoValidation.errors);
    result.warnings.push(...seoValidation.warnings);
    if (!seoValidation.isValid) result.isValid = false;
  }

  return result;
};