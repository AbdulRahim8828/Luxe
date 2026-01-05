/**
 * Luxe Brand Integration Tests
 * Comprehensive integration testing for the complete luxury brand system
 * Tests user journeys, brand consistency, and CTA functionality
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { 
  getBrandName, 
  getPrimaryCTA, 
  getSecondaryCTA,
  getHeroTitle,
  getLuxuryKeywords,
  getTargetAudience
} from '../utils/brandUtils';

import {
  validateBrandNameConsistency,
  validateColorPalette,
  validateTypography,
  validateCTAText,
  validateURLStructure,
  validateAssetNaming
} from '../utils/brandValidation';

import { PageData } from '../types';

describe('Luxe Brand Integration Tests', () => {
  let samplePageData: PageData;

  beforeEach(() => {
    samplePageData = {
      title: 'Luxe Wooden Furniture Polishing - Premium Services in Mumbai',
      metaDescription: 'Experience luxury furniture polishing with Luxe Wooden Furniture Polishing. Premium quality, expert craftsmanship, serving luxury homes and villas in Mumbai.',
      h1: 'Luxe Wooden Furniture Polishing Services',
      url: '/luxe-furniture-polishing/services',
      canonicalUrl: 'https://www.luxewoodenfurniturepolishing.com/luxe-furniture-polishing/services',
      serviceCategory: 'luxury-furniture-polishing',
      serviceName: 'Premium Furniture Polishing',
      location: 'Mumbai',
      titleVariation: 'professional',
      introduction: 'Professional luxury furniture polishing services in Mumbai with expert craftsmen and premium materials.',
      services: [
        { name: 'Premium Wood Polish', description: 'Luxury wood polishing service with premium materials' },
        { name: 'High-End PU Polish', description: 'Premium PU polish application for luxury furniture' }
      ],
      process: [
        { step: 1, title: 'Luxury Assessment', description: 'Comprehensive evaluation of luxury furniture', image: 'luxe-process-assessment.jpg' },
        { step: 2, title: 'Premium Preparation', description: 'Meticulous surface preparation with luxury care', image: 'luxe-process-preparation.jpg' }
      ],
      locationAreas: ['Bandra', 'Juhu', 'Powai', 'Worli'],
      serviceAreaDescription: 'We serve premium locations across Mumbai with luxury furniture polishing services.',
      pricing: {
        startingPrice: 1500,
        priceRange: '₹1500 - ₹5000',
        factors: ['Furniture type', 'Premium polish selection', 'Luxury finish requirements']
      },
      whyChooseUs: [
        { title: 'Luxury Expertise', description: 'Specialized in high-end furniture care' },
        { title: 'Premium Materials', description: 'Only the finest polish products' }
      ],
      faqs: [
        { question: 'How long does luxury polishing take?', answer: 'Premium service typically takes 3-6 hours for optimal results.' }
      ],
      relatedServices: [
        { name: 'Luxury Wood Polishing Mumbai', url: '/luxe-furniture-polishing/wood-polishing-mumbai' }
      ],
      schema: {
        localBusiness: {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Luxe Wooden Furniture Polishing',
          image: 'https://www.luxewoodenfurniturepolishing.com/images/luxe-business-logo.jpg',
          '@id': 'https://www.luxewoodenfurniturepolishing.com/#organization',
          url: 'https://www.luxewoodenfurniturepolishing.com',
          telephone: '+91 98765 43210',
          priceRange: '₹₹₹',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Mumbai Business District',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '400001',
            addressCountry: 'IN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.0760,
            longitude: 72.8777
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00'
          },
          sameAs: [
            'https://www.facebook.com/luxewoodenfurniturepolishing',
            'https://www.instagram.com/luxewoodenfurniturepolishing'
          ]
        },
        service: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Premium Furniture Polishing',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Luxe Wooden Furniture Polishing'
          },
          areaServed: {
            '@type': 'City',
            name: 'Mumbai'
          }
        }
      },
      primaryKeyword: 'luxury furniture polishing Mumbai',
      secondaryKeywords: ['premium furniture polish', 'luxury wood polish Mumbai']
    };
  });

  describe('Complete User Journey Testing', () => {
    it('should maintain luxury brand consistency throughout user journey', () => {
      // Test brand name consistency
      const brandName = getBrandName();
      expect(brandName).toBe('Luxe Wooden Furniture Polishing');
      
      // Test page content has correct brand references
      const brandValidation = validateBrandNameConsistency(samplePageData.title);
      expect(brandValidation.isValid).toBe(true);
      
      // Test meta description contains brand
      expect(samplePageData.metaDescription).toContain('Luxe Wooden Furniture Polishing');
      
      // Test H1 contains brand elements
      expect(samplePageData.h1).toContain('Luxe');
      
      // Test schema markup contains correct business name
      expect(samplePageData.schema.localBusiness.name).toBe('Luxe Wooden Furniture Polishing');
    });

    it('should provide consistent luxury messaging across all touchpoints', () => {
      // Test hero section messaging
      const heroTitle = getHeroTitle();
      expect(heroTitle.primary).toBe('LUXE');
      expect(heroTitle.secondary).toBe('Wooden Furniture Polishing');
      expect(heroTitle.tagline).toBe('Luxury Finish for Timeless Furniture');
      
      // Test service descriptions use luxury language
      expect(samplePageData.services[0].name).toContain('Premium');
      expect(samplePageData.services[1].name).toContain('High-End');
      
      // Test process descriptions use luxury terminology
      expect(samplePageData.process[0].title).toContain('Luxury');
      expect(samplePageData.process[1].title).toContain('Premium');
      
      // Test why choose us section emphasizes luxury
      expect(samplePageData.whyChooseUs[0].title).toContain('Luxury');
      expect(samplePageData.whyChooseUs[1].title).toContain('Premium');
    });

    it('should target luxury audience consistently', () => {
      const targetAudience = getTargetAudience();
      expect(targetAudience).toContain('luxury-homes');
      expect(targetAudience).toContain('villas');
      expect(targetAudience).toContain('interior-designers');
      
      // Test service area description targets premium locations
      expect(samplePageData.serviceAreaDescription).toContain('premium locations');
      
      // Test location areas include upscale neighborhoods
      expect(samplePageData.locationAreas).toContain('Bandra');
      expect(samplePageData.locationAreas).toContain('Juhu');
      expect(samplePageData.locationAreas).toContain('Worli');
    });

    it('should maintain premium pricing strategy', () => {
      // Test pricing reflects luxury positioning
      expect(samplePageData.pricing.startingPrice).toBeGreaterThanOrEqual(1500);
      expect(samplePageData.pricing.priceRange).toContain('₹1500');
      
      // Test pricing factors emphasize premium aspects
      expect(samplePageData.pricing.factors).toContain('Premium polish selection');
      expect(samplePageData.pricing.factors).toContain('Luxury finish requirements');
    });
  });

  describe('Brand Consistency Validation', () => {
    it('should validate brand name consistency across all content', () => {
      const contentSamples = [
        samplePageData.title,
        samplePageData.metaDescription,
        samplePageData.h1,
        samplePageData.introduction,
        samplePageData.serviceAreaDescription
      ];

      contentSamples.forEach(content => {
        const validation = validateBrandNameConsistency(content);
        expect(validation.isValid).toBe(true);
        expect(validation.errors).toHaveLength(0);
      });
    });

    it('should validate luxury color palette usage', () => {
      const luxuryColors = [
        '#0E0E0E', // Jet Black
        '#D4AF37', // Royal Gold (WCAG AA compliant)
        '#B8A052', // Champagne Gold (WCAG AA compliant)
        '#F5F5F5', // Ivory White
        '#4A4A4A'  // Warm Grey (WCAG AA compliant)
      ];

      const colorValidation = validateColorPalette(luxuryColors);
      expect(colorValidation.isValid).toBe(true);
      expect(colorValidation.errors).toHaveLength(0);
    });

    it('should validate typography consistency', () => {
      const headingFontValidation = validateTypography('Playfair Display, serif', 'heading');
      const bodyFontValidation = validateTypography('Poppins, sans-serif', 'body');
      
      expect(headingFontValidation.isValid).toBe(true);
      expect(bodyFontValidation.isValid).toBe(true);
    });

    it('should validate URL structure consistency', () => {
      const urlValidation = validateURLStructure(samplePageData.url);
      expect(urlValidation.isValid).toBe(true);
      expect(urlValidation.errors).toHaveLength(0);
      
      // Test canonical URL structure
      const canonicalValidation = validateURLStructure(samplePageData.canonicalUrl);
      expect(canonicalValidation.isValid).toBe(true);
      
      // Test related service URLs
      samplePageData.relatedServices.forEach(service => {
        const serviceUrlValidation = validateURLStructure(service.url);
        expect(serviceUrlValidation.isValid).toBe(true);
      });
    });

    it('should validate asset naming conventions', () => {
      const luxuryAssetNames = [
        'luxe-furniture-sofa-polishing.jpg',
        'luxe-process-consultation-booking.webp',
        'luxe-service-antique-restoration.png',
        'luxe-polishing-dining-table.avif'
      ];

      luxuryAssetNames.forEach(assetName => {
        const validation = validateAssetNaming(assetName);
        expect(validation.isValid).toBe(true);
        expect(validation.errors).toHaveLength(0);
      });
    });
  });

  describe('CTA Functionality and Styling', () => {
    it('should validate primary CTA text and functionality', () => {
      const primaryCTA = getPrimaryCTA();
      expect(primaryCTA).toBe('Get a Free Inspection');
      
      const ctaValidation = validateCTAText(primaryCTA, 'primary');
      expect(ctaValidation.isValid).toBe(true);
      expect(ctaValidation.errors).toHaveLength(0);
    });

    it('should validate secondary CTA text and functionality', () => {
      const secondaryCTA = getSecondaryCTA();
      expect(secondaryCTA).toBe('View Our Work');
      
      const ctaValidation = validateCTAText(secondaryCTA, 'secondary');
      expect(ctaValidation.isValid).toBe(true);
      expect(ctaValidation.errors).toHaveLength(0);
    });

    it('should ensure CTAs maintain luxury styling standards', () => {
      // Test that CTA text uses appropriate luxury language
      const primaryCTA = getPrimaryCTA();
      const secondaryCTA = getSecondaryCTA();
      
      // Primary CTA should be action-oriented and professional
      expect(primaryCTA).toMatch(/^(Get|Book|Schedule|Request)/);
      expect(primaryCTA).toContain('Free');
      
      // Secondary CTA should be exploratory and premium
      expect(secondaryCTA).toMatch(/^(View|See|Explore|Discover)/);
      expect(secondaryCTA).toContain('Work');
    });

    it('should validate CTA placement and context', () => {
      // Test that luxury keywords are present for CTA context
      const luxuryKeywords = getLuxuryKeywords();
      expect(luxuryKeywords).toContain('Luxury Furniture Polishing Services');
      expect(luxuryKeywords).toContain('Wooden Furniture Polishing in Mumbai');
      
      // Test that page content supports CTA messaging
      expect(samplePageData.introduction).toContain('luxury');
      expect(samplePageData.introduction).toContain('premium');
    });
  });

  describe('SEO Integration with Luxury Brand', () => {
    it('should integrate luxury keywords effectively', () => {
      const luxuryKeywords = getLuxuryKeywords();
      
      // Test primary keyword integration
      expect(samplePageData.primaryKeyword).toContain('luxury');
      expect(samplePageData.primaryKeyword).toContain('Mumbai');
      
      // Test secondary keywords contain luxury terms
      samplePageData.secondaryKeywords.forEach(keyword => {
        expect(keyword.toLowerCase()).toMatch(/(luxury|premium|high-end|luxe)/);
      });
      
      // Test title contains luxury positioning
      expect(samplePageData.title).toContain('Luxe');
      expect(samplePageData.title).toContain('Premium');
      
      // Test meta description contains luxury messaging
      expect(samplePageData.metaDescription).toContain('luxury');
      expect(samplePageData.metaDescription.toLowerCase()).toContain('premium');
    });

    it('should maintain schema markup with luxury brand information', () => {
      // Test LocalBusiness schema contains correct brand name
      expect(samplePageData.schema.localBusiness.name).toBe('Luxe Wooden Furniture Polishing');
      
      // Test Service schema contains premium service name
      expect(samplePageData.schema.service.serviceType).toContain('Premium');
      
      // Test schema structure is valid
      expect(samplePageData.schema.localBusiness['@context']).toBe('https://schema.org');
      expect(samplePageData.schema.localBusiness['@type']).toBe('LocalBusiness');
      expect(samplePageData.schema.service['@context']).toBe('https://schema.org');
      expect(samplePageData.schema.service['@type']).toBe('Service');
    });
  });

  describe('Cross-Component Integration', () => {
    it('should maintain consistency between navigation and content', () => {
      // Test that URL structure matches brand naming
      expect(samplePageData.url).toContain('luxe-furniture-polishing');
      expect(samplePageData.canonicalUrl).toContain('luxewoodenfurniturepolishing');
      
      // Test that related services maintain brand consistency
      samplePageData.relatedServices.forEach(service => {
        expect(service.name).toContain('Luxury');
        expect(service.url).toContain('luxe-furniture-polishing');
      });
    });

    it('should integrate luxury design elements across components', () => {
      // Test service names use luxury terminology
      samplePageData.services.forEach(service => {
        expect(service.name).toMatch(/(Premium|High-End|Luxury)/);
        expect(service.description).toMatch(/(luxury|premium)/i);
      });
      
      // Test process steps use luxury language
      samplePageData.process.forEach(step => {
        expect(step.title).toMatch(/(Luxury|Premium)/);
        expect(step.description).toMatch(/(luxury|premium|meticulous|comprehensive)/i);
      });
    });

    it('should maintain performance standards with luxury assets', () => {
      // Test that luxury positioning doesn't compromise performance
      expect(samplePageData.title.length).toBeLessThan(70);
      expect(samplePageData.metaDescription.length).toBeGreaterThan(140);
      expect(samplePageData.metaDescription.length).toBeLessThan(170);
      
      // Test that URLs are clean and SEO-friendly
      expect(samplePageData.url).toMatch(/^\/[a-z0-9-\/]+$/);
      expect(samplePageData.canonicalUrl).toMatch(/^https:\/\/[a-z0-9.-]+\/[a-z0-9-\/]*$/);
    });
  });

  describe('Error Handling and Fallbacks', () => {
    it('should handle missing brand elements gracefully', () => {
      const incompletePageData = {
        ...samplePageData,
        title: '',
        metaDescription: '',
        h1: ''
      };

      // Test that empty content doesn't contain old brand references (should pass)
      const titleValidation = validateBrandNameConsistency(incompletePageData.title);
      expect(titleValidation.isValid).toBe(true); // Empty string has no old brand references
      
      // Test that empty content doesn't contain new brand name when it should
      const contentWithFurnitureKeyword = 'furniture polishing service';
      const metaValidation = validateBrandNameConsistency(contentWithFurnitureKeyword);
      expect(metaValidation.warnings.length).toBeGreaterThan(0); // Should warn about missing brand name
    });

    it('should validate luxury standards are maintained under edge cases', () => {
      // Test with minimal content
      const minimalContent = 'Luxe Wooden Furniture Polishing';
      const validation = validateBrandNameConsistency(minimalContent);
      expect(validation.isValid).toBe(true);
      
      // Test with maximum content length
      const longContent = `Luxe Wooden Furniture Polishing ${'premium luxury '.repeat(20)}`;
      const longValidation = validateBrandNameConsistency(longContent);
      expect(longValidation.isValid).toBe(true);
    });
  });
});