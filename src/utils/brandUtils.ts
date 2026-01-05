/**
 * Brand Utilities for Luxe Wooden Furniture Polishing
 * Helper functions for consistent brand implementation
 */

import { 
  brandConfig, 
  brandSystem, 
  heroConfig, 
  navigationConfig, 
  serviceCardConfig, 
  contentManagerConfig,
  designTokens 
} from '../config/brand';

import type { 
  BrandConfig, 
  BrandSystem, 
  HeroSectionConfig, 
  NavigationConfig, 
  ServiceCardConfig, 
  ContentManagerConfig,
  DesignTokens 
} from '../types';

/**
 * Get the complete brand configuration
 */
export const getBrandConfig = (): BrandConfig => brandConfig;

/**
 * Get the brand system (colors, typography, spacing)
 */
export const getBrandSystem = (): BrandSystem => brandSystem;

/**
 * Get the hero section configuration
 */
export const getHeroConfig = (): HeroSectionConfig => heroConfig;

/**
 * Get the navigation configuration
 */
export const getNavigationConfig = (): NavigationConfig => navigationConfig;

/**
 * Get the service card configuration
 */
export const getServiceCardConfig = (): ServiceCardConfig => serviceCardConfig;

/**
 * Get the content manager configuration
 */
export const getContentManagerConfig = (): ContentManagerConfig => contentManagerConfig;

/**
 * Get design tokens for CSS variables
 */
export const getDesignTokens = (): DesignTokens => designTokens;

/**
 * Get the brand name
 */
export const getBrandName = (): string => brandConfig.name;

/**
 * Get primary brand color (Jet Black)
 */
export const getPrimaryColor = (): string => brandSystem.colors.primary;

/**
 * Get accent brand color (Royal Gold)
 */
export const getAccentColor = (): string => brandSystem.colors.accent;

/**
 * Get secondary brand color (Champagne Gold)
 */
export const getSecondaryColor = (): string => brandSystem.colors.secondary;

/**
 * Get primary text color (Ivory White)
 */
export const getTextPrimaryColor = (): string => brandSystem.colors.textPrimary;

/**
 * Get secondary text color (Warm Grey)
 */
export const getTextSecondaryColor = (): string => brandSystem.colors.textSecondary;

/**
 * Get heading font (Playfair Display)
 */
export const getHeadingFont = (): string => brandSystem.typography.headings;

/**
 * Get body font (Poppins)
 */
export const getBodyFont = (): string => brandSystem.typography.body;

/**
 * Get luxury keywords for SEO
 */
export const getLuxuryKeywords = (): string[] => contentManagerConfig.seo.keywords;

/**
 * Get target audience segments
 */
export const getTargetAudience = (): string[] => brandConfig.targetAudience;

/**
 * Get service areas
 */
export const getServiceAreas = (): string[] => brandConfig.serviceAreas;

/**
 * Get primary CTA text
 */
export const getPrimaryCTA = (): string => heroConfig.cta.primary.text;

/**
 * Get secondary CTA text
 */
export const getSecondaryCTA = (): string => heroConfig.cta.secondary.text;

/**
 * Get hero title components
 */
export const getHeroTitle = () => ({
  primary: heroConfig.title.primary,
  secondary: heroConfig.title.secondary,
  tagline: heroConfig.title.tagline,
});

/**
 * Get contact information
 */
export const getContactInfo = () => brandConfig.contactInfo;

/**
 * Check if a color is from the luxury palette
 */
export const isLuxuryColor = (color: string): boolean => {
  const luxuryColors = Object.values(brandSystem.colors);
  return luxuryColors.includes(color.toUpperCase());
};

/**
 * Check if text uses luxury fonts
 */
export const isLuxuryFont = (fontFamily: string): boolean => {
  return fontFamily.includes(brandSystem.typography.headings) || 
         fontFamily.includes(brandSystem.typography.body);
};

/**
 * Generate luxury-compliant CSS classes
 */
export const getLuxuryClasses = () => ({
  heading: 'luxe-heading font-playfair',
  body: 'luxe-body font-poppins',
  primaryButton: 'bg-luxe-accent text-luxe-text-primary hover:bg-luxe-secondary transition-colors',
  secondaryButton: 'border-2 border-luxe-accent text-luxe-accent hover:bg-luxe-accent hover:text-luxe-text-primary transition-colors',
  card: 'luxe-hover-lift bg-white shadow-lg',
  section: 'luxe-section-spacing',
  component: 'luxe-component-spacing',
  element: 'luxe-element-spacing',
});

/**
 * Generate SEO-optimized title with luxury keywords
 */
export const generateLuxuryTitle = (service: string, location?: string): string => {
  const baseTitle = `${service} | ${getBrandName()}`;
  if (location) {
    return `Luxury ${service} in ${location} | ${getBrandName()}`;
  }
  return `Premium ${baseTitle}`;
};

/**
 * Generate SEO-optimized meta description with luxury positioning
 */
export const generateLuxuryMetaDescription = (service: string, location?: string): string => {
  const brandName = getBrandName();
  const baseDescription = `Professional ${service.toLowerCase()} services by ${brandName}. Premium quality, luxury finish, and exceptional craftsmanship.`;
  
  if (location) {
    return `${baseDescription} Serving ${location} with luxury furniture care solutions.`;
  }
  
  return baseDescription;
};

/**
 * Validate brand name consistency
 */
export const validateBrandName = (text: string): boolean => {
  const oldBrandName = 'A1 Furniture Polish';
  const newBrandName = getBrandName();
  
  // Check if text contains old brand name
  if (text.includes(oldBrandName)) {
    return false;
  }
  
  // Check if text contains new brand name when it should
  return text.includes(newBrandName);
};

/**
 * Replace old brand references with new luxury brand
 */
export const updateBrandReferences = (text: string): string => {
  const oldBrandName = 'A1 Furniture Polish';
  const newBrandName = getBrandName();
  
  return text.replace(new RegExp(oldBrandName, 'g'), newBrandName);
};

/**
 * Generate luxury asset naming convention
 */
export const generateLuxuryAssetName = (category: string, description: string): string => {
  const sanitizedCategory = category.toLowerCase().replace(/\s+/g, '-');
  const sanitizedDescription = description.toLowerCase().replace(/\s+/g, '-');
  return `luxe-${sanitizedCategory}-${sanitizedDescription}`;
};

/**
 * Check if URL follows luxury branding convention
 */
export const isLuxuryURL = (url: string): boolean => {
  const oldBrandPatterns = ['a1-furniture', 'a1furniture', 'a1_furniture'];
  const hasOldPattern = oldBrandPatterns.some(pattern => url.toLowerCase().includes(pattern));
  
  return !hasOldPattern && (url.includes('luxe') || url.includes('luxury'));
};

/**
 * Generate luxury-branded URL
 */
export const generateLuxuryURL = (path: string): string => {
  // Remove any old brand references and create clean luxury URL
  const cleanPath = path
    .replace(/a1-furniture-polish/g, 'luxe-furniture-polishing')
    .replace(/a1furniture/g, 'luxe')
    .replace(/a1_furniture/g, 'luxe-furniture');
  
  return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
};