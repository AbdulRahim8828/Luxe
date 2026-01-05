/**
 * Brand System Tests
 * Tests for the Luxe Wooden Furniture Polishing brand system
 */

import { describe, it, expect } from 'vitest';
import { 
  getBrandName, 
  getPrimaryColor, 
  getAccentColor, 
  getHeadingFont, 
  getBodyFont,
  getLuxuryKeywords,
  getTargetAudience,
  getServiceAreas,
  getPrimaryCTA,
  getSecondaryCTA,
  getHeroTitle,
  getContactInfo,
  isLuxuryColor,
  isLuxuryFont,
  validateBrandName,
  updateBrandReferences,
  generateLuxuryAssetName,
  isLuxuryURL,
  generateLuxuryURL
} from '../utils/brandUtils';

import {
  validateBrandNameConsistency,
  validateColorPalette,
  validateTypography,
  validateCTAText,
  validateURLStructure,
  validateAssetNaming
} from '../utils/brandValidation';

describe('Brand System Configuration', () => {
  it('should return correct brand name', () => {
    expect(getBrandName()).toBe('Luxe Wooden Furniture Polishing');
  });

  it('should return correct luxury colors', () => {
    expect(getPrimaryColor()).toBe('#0E0E0E'); // Jet Black
    expect(getAccentColor()).toBe('#C9A24D'); // Royal Gold
  });

  it('should return correct luxury fonts', () => {
    expect(getHeadingFont()).toBe('Playfair Display');
    expect(getBodyFont()).toBe('Poppins');
  });

  it('should return correct CTA text', () => {
    expect(getPrimaryCTA()).toBe('Get a Free Inspection');
    expect(getSecondaryCTA()).toBe('View Our Work');
  });

  it('should return correct hero title components', () => {
    const heroTitle = getHeroTitle();
    expect(heroTitle.primary).toBe('LUXE');
    expect(heroTitle.secondary).toBe('Wooden Furniture Polishing');
    expect(heroTitle.tagline).toBe('Luxury Finish for Timeless Furniture');
  });

  it('should return luxury keywords', () => {
    const keywords = getLuxuryKeywords();
    expect(keywords).toContain('Wooden Furniture Polishing in Mumbai');
    expect(keywords).toContain('Luxury Furniture Polishing Services');
  });

  it('should return target audience', () => {
    const audience = getTargetAudience();
    expect(audience).toContain('luxury-homes');
    expect(audience).toContain('villas');
    expect(audience).toContain('interior-designers');
  });

  it('should return service areas', () => {
    const areas = getServiceAreas();
    expect(areas).toContain('Mumbai');
    expect(areas).toContain('Bandra');
    expect(areas).toContain('Andheri');
  });

  it('should return contact information', () => {
    const contact = getContactInfo();
    expect(contact.phone).toBeDefined();
    expect(contact.email).toBeDefined();
    expect(contact.address).toBeDefined();
  });
});

describe('Brand Validation Functions', () => {
  it('should validate luxury colors correctly', () => {
    expect(isLuxuryColor('#0E0E0E')).toBe(true); // Jet Black
    expect(isLuxuryColor('#C9A24D')).toBe(true); // Royal Gold
    expect(isLuxuryColor('#FF0000')).toBe(false); // Red (not in palette)
  });

  it('should validate luxury fonts correctly', () => {
    expect(isLuxuryFont('Playfair Display, serif')).toBe(true);
    expect(isLuxuryFont('Poppins, sans-serif')).toBe(true);
    expect(isLuxuryFont('Arial, sans-serif')).toBe(false);
  });

  it('should validate brand name consistency', () => {
    expect(validateBrandName('Welcome to Luxe Wooden Furniture Polishing')).toBe(true);
    expect(validateBrandName('Welcome to A1 Furniture Polish')).toBe(false);
  });

  it('should update brand references correctly', () => {
    const oldText = 'Welcome to A1 Furniture Polish services';
    const newText = updateBrandReferences(oldText);
    expect(newText).toBe('Welcome to Luxe Wooden Furniture Polishing services');
  });

  it('should generate luxury asset names correctly', () => {
    const assetName = generateLuxuryAssetName('furniture', 'sofa polishing');
    expect(assetName).toBe('luxe-furniture-sofa-polishing');
  });

  it('should validate luxury URLs correctly', () => {
    expect(isLuxuryURL('/luxe-furniture-polishing')).toBe(true);
    expect(isLuxuryURL('/a1-furniture-polish')).toBe(false);
  });

  it('should generate luxury URLs correctly', () => {
    const luxuryURL = generateLuxuryURL('a1-furniture-polish/services');
    expect(luxuryURL).toBe('/luxe-furniture-polishing/services');
  });
});

