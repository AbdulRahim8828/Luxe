/**
 * Luxury Sitemap Generator
 * Generates XML sitemap with luxury URL structure and proper SEO metadata
 */

import { luxuryURLConfig, generateCanonicalURL } from '../config/luxuryURLConfig';
import { luxurySEOConfig } from '../config/luxurySEOConfig';

export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export interface LuxurySitemapConfig {
  baseUrl: string;
  defaultChangeFreq: SitemapEntry['changeFrequency'];
  defaultPriority: number;
  includeLastModified: boolean;
  includeImages: boolean;
}

const luxurySitemapConfig: LuxurySitemapConfig = {
  baseUrl: luxuryURLConfig.baseUrl,
  defaultChangeFreq: 'weekly',
  defaultPriority: 0.5,
  includeLastModified: true,
  includeImages: true,
};

// Core page entries with luxury positioning
const getCorePageEntries = (): SitemapEntry[] => {
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: generateCanonicalURL('/'),
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: generateCanonicalURL('/about'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: generateCanonicalURL('/services'),
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: generateCanonicalURL('/contact'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: generateCanonicalURL('/blog'),
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.6,
    },
  ];
};

// Luxury service page entries
const getLuxuryServiceEntries = (): SitemapEntry[] => {
  const currentDate = new Date().toISOString();
  
  const luxuryServices = [
    'luxury-wooden-furniture-polishing',
    'premium-sofa-chair-polishing',
    'luxury-table-bed-polishing',
    'luxury-antique-restoration',
    'executive-office-polishing',
    'premium-door-polishing',
    'luxury-wardrobe-polishing',
    'premium-cabinet-polishing',
    'luxury-dining-table-polishing',
    'premium-bed-polishing',
    'luxury-sofa-wood-polishing',
    'sacred-mandir-polishing',
    'premium-jhula-polishing',
    'luxury-bookshelf-polishing',
    'premium-tv-unit-polishing',
  ];
  
  return luxuryServices.map(service => ({
    url: generateCanonicalURL(`/services/${service}`),
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
};

// Luxury location page entries
const getLuxuryLocationEntries = (): SitemapEntry[] => {
  const currentDate = new Date().toISOString();
  
  const luxuryLocations = [
    'luxury-furniture-polishing-mumbai',
    'premium-furniture-polishing-andheri',
    'luxury-furniture-polishing-bandra',
    'premium-furniture-polishing-goregaon',
    'luxury-furniture-polishing-powai',
    'premium-furniture-polishing-jogeshwari',
    'luxury-furniture-polishing-malad',
    'premium-furniture-polishing-kandivali',
    'luxury-furniture-polishing-borivali',
    'premium-furniture-polishing-juhu',
    'luxury-furniture-polishing-khar',
    'premium-furniture-polishing-santa-cruz',
    'luxury-furniture-polishing-vile-parle',
    'premium-furniture-polishing-dadar',
    'luxury-furniture-polishing-matunga',
    'premium-furniture-polishing-kurla',
    'luxury-furniture-polishing-ghatkopar',
    'premium-furniture-polishing-vikhroli',
    'luxury-furniture-polishing-bhandup',
    'premium-furniture-polishing-mulund',
    'luxury-furniture-polishing-thane',
    'premium-furniture-polishing-navi-mumbai',
    'luxury-furniture-polishing-vashi',
    'premium-furniture-polishing-chembur',
  ];
  
  return luxuryLocations.map(location => ({
    url: generateCanonicalURL(`/locations/${location}`),
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
};

// Generate complete sitemap entries
export const generateLuxurySitemapEntries = (): SitemapEntry[] => {
  const entries: SitemapEntry[] = [];
  
  // Add core pages
  entries.push(...getCorePageEntries());
  
  // Add luxury service pages
  entries.push(...getLuxuryServiceEntries());
  
  // Add luxury location pages
  entries.push(...getLuxuryLocationEntries());
  
  // Sort by priority (highest first) then by URL
  return entries.sort((a, b) => {
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }
    return a.url.localeCompare(b.url);
  });
};

// Generate XML sitemap
export const generateLuxurySitemapXML = (): string => {
  const entries = generateLuxurySitemapEntries();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  entries.forEach(entry => {
    xml += '  <url>\n';
    xml += `    <loc>${entry.url}</loc>\n`;
    
    if (luxurySitemapConfig.includeLastModified) {
      xml += `    <lastmod>${entry.lastModified}</lastmod>\n`;
    }
    
    xml += `    <changefreq>${entry.changeFrequency}</changefreq>\n`;
    xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Generate robots.txt with luxury sitemap
export const generateLuxuryRobotsTxt = (): string => {
  const sitemapUrl = `${luxuryURLConfig.baseUrl}/sitemap.xml`;
  
  let robotsTxt = 'User-agent: *\n';
  robotsTxt += 'Allow: /\n\n';
  
  // Disallow old brand URLs
  robotsTxt += '# Disallow old brand URLs\n';
  robotsTxt += 'Disallow: /a1-*\n';
  robotsTxt += 'Disallow: /A1-*\n';
  robotsTxt += 'Disallow: /*a1-furniture-polish*\n';
  robotsTxt += 'Disallow: /*affordable-*\n\n';
  
  // Allow luxury URLs
  robotsTxt += '# Allow luxury URLs\n';
  robotsTxt += 'Allow: /luxury-*\n';
  robotsTxt += 'Allow: /premium-*\n';
  robotsTxt += 'Allow: /executive-*\n';
  robotsTxt += 'Allow: /sacred-*\n\n';
  
  robotsTxt += `Sitemap: ${sitemapUrl}\n`;
  
  return robotsTxt;
};

// Validate sitemap entries
export const validateLuxurySitemap = (entries: SitemapEntry[]): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  entries.forEach((entry, index) => {
    // Validate URL format
    try {
      new URL(entry.url);
    } catch {
      errors.push(`Entry ${index + 1}: Invalid URL format - ${entry.url}`);
    }
    
    // Validate priority range
    if (entry.priority < 0 || entry.priority > 1) {
      errors.push(`Entry ${index + 1}: Priority must be between 0 and 1 - ${entry.priority}`);
    }
    
    // Validate change frequency
    const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
    if (!validFreqs.includes(entry.changeFrequency)) {
      errors.push(`Entry ${index + 1}: Invalid change frequency - ${entry.changeFrequency}`);
    }
    
    // Check for luxury keywords
    const hasLuxuryKeywords = ['luxury', 'premium', 'executive', 'sacred'].some(keyword => 
      entry.url.includes(keyword)
    );
    
    if (!hasLuxuryKeywords && !entry.url.endsWith('/') && !entry.url.includes('/blog') && !entry.url.includes('/about') && !entry.url.includes('/contact')) {
      errors.push(`Entry ${index + 1}: URL should contain luxury keywords - ${entry.url}`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Get sitemap statistics
export const getLuxurySitemapStats = (): {
  totalEntries: number;
  corePages: number;
  servicePages: number;
  locationPages: number;
  averagePriority: number;
  lastGenerated: string;
} => {
  const entries = generateLuxurySitemapEntries();
  const corePages = getCorePageEntries().length;
  const servicePages = getLuxuryServiceEntries().length;
  const locationPages = getLuxuryLocationEntries().length;
  
  const averagePriority = entries.reduce((sum, entry) => sum + entry.priority, 0) / entries.length;
  
  return {
    totalEntries: entries.length,
    corePages,
    servicePages,
    locationPages,
    averagePriority: Math.round(averagePriority * 100) / 100,
    lastGenerated: new Date().toISOString(),
  };
};

// Export utility functions
export const luxurySitemapUtils = {
  generateLuxurySitemapEntries,
  generateLuxurySitemapXML,
  generateLuxuryRobotsTxt,
  validateLuxurySitemap,
  getLuxurySitemapStats,
};