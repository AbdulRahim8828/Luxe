/**
 * SEO Migration Validation Tests
 * Comprehensive testing for SEO migration from A1 to Luxe brand
 * Tests redirects, schema markup, and luxury keyword integration
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { 
  getBrandName, 
  getLuxuryKeywords,
  generateLuxuryURL,
  isLuxuryURL
} from '../utils/brandUtils';

import {
  validateSEOKeywords,
  validateURLStructure,
  validateBrandNameConsistency
} from '../utils/brandValidation';

import { PageData } from '../types';

describe('SEO Migration Validation Tests', () => {
  let luxuryPageData: PageData;
  let oldURLs: string[];
  let newURLs: string[];

  beforeEach(() => {
    luxuryPageData = {
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
        { step: 1, title: 'Luxury Assessment', description: 'Comprehensive evaluation of luxury furniture', image: '/luxury-assessment.jpg' },
        { step: 2, title: 'Premium Preparation', description: 'Meticulous surface preparation with luxury care', image: '/premium-preparation.jpg' }
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
          'name': 'Luxe Wooden Furniture Polishing',
          'description': 'Premium wooden furniture polishing services in Mumbai',
          'url': 'https://www.luxewoodenfurniturepolishing.com',
          'telephone': '+91-9876543210',
          'image': '/Luxe assets/logo.png',
          '@id': 'https://www.luxewoodenfurniturepolishing.com',
          'sameAs': ['https://www.facebook.com/luxefurniturepolish'],
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '123 Luxury Lane',
            'addressLocality': 'Mumbai',
            'addressRegion': 'Maharashtra',
            'postalCode': '400001',
            'addressCountry': 'IN'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 19.0760,
            'longitude': 72.8777
          },
          'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'opens': '09:00',
            'closes': '18:00'
          },
          'priceRange': '₹₹₹'
        },
        service: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Premium Furniture Polishing',
          'description': 'Luxury wooden furniture polishing and restoration services',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Luxe Wooden Furniture Polishing'
          },
          'areaServed': {
            '@type': 'City',
            'name': 'Mumbai'
          },
          'serviceType': 'Furniture Polishing'
        }
      },
      primaryKeyword: 'luxury furniture polishing Mumbai',
      secondaryKeywords: ['premium furniture polish', 'luxury wood polish Mumbai', 'wooden furniture polishing services']
    };

    oldURLs = [
      '/a1-furniture-polish/services',
      '/a1-furniture-polish/wood-polishing',
      '/a1-furniture-polish/about',
      '/a1-furniture-polish/contact',
      '/services/a1-furniture-polishing-mumbai',
      '/locations/a1-furniture-polish-bandra'
    ];

    newURLs = [
      '/luxe-furniture-polishing/services',
      '/luxe-furniture-polishing/wood-polishing',
      '/luxe-furniture-polishing/about',
      '/luxe-furniture-polishing/contact',
      '/services/luxury-furniture-polishing-mumbai',
      '/locations/luxe-furniture-polish-bandra'
    ];
  });

  describe('URL Redirect Functionality', () => {
    it('should validate all old URLs are properly structured for redirection', () => {
      oldURLs.forEach(oldUrl => {
        // Old URLs should fail luxury URL validation
        expect(isLuxuryURL(oldUrl)).toBe(false);
        
        // Old URLs should be flagged by URL structure validation
        const validation = validateURLStructure(oldUrl);
        expect(validation.isValid).toBe(false);
        expect(validation.errors.length).toBeGreaterThan(0);
      });
    });

    it('should validate all new URLs follow luxury branding standards', () => {
      newURLs.forEach(newUrl => {
        // New URLs should pass luxury URL validation
        expect(isLuxuryURL(newUrl)).toBe(true);
        
        // New URLs should pass URL structure validation
        const validation = validateURLStructure(newUrl);
        expect(validation.isValid).toBe(true);
        expect(validation.errors).toHaveLength(0);
      });
    });

    it('should generate correct luxury URLs from old URLs', () => {
      const urlMappings = [
        { old: 'a1-furniture-polish/services', expected: '/luxe-furniture-polishing/services' },
        { old: 'a1-furniture-polish/wood-polishing', expected: '/luxe-furniture-polishing/wood-polishing' },
        { old: 'services/a1-furniture-polishing-mumbai', expected: '/services/luxe-furniture-polishing-mumbai' }
      ];

      urlMappings.forEach(mapping => {
        const generatedURL = generateLuxuryURL(mapping.old);
        expect(generatedURL).toBe(mapping.expected);
      });
    });

    it('should validate canonical URLs use luxury domain', () => {
      expect(luxuryPageData.canonicalUrl).toContain('luxewoodenfurniturepolishing.com');
      expect(luxuryPageData.canonicalUrl).toContain('luxe-furniture-polishing');
      expect(luxuryPageData.canonicalUrl).not.toContain('a1');
      
      const canonicalValidation = validateURLStructure(luxuryPageData.canonicalUrl);
      expect(canonicalValidation.isValid).toBe(true);
    });

    it('should validate internal links use new URL structure', () => {
      luxuryPageData.relatedServices.forEach(service => {
        expect(service.url).toContain('luxe-furniture-polishing');
        expect(service.url).not.toContain('a1');
        
        const linkValidation = validateURLStructure(service.url);
        expect(linkValidation.isValid).toBe(true);
      });
    });
  });

  describe('Schema Markup Validation', () => {
    it('should validate LocalBusiness schema contains correct luxury brand information', () => {
      const localBusiness = luxuryPageData.schema.localBusiness;
      
      // Test required schema properties
      expect(localBusiness['@context']).toBe('https://schema.org');
      expect(localBusiness['@type']).toBe('LocalBusiness');
      expect(localBusiness.name).toBe('Luxe Wooden Furniture Polishing');
      
      // Test brand consistency in schema
      const brandValidation = validateBrandNameConsistency(localBusiness.name);
      expect(brandValidation.isValid).toBe(true);
      
      // Test description contains luxury keywords
      expect(localBusiness.description).toContain('Premium');
      expect(localBusiness.description).toContain('wooden furniture');
      expect(localBusiness.description).toContain('Mumbai');
      
      // Test URL uses luxury domain
      expect(localBusiness.url).toContain('luxewoodenfurniturepolishing.com');
      
      // Test price range reflects luxury positioning
      expect(localBusiness.priceRange).toBe('₹₹₹');
    });

    it('should validate Service schema contains luxury service information', () => {
      const service = luxuryPageData.schema.service;
      
      // Test required schema properties
      expect(service['@context']).toBe('https://schema.org');
      expect(service['@type']).toBe('Service');
      expect(service.name).toContain('Premium');
      
      // Test service description contains luxury keywords
      expect(service.description).toContain('Luxury');
      expect(service.description).toContain('wooden furniture');
      
      // Test provider information
      expect(service.provider.name).toBe('Luxe Wooden Furniture Polishing');
      
      // Test area served
      expect(service.areaServed.name).toBe('Mumbai');
      
      // Test service type
      expect(service.serviceType).toBe('Furniture Polishing');
    });

    it('should validate schema markup is properly structured', () => {
      const { localBusiness, service } = luxuryPageData.schema;
      
      // Test LocalBusiness schema structure
      expect(localBusiness.address).toBeDefined();
      expect(localBusiness.address['@type']).toBe('PostalAddress');
      expect(localBusiness.address.addressLocality).toBe('Mumbai');
      expect(localBusiness.address.addressCountry).toBe('IN');
      
      expect(localBusiness.geo).toBeDefined();
      expect(localBusiness.geo['@type']).toBe('GeoCoordinates');
      expect(localBusiness.geo.latitude).toBeDefined();
      expect(localBusiness.geo.longitude).toBeDefined();
      
      expect(localBusiness.openingHoursSpecification).toBeDefined();
      expect(localBusiness.telephone).toBeDefined();
      
      // Test Service schema structure
      expect(service.provider).toBeDefined();
      expect(service.provider['@type']).toBe('LocalBusiness');
      expect(service.areaServed).toBeDefined();
      expect(service.areaServed['@type']).toBe('City');
    });

    it('should validate schema contains no old brand references', () => {
      const schemaString = JSON.stringify(luxuryPageData.schema);
      
      // Test no old brand references
      expect(schemaString).not.toContain('A1 Furniture Polish');
      expect(schemaString).not.toContain('a1furniture');
      expect(schemaString).not.toContain('a1-furniture');
      
      // Test contains new brand references
      expect(schemaString).toContain('Luxe Wooden Furniture Polishing');
      expect(schemaString).toContain('Premium');
      expect(schemaString).toContain('Luxury');
    });
  });

  describe('Luxury Keywords Integration', () => {
    it('should validate primary keyword contains luxury terms', () => {
      expect(luxuryPageData.primaryKeyword).toContain('luxury');
      expect(luxuryPageData.primaryKeyword).toContain('furniture polishing');
      expect(luxuryPageData.primaryKeyword).toContain('Mumbai');
      
      // Test keyword is properly integrated in content
      expect(luxuryPageData.title.toLowerCase()).toContain('luxe'); // Brand name contains luxury concept
      expect(luxuryPageData.metaDescription.toLowerCase()).toContain('luxury');
    });

    it('should validate secondary keywords contain luxury positioning', () => {
      luxuryPageData.secondaryKeywords.forEach(keyword => {
        expect(keyword.toLowerCase()).toMatch(/(premium|luxury|wooden|furniture|polish)/);
      });
      
      // Test secondary keywords are integrated in content
      const contentText = `${luxuryPageData.title} ${luxuryPageData.metaDescription} ${luxuryPageData.introduction}`.toLowerCase();
      
      luxuryPageData.secondaryKeywords.forEach(keyword => {
        const keywordParts = keyword.toLowerCase().split(' ');
        const hasKeywordParts = keywordParts.some(part => contentText.includes(part));
        expect(hasKeywordParts).toBe(true);
      });
    });

    it('should validate SEO content optimization', () => {
      const seoValidation = validateSEOKeywords(luxuryPageData.title, luxuryPageData.metaDescription);
      
      // Should have minimal warnings for well-optimized content
      expect(seoValidation.warnings.length).toBeLessThanOrEqual(1);
      
      // Test title optimization
      expect(luxuryPageData.title.length).toBeGreaterThan(30);
      expect(luxuryPageData.title.length).toBeLessThan(70);
      expect(luxuryPageData.title).toContain('Luxe');
      expect(luxuryPageData.title).toContain('Premium');
      expect(luxuryPageData.title).toContain('Mumbai');
      
      // Test meta description optimization
      expect(luxuryPageData.metaDescription.length).toBeGreaterThan(140);
      expect(luxuryPageData.metaDescription.length).toBeLessThan(170);
      expect(luxuryPageData.metaDescription).toContain('luxury');
      expect(luxuryPageData.metaDescription.toLowerCase()).toContain('premium');
      expect(luxuryPageData.metaDescription).toContain('Luxe Wooden Furniture Polishing');
    });

    it('should validate H1 tag contains luxury keywords', () => {
      expect(luxuryPageData.h1).toContain('Luxe');
      expect(luxuryPageData.h1).toContain('Wooden Furniture Polishing');
      
      const h1Validation = validateBrandNameConsistency(luxuryPageData.h1);
      expect(h1Validation.isValid).toBe(true);
    });

    it('should validate luxury keywords are distributed throughout content', () => {
      const contentSections = [
        luxuryPageData.introduction,
        luxuryPageData.serviceAreaDescription,
        ...luxuryPageData.services.map(s => s.description),
        ...luxuryPageData.process.map(p => p.description),
        ...luxuryPageData.whyChooseUs.map(w => w.description)
      ];

      const luxuryTerms = ['luxury', 'premium', 'high-end', 'finest', 'expert', 'professional'];
      
      contentSections.forEach(content => {
        const hasLuxuryTerm = luxuryTerms.some(term => 
          content.toLowerCase().includes(term)
        );
        expect(hasLuxuryTerm).toBe(true);
      });
    });
  });

  describe('Content Migration Validation', () => {
    it('should validate all content uses luxury brand name', () => {
      const brandName = getBrandName();
      expect(brandName).toBe('Luxe Wooden Furniture Polishing');
      
      // Test brand name appears in key content areas
      expect(luxuryPageData.title).toContain('Luxe');
      expect(luxuryPageData.metaDescription).toContain('Luxe Wooden Furniture Polishing');
      expect(luxuryPageData.h1).toContain('Luxe');
      
      // Test schema contains correct brand name
      expect(luxuryPageData.schema.localBusiness.name).toBe(brandName);
      expect(luxuryPageData.schema.service.provider.name).toBe(brandName);
    });

    it('should validate content tone matches luxury positioning', () => {
      const contentTexts = [
        luxuryPageData.introduction,
        luxuryPageData.serviceAreaDescription,
        ...luxuryPageData.services.map(s => s.name),
        ...luxuryPageData.process.map(p => p.title),
        ...luxuryPageData.whyChooseUs.map(w => w.title)
      ];

      contentTexts.forEach(text => {
        // Should contain luxury/premium terminology (case insensitive)
        expect(text).toMatch(/(Luxury|Premium|High-End|Expert|Professional|Finest|Meticulous|Comprehensive|luxury|premium)/);
      });
    });

    it('should validate pricing reflects luxury positioning', () => {
      expect(luxuryPageData.pricing.startingPrice).toBeGreaterThanOrEqual(1500);
      expect(luxuryPageData.pricing.priceRange).toContain('₹1500');
      
      luxuryPageData.pricing.factors.forEach(factor => {
        expect(factor).toMatch(/(Premium|Luxury|type|selection|requirements)/);
      });
    });

    it('should validate service areas target luxury locations', () => {
      const luxuryAreas = ['Bandra', 'Juhu', 'Powai', 'Worli'];
      luxuryAreas.forEach(area => {
        expect(luxuryPageData.locationAreas).toContain(area);
      });
      
      expect(luxuryPageData.serviceAreaDescription).toContain('premium locations');
    });
  });

  describe('Performance and Technical SEO', () => {
    it('should validate URLs are SEO-friendly', () => {
      expect(luxuryPageData.url).toMatch(/^\/[a-z0-9-\/]+$/);
      expect(luxuryPageData.canonicalUrl).toMatch(/^https:\/\/[a-z0-9.-]+\/[a-z0-9-\/]*$/);
      
      // URLs should not be too long
      expect(luxuryPageData.url.length).toBeLessThan(100);
      expect(luxuryPageData.canonicalUrl.length).toBeLessThan(150);
    });

    it('should validate meta data is optimized for search engines', () => {
      // Title optimization - allow dash separators for luxury branding
      expect(luxuryPageData.title).not.toContain('|');
      expect(luxuryPageData.title.split(' ').length).toBeGreaterThan(5);
      
      // Meta description optimization
      expect(luxuryPageData.metaDescription).toMatch(/[.!]$/); // Ends with punctuation
      expect(luxuryPageData.metaDescription.split(' ').length).toBeGreaterThanOrEqual(20);
    });

    it('should validate internal linking structure', () => {
      expect(luxuryPageData.relatedServices.length).toBeGreaterThan(0);
      
      luxuryPageData.relatedServices.forEach(service => {
        expect(service.name).toBeTruthy();
        expect(service.url).toBeTruthy();
        expect(service.url).toMatch(/^\/[a-z0-9-\/]+$/);
        expect(service.name).toContain('Luxury');
      });
    });

    it('should validate structured data is complete and valid', () => {
      const { localBusiness, service } = luxuryPageData.schema;
      
      // Required LocalBusiness fields
      const requiredLocalBusinessFields = ['@context', '@type', 'name', 'description', 'url', 'telephone', 'address', 'geo'];
      requiredLocalBusinessFields.forEach(field => {
        expect((localBusiness as any)[field]).toBeDefined();
      });
      
      // Required Service fields
      const requiredServiceFields = ['@context', '@type', 'name', 'description', 'provider', 'areaServed'];
      requiredServiceFields.forEach(field => {
        expect((service as any)[field]).toBeDefined();
      });
    });
  });
});