describe('Brand Validation System', () => {
  it('should validate brand name consistency in content', () => {
    const validContent = 'Welcome to Luxe Wooden Furniture Polishing';
    const invalidContent = 'Welcome to A1 Furniture Polish';
    
    const validResult = validateBrandNameConsistency(validContent);
    const invalidResult = validateBrandNameConsistency(invalidContent);
    
    expect(validResult.isValid).toBe(true);
    expect(invalidResult.isValid).toBe(false);
    expect(invalidResult.errors.length).toBeGreaterThan(0);
  });

  it('should validate color palette compliance', () => {
    const validColors = ['#0E0E0E', '#C9A24D', '#E6D3A3'];
    const invalidColors = ['#FF0000', '#00FF00', '#0000FF'];
    
    const validResult = validateColorPalette(validColors);
    const invalidResult = validateColorPalette(invalidColors);
    
    expect(validResult.isValid).toBe(true);
    expect(invalidResult.isValid).toBe(false);
  });

  it('should validate typography consistency', () => {
    const validHeadingFont = 'Playfair Display, serif';
    const validBodyFont = 'Poppins, sans-serif';
    const invalidFont = 'Arial, sans-serif';
    
    const validHeadingResult = validateTypography(validHeadingFont, 'heading');
    const validBodyResult = validateTypography(validBodyFont, 'body');
    const invalidResult = validateTypography(invalidFont, 'heading');
    
    expect(validHeadingResult.isValid).toBe(true);
    expect(validBodyResult.isValid).toBe(true);
    expect(invalidResult.isValid).toBe(false);
  });

  it('should validate CTA text consistency', () => {
    const validPrimaryCTA = 'Get a Free Inspection';
    const validSecondaryCTA = 'View Our Work';
    const invalidCTA = 'Click Here';
    
    const validPrimaryResult = validateCTAText(validPrimaryCTA, 'primary');
    const validSecondaryResult = validateCTAText(validSecondaryCTA, 'secondary');
    const invalidResult = validateCTAText(invalidCTA, 'primary');
    
    expect(validPrimaryResult.isValid).toBe(true);
    expect(validSecondaryResult.isValid).toBe(true);
    expect(invalidResult.isValid).toBe(false);
  });

  it('should validate URL structure', () => {
    const validURL = '/luxe-furniture-polishing/services';
    const invalidURL = '/a1-furniture-polish/services';
    
    const validResult = validateURLStructure(validURL);
    const invalidResult = validateURLStructure(invalidURL);
    
    expect(validResult.isValid).toBe(true);
    expect(invalidResult.isValid).toBe(false);
  });

  it('should validate asset naming convention', () => {
    const validAsset = 'luxe-furniture-sofa-polishing.jpg';
    const invalidAsset = 'a1-furniture-sofa.jpg';
    
    const validResult = validateAssetNaming(validAsset);
    const invalidResult = validateAssetNaming(invalidAsset);
    
    expect(validResult.isValid).toBe(true);
    expect(invalidResult.isValid).toBe(false);
  });
});