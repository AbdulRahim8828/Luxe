// Luxe Image Optimization Utilities

export interface ImageSizes {
  mobile: number;
  tablet: number;
  desktop: number;
  large: number;
}

export const luxeImageSizes: ImageSizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  large: 1920
};

export const luxeImageFormats = ['avif', 'webp', 'jpg'] as const;
export type LuxeImageFormat = typeof luxeImageFormats[number];

// Generate optimized image URL
export function getLuxeImageUrl(
  baseName: string, 
  size?: number, 
  format: LuxeImageFormat = 'webp'
): string {
  const baseUrl = '/Luxe assets/optimized/';
  const sizeStr = size ? `-${size}w` : '';
  return `${baseUrl}${baseName}${sizeStr}.${format}`;
}

// Generate responsive image srcSet
export function generateLuxeSrcSet(baseName: string, format: LuxeImageFormat = 'webp'): string {
  const sizes = [320, 640, 768, 1024, 1280, 1920];
  return sizes
    .map(size => `${getLuxeImageUrl(baseName, size, format)} ${size}w`)
    .join(', ');
}

// Get optimal image size based on container width
export function getOptimalImageSize(containerWidth: number): number {
  if (containerWidth <= 320) return 320;
  if (containerWidth <= 640) return 640;
  if (containerWidth <= 768) return 768;
  if (containerWidth <= 1024) return 1024;
  if (containerWidth <= 1280) return 1280;
  return 1920;
}

// Preload critical images
export function preloadLuxeImage(baseName: string, format: LuxeImageFormat = 'webp'): void {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = getLuxeImageUrl(baseName, undefined, format);
  document.head.appendChild(link);
}

// Lazy load images with intersection observer
export function setupLuxeLazyLoading(): void {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}