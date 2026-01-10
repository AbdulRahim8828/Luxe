/**
 * Luxe Wooden Furniture Polishing Brand System
 * Centralized brand configuration for consistent luxury styling
 */

export interface BrandColors {
  primary: string;      // Jet Black
  accent: string;       // Royal Gold
  secondary: string;    // Champagne Gold
  textPrimary: string;  // Ivory White
  textSecondary: string; // Warm Grey
}

export interface TypographyConfig {
  headings: string;
  body: string;
  letterSpacing: {
    headings: string;
    luxury: string;
  };
}

export interface SpacingConfig {
  section: string;
  component: string;
  element: string;
}

export interface BrandSystem {
  colors: BrandColors;
  typography: TypographyConfig;
  spacing: SpacingConfig;
}

export interface BrandConfig {
  name: string;
  positioning: string;
  targetAudience: string[];
  serviceAreas: string[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface HeroSection {
  title: {
    primary: string;
    secondary: string;
    tagline: string;
  };
  cta: {
    primary: {
      text: string;
      style: string;
    };
    secondary: {
      text: string;
      style: string;
    };
  };
  background: {
    type: string;
    image: string;
  };
}

export interface NavigationConfig {
  logo: {
    text: string;
    style: string;
  };
  menu: {
    style: string;
    animations: string;
  };
  mobile: {
    type: string;
    trigger: string;
  };
}

export interface ServiceCardConfig {
  hover: {
    animation: string;
    overlay: string;
  };
  pricing: {
    display: string;
    cta: string;
  };
  image: {
    style: string;
  };
}

export interface ContentManagerConfig {
  brandName: string;
  tone: {
    style: string;
    sentenceLength: string;
    vocabulary: string;
  };
  seo: {
    keywords: string[];
    metaTemplates: string[];
  };
}

// Brand System Configuration
export const brandSystem: BrandSystem = {
  colors: {
    primary: '#0E0E0E',      // Jet Black
    accent: '#D4AF37',       // Royal Gold (WCAG AA compliant)
    secondary: '#B8A052',    // Champagne Gold (WCAG AA compliant)  
    textPrimary: '#F5F5F5',  // Ivory White
    textSecondary: '#4A4A4A', // Darker Warm Grey (WCAG AA compliant)
  },
  typography: {
    headings: 'Playfair Display',
    body: 'Poppins',
    letterSpacing: {
      headings: '0.02em',
      luxury: '0.1em',
    },
  },
  spacing: {
    section: '120px',
    component: '60px',
    element: '24px',
  },
};

// Brand Configuration
export const brandConfig: BrandConfig = {
  name: 'Luxe Wooden Furniture Polishing',
  positioning: 'luxury-furniture-care',
  targetAudience: [
    'luxury-homes',
    'villas',
    'premium-apartments',
    'offices',
    'interior-designers'
  ],
  serviceAreas: [
    'Mumbai',
    'Bandra',
    'Andheri',
    'Juhu',
    'Goregaon',
    'Jogeshwari',
    'Powai',
    'South Mumbai'
  ],
  contactInfo: {
    phone: '+91 8828709945',
    email: 'A1furniturepolishservice@gmail.com',
    address: 'Shop No 18, Akbar Ali Compound, Relief Road, near HK College, Oshiwara, Jogeshwari West, Mumbai, Maharashtra 400102'
  }
};

// Hero Section Configuration
export const heroConfig: HeroSection = {
  title: {
    primary: 'LUXE',
    secondary: 'Wooden Furniture Polishing',
    tagline: 'Luxury Finish for Timeless Furniture',
  },
  cta: {
    primary: {
      text: 'Get a Free Inspection',
      style: 'solid-gold',
    },
    secondary: {
      text: 'View Our Work',
      style: 'outline-gold',
    },
  },
  background: {
    type: 'gradient-overlay',
    image: 'luxury-furniture-hero.jpg',
  },
};

// Navigation Configuration
export const navigationConfig: NavigationConfig = {
  logo: {
    text: 'Luxe Wooden Furniture Polishing',
    style: 'luxury-typography',
  },
  menu: {
    style: 'minimal-luxury',
    animations: 'subtle-hover',
  },
  mobile: {
    type: 'elegant-drawer',
    trigger: 'gold-hamburger',
  },
};

// Service Card Configuration
export const serviceCardConfig: ServiceCardConfig = {
  hover: {
    animation: 'subtle-lift',
    overlay: 'gold-gradient',
  },
  pricing: {
    display: 'premium-format',
    cta: 'gold-button',
  },
  image: {
    style: 'luxury-overlay',
  },
};

// Content Manager Configuration
export const contentManagerConfig: ContentManagerConfig = {
  brandName: 'Luxe Wooden Furniture Polishing',
  tone: {
    style: 'professional-premium',
    sentenceLength: 'short-impactful',
    vocabulary: 'luxury-focused',
  },
  seo: {
    keywords: [
      'Wooden Furniture Polishing in Mumbai',
      'Luxury Furniture Polishing Services',
      'Premium Furniture Care Mumbai',
      'Luxury Wooden Furniture Restoration',
      'High-end Furniture Polishing',
    ],
    metaTemplates: [
      'Luxury {service} in {location} | Luxe Wooden Furniture Polishing',
      'Premium {service} Services | Luxe Wooden Furniture Polishing',
      'Professional {service} in {location} - Luxe Quality',
    ],
  },
};

// Design Tokens for CSS Variables
export const designTokens = {
  colors: {
    '--luxe-primary': brandSystem.colors.primary,
    '--luxe-accent': brandSystem.colors.accent,
    '--luxe-secondary': brandSystem.colors.secondary,
    '--luxe-text-primary': brandSystem.colors.textPrimary,
    '--luxe-text-secondary': brandSystem.colors.textSecondary,
  },
  typography: {
    '--luxe-font-headings': brandSystem.typography.headings,
    '--luxe-font-body': brandSystem.typography.body,
    '--luxe-letter-spacing-headings': brandSystem.typography.letterSpacing.headings,
    '--luxe-letter-spacing-luxury': brandSystem.typography.letterSpacing.luxury,
  },
  spacing: {
    '--luxe-spacing-section': brandSystem.spacing.section,
    '--luxe-spacing-component': brandSystem.spacing.component,
    '--luxe-spacing-element': brandSystem.spacing.element,
  },
};

// Utility functions for brand consistency
export const getBrandName = (): string => brandConfig.name;

export const getPrimaryColor = (): string => brandSystem.colors.primary;

export const getAccentColor = (): string => brandSystem.colors.accent;

export const getHeadingFont = (): string => brandSystem.typography.headings;

export const getBodyFont = (): string => brandSystem.typography.body;

export const getLuxuryKeywords = (): string[] => contentManagerConfig.seo.keywords;

export const getTargetAudience = (): string[] => brandConfig.targetAudience;

export const getServiceAreas = (): string[] => brandConfig.serviceAreas;

export const getHeroConfig = (): HeroSection => heroConfig;

export const getNavigationConfig = (): NavigationConfig => navigationConfig;

export const getServiceCardConfig = (): ServiceCardConfig => serviceCardConfig;

export const getContentManagerConfig = (): ContentManagerConfig => contentManagerConfig;