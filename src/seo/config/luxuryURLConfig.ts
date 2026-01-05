/**
 * Luxury URL Configuration for Luxe Wooden Furniture Polishing
 * Clean URL structure and redirect management for the rebrand
 */

import { brandConfig } from '../../config/brand';

export interface URLMapping {
  oldUrl: string;
  newUrl: string;
  redirectType: 301 | 302;
  description: string;
}

export interface LuxuryURLConfig {
  baseUrl: string;
  brandSlug: string;
  urlPatterns: {
    home: string;
    about: string;
    services: string;
    contact: string;
    blog: string;
    blogPost: string;
    service: string;
    location: string;
    serviceLocation: string;
  };
  redirectMappings: URLMapping[];
}

// Luxury URL Configuration
export const luxuryURLConfig: LuxuryURLConfig = {
  baseUrl: 'https://luxewoodenfurniturepolishing.com',
  brandSlug: 'luxe',
  urlPatterns: {
    home: '/',
    about: '/about',
    services: '/services',
    contact: '/contact',
    blog: '/blog',
    blogPost: '/blog/{slug}',
    service: '/services/{service-slug}',
    location: '/locations/{location-slug}',
    serviceLocation: '/services/{service-slug}/{location-slug}',
  },
  redirectMappings: [
    // Brand name redirects
    {
      oldUrl: '/a1-furniture-polish',
      newUrl: '/',
      redirectType: 301,
      description: 'Redirect old brand name to home'
    },
    {
      oldUrl: '/a1-polish',
      newUrl: '/',
      redirectType: 301,
      description: 'Redirect old brand name to home'
    },
    
    // Service page redirects - Update to luxury naming
    {
      oldUrl: '/furniture-polish-services',
      newUrl: '/services',
      redirectType: 301,
      description: 'Redirect old services URL to new luxury services'
    },
    {
      oldUrl: '/wooden-furniture-polish',
      newUrl: '/services/luxury-wooden-furniture-polishing',
      redirectType: 301,
      description: 'Redirect to luxury wooden furniture polishing'
    },
    {
      oldUrl: '/sofa-chair-polishing',
      newUrl: '/services/premium-sofa-chair-polishing',
      redirectType: 301,
      description: 'Redirect to premium sofa chair polishing'
    },
    {
      oldUrl: '/table-and-bed-polishing',
      newUrl: '/services/luxury-table-bed-polishing',
      redirectType: 301,
      description: 'Redirect to luxury table and bed polishing'
    },
    {
      oldUrl: '/antique-restoration',
      newUrl: '/services/luxury-antique-restoration',
      redirectType: 301,
      description: 'Redirect to luxury antique restoration'
    },
    {
      oldUrl: '/commercial-polishing',
      newUrl: '/services/executive-office-polishing',
      redirectType: 301,
      description: 'Redirect to executive office polishing'
    },
    
    // Location page redirects - Update to luxury naming
    {
      oldUrl: '/goregaon-furniture-polish',
      newUrl: '/locations/luxury-furniture-polishing-goregaon',
      redirectType: 301,
      description: 'Redirect to luxury furniture polishing in Goregaon'
    },
    {
      oldUrl: '/powai-furniture-polish',
      newUrl: '/locations/luxury-furniture-polishing-powai',
      redirectType: 301,
      description: 'Redirect to luxury furniture polishing in Powai'
    },
    {
      oldUrl: '/andheri-furniture-polish',
      newUrl: '/locations/luxury-furniture-polishing-andheri',
      redirectType: 301,
      description: 'Redirect to luxury furniture polishing in Andheri'
    },
    {
      oldUrl: '/bandra-furniture-polish',
      newUrl: '/locations/luxury-furniture-polishing-bandra',
      redirectType: 301,
      description: 'Redirect to luxury furniture polishing in Bandra'
    },
    
    // Generated page redirects - Update to luxury keywords
    {
      oldUrl: '/services/affordable-furniture-polishing-mumbai',
      newUrl: '/services/luxury-furniture-polishing-mumbai',
      redirectType: 301,
      description: 'Redirect affordable to luxury furniture polishing'
    },
    {
      oldUrl: '/services/best-furniture-polishing-mumbai',
      newUrl: '/services/premium-furniture-polishing-mumbai',
      redirectType: 301,
      description: 'Redirect best to premium furniture polishing'
    },
    {
      oldUrl: '/services/professional-furniture-polishing-mumbai',
      newUrl: '/services/luxury-furniture-polishing-mumbai',
      redirectType: 301,
      description: 'Redirect professional to luxury furniture polishing'
    },
    
    // Old blog redirects
    {
      oldUrl: '/blog/a1-furniture-polish-tips',
      newUrl: '/blog/luxury-furniture-care-tips',
      redirectType: 301,
      description: 'Redirect old blog posts to luxury content'
    },
    
    // Contact page variations
    {
      oldUrl: '/contact-a1-polish',
      newUrl: '/contact',
      redirectType: 301,
      description: 'Redirect old contact URL to new contact page'
    },
    {
      oldUrl: '/get-quote',
      newUrl: '/contact',
      redirectType: 301,
      description: 'Redirect quote requests to contact page'
    },
  ]
};

// URL Generation Functions
export const generateLuxuryURL = (pattern: keyof LuxuryURLConfig['urlPatterns'], variables: Record<string, string> = {}): string => {
  let url = luxuryURLConfig.urlPatterns[pattern];
  
  Object.entries(variables).forEach(([key, value]) => {
    const placeholder = `{${key}}`;
    url = url.replace(placeholder, value);
  });
  
  return url;
};

