/**
 * Luxe Brand System - Main Export
 * Centralized exports for the complete brand system
 */

// Brand Configuration Exports
export {
  brandSystem,
  brandConfig,
  heroConfig,
  navigationConfig,
  serviceCardConfig,
  contentManagerConfig,
  designTokens,
  getBrandName,
  getPrimaryColor,
  getAccentColor,
  getHeadingFont,
  getBodyFont,
  getLuxuryKeywords,
  getTargetAudience,
  getServiceAreas,
  getHeroConfig,
  getNavigationConfig,
  getServiceCardConfig,
  getContentManagerConfig
} from './brand';

// Brand Utilities Exports
export {
  getBrandConfig,
  getBrandSystem,
  getDesignTokens,
  getSecondaryColor,
  getTextPrimaryColor,
  getTextSecondaryColor,
  getPrimaryCTA,
  getSecondaryCTA,
  getHeroTitle,
  getContactInfo,
  isLuxuryColor,
  isLuxuryFont,
  getLuxuryClasses,
  generateLuxuryTitle,
  generateLuxuryMetaDescription,
  validateBrandName,
  updateBrandReferences,
  generateLuxuryAssetName,
  isLuxuryURL,
  generateLuxuryURL
} from '../utils/brandUtils';

// Brand Validation Exports
export {
  validateBrandNameConsistency,
  validateColorPalette,
  validateTypography,
  validateCTAText,
  validateURLStructure,
  validateAssetNaming,
  validateSEOKeywords,
  validateInternalLinks,
  validateBrandCompliance
} from '../utils/brandValidation';

// Type Exports
export type {
  BrandColors,
  TypographyConfig,
  SpacingConfig,
  BrandSystem,
  BrandConfig,
  HeroSectionConfig,
  NavigationConfig,
  ServiceCardConfig,
  ContentManagerConfig,
  DesignTokens
} from '../types';