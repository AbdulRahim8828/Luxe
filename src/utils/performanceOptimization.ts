/**
 * Performance optimization utilities for Luxe Wooden Furniture Polishing
 * Implements lazy loading, resource preloading, and performance monitoring
 */

import React from 'react';

// Intersection Observer for lazy loading
export const createLazyLoadObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical resources
export const preloadResource = (
  href: string,
  as: 'image' | 'font' | 'script' | 'style' | 'fetch',
  type?: string,
  crossorigin?: boolean
): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  
  if (type) {
    link.type = type;
  }
  
  if (crossorigin) {
    link.crossOrigin = 'anonymous';
  }
  
  document.head.appendChild(link);
};

// Preload critical luxury fonts
export const preloadLuxuryFonts = (): void => {
  // Preload Playfair Display (headings)
  preloadResource(
    'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtXK-F2qO0isEw.woff2',
    'font',
    'font/woff2',
    true
  );
  
  // Preload Poppins (body text)
  preloadResource(
    'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2',
    'font',
    'font/woff2',
    true
  );
};

// Preload critical luxury images
export const preloadCriticalImages = (): void => {
  const criticalImages = [
    '/assets/optimized/luxe-polishing-sofa-640w.webp',
    '/assets/optimized/luxe-furniture-wooden-collection-640w.webp',
    '/assets/optimized/luxe-process-consultation-booking-640w.webp',
  ];
  
  criticalImages.forEach(src => {
    preloadResource(src, 'image');
  });
};

// Lazy load non-critical components
export const lazyLoadComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ComponentType
): React.LazyExoticComponent<T> => {
  return React.lazy(importFunc);
};

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void): void => {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  } else {
    fn();
  }
};

// Web Vitals monitoring (optional)
export const reportWebVitals = (metric: any): void => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    console.log('Web Vital:', metric);
    
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  }
};

// Initialize web vitals monitoring (runtime only)
const initWebVitals = async (): Promise<void> => {
  if (typeof window === 'undefined') return;
  
  try {
    // Dynamic import at runtime only - using correct web-vitals v3+ API
    const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals');
    onCLS(reportWebVitals);
    onFID(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  } catch (error) {
    // web-vitals not available, continue without it
    console.log('Web Vitals monitoring not available - continuing without performance metrics');
  }
};

// Resource hints for better performance
export const addResourceHints = (): void => {
  // DNS prefetch for external domains
  const dnsPrefetchDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
  ];
  
  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
  
  // Preconnect to critical domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];
  
  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Image optimization utilities
export const getOptimizedImageSrc = (
  baseName: string,
  width: number,
  format: 'avif' | 'webp' | 'jpg' = 'webp'
): string => {
  const baseUrl = '/assets/optimized/';
  return `${baseUrl}${baseName}-${width}w.${format}`;
};

export const generateResponsiveSrcSet = (
  baseName: string,
  format: 'avif' | 'webp' | 'jpg' = 'webp'
): string => {
  const sizes = [320, 640, 768, 1024, 1280, 1920];
  return sizes
    .map(size => `${getOptimizedImageSrc(baseName, size, format)} ${size}w`)
    .join(', ');
};

// Bundle optimization utilities
export const loadChunkOnDemand = async (chunkName: string): Promise<any> => {
  try {
    // Dynamic import for code splitting - using switch for static analysis
    switch (chunkName) {
      case 'ServiceCard':
        return (await import('../components/ServiceCard.tsx')).default;
      case 'BookingModal':
        return (await import('../components/BookingModal.tsx')).default;
      case 'ExitIntentPopup':
        return (await import('../components/ExitIntentPopup.tsx')).default;
      case 'ServiceDetailModal':
        return (await import('../components/ServiceDetailModal.tsx')).default;
      case 'OurProcess':
        return (await import('../components/OurProcess.tsx')).default;
      case 'StatsCounter':
        return (await import('../components/StatsCounter.tsx')).default;
      default:
        console.warn(`Unknown chunk: ${chunkName}`);
        return null;
    }
  } catch (error) {
    console.error(`Failed to load chunk: ${chunkName}`, error);
    return null;
  }
};

// Critical CSS inlining utility
export const inlineCriticalCSS = (css: string): void => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Service Worker registration for caching
export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Initialize performance optimizations
export const initializePerformanceOptimizations = (): void => {
  // Add resource hints
  addResourceHints();
  
  // Preload critical resources
  preloadLuxuryFonts();
  preloadCriticalImages();
  
  // Register service worker
  registerServiceWorker();
  
  // Initialize web vitals monitoring (async, non-blocking)
  initWebVitals();
};

export default {
  createLazyLoadObserver,
  preloadResource,
  preloadLuxuryFonts,
  preloadCriticalImages,
  measurePerformance,
  reportWebVitals,
  addResourceHints,
  getOptimizedImageSrc,
  generateResponsiveSrcSet,
  loadChunkOnDemand,
  inlineCriticalCSS,
  registerServiceWorker,
  initializePerformanceOptimizations,
};