export const generateServiceURL = (serviceSlug: string): string => {
  return generateLuxuryURL('service', { 'service-slug': serviceSlug });
};

export const generateLocationURL = (locationSlug: string): string => {
  return generateLuxuryURL('location', { 'location-slug': locationSlug });
};

export const generateServiceLocationURL = (serviceSlug: string, locationSlug: string): string => {
  return generateLuxuryURL('serviceLocation', { 
    'service-slug': serviceSlug, 
    'location-slug': locationSlug 
  });
};

export const generateBlogPostURL = (slug: string): string => {
  return generateLuxuryURL('blogPost', { slug });
};

// Luxury URL Slug Generation
export const generateLuxurySlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

// Service slug mappings for luxury positioning
export const luxuryServiceSlugs: Record<string, string> = {
  'wooden-furniture-polish': 'luxury-wooden-furniture-polishing',
  'sofa-chair-polishing': 'premium-sofa-chair-polishing',
  'table-bed-polishing': 'luxury-table-bed-polishing',
  'antique-restoration': 'luxury-antique-restoration',
  'commercial-polishing': 'executive-office-polishing',
  'door-polishing': 'premium-door-polishing',
  'wardrobe-polishing': 'luxury-wardrobe-polishing',
  'cabinet-polishing': 'premium-cabinet-polishing',
  'dining-table-polishing': 'luxury-dining-table-polishing',
  'bed-polishing': 'premium-bed-polishing',
  'sofa-wood-polish': 'luxury-sofa-wood-polishing',
  'mandir-polish': 'sacred-mandir-polishing',
  'jhula-polish': 'premium-jhula-polishing',
  'bookshelf-polish': 'luxury-bookshelf-polishing',
  'tv-unit-polish': 'premium-tv-unit-polishing',
};

// Location slug mappings for luxury positioning
export const luxuryLocationSlugs: Record<string, string> = {
  'mumbai': 'luxury-mumbai',
  'andheri': 'luxury-andheri',
  'bandra': 'premium-bandra',
  'goregaon': 'luxury-goregaon',
  'powai': 'premium-powai',
  'jogeshwari': 'luxury-jogeshwari',
  'malad': 'premium-malad',
  'kandivali': 'luxury-kandivali',
  'borivali': 'premium-borivali',
  'juhu': 'luxury-juhu',
  'khar': 'premium-khar',
  'santa-cruz': 'luxury-santa-cruz',
  'vile-parle': 'premium-vile-parle',
  'dadar': 'luxury-dadar',
  'matunga': 'premium-matunga',
  'kurla': 'luxury-kurla',
  'ghatkopar': 'premium-ghatkopar',
  'vikhroli': 'luxury-vikhroli',
  'bhandup': 'premium-bhandup',
  'mulund': 'luxury-mulund',
  'thane': 'premium-thane',
  'navi-mumbai': 'luxury-navi-mumbai',
  'vashi': 'premium-vashi',
  'chembur': 'luxury-chembur',
};

// Redirect Management Functions
export const findRedirectMapping = (oldUrl: string): URLMapping | undefined => {
  return luxuryURLConfig.redirectMappings.find(mapping => mapping.oldUrl === oldUrl);
};

export const getAllRedirectMappings = (): URLMapping[] => {
  return luxuryURLConfig.redirectMappings;
};

export const addRedirectMapping = (mapping: URLMapping): void => {
  luxuryURLConfig.redirectMappings.push(mapping);
};

// URL Validation Functions
export const isLuxuryURL = (url: string): boolean => {
  const luxuryKeywords = ['luxury', 'premium', 'executive', 'sacred'];
  return luxuryKeywords.some(keyword => url.includes(keyword));
};

export const validateLuxuryURL = (url: string): boolean => {
  // Check if URL follows luxury naming conventions
  const hasLuxuryKeywords = isLuxuryURL(url);
  const hasCleanStructure = !url.includes('_') && !url.includes(' ');
  const hasProperSlashes = url.startsWith('/') && !url.endsWith('/') || url === '/';
  
  return hasLuxuryKeywords && hasCleanStructure && hasProperSlashes;
};

// Canonical URL Generation
export const generateCanonicalURL = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${luxuryURLConfig.baseUrl}${cleanPath}`;
};

// Sitemap URL Generation
export const generateSitemapURLs = (): string[] => {
  const urls: string[] = [];
  
  // Add main pages
  urls.push(generateCanonicalURL('/'));
  urls.push(generateCanonicalURL('/about'));
  urls.push(generateCanonicalURL('/services'));
  urls.push(generateCanonicalURL('/contact'));
  urls.push(generateCanonicalURL('/blog'));
  
  // Add service pages
  Object.values(luxuryServiceSlugs).forEach(slug => {
    urls.push(generateCanonicalURL(`/services/${slug}`));
  });
  
  // Add location pages
  Object.values(luxuryLocationSlugs).forEach(slug => {
    urls.push(generateCanonicalURL(`/locations/${slug}`));
  });
  
  return urls;
};

// Export utility functions
export const luxuryURLUtils = {
  generateLuxuryURL,
  generateServiceURL,
  generateLocationURL,
  generateServiceLocationURL,
  generateBlogPostURL,
  generateLuxurySlug,
  findRedirectMapping,
  getAllRedirectMappings,
  addRedirectMapping,
  isLuxuryURL,
  validateLuxuryURL,
  generateCanonicalURL,
  generateSitemapURLs,
};