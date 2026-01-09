import React, { useState, useRef, useEffect } from 'react';

// Luxe-specific image optimization settings
const LUXE_IMAGE_QUALITY = 85; // High quality for luxury brand
const LUXE_FORMATS = ['avif', 'webp', 'jpg'];
const LUXE_SIZES = [320, 640, 768, 1024, 1280, 1920];

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number; // Required to prevent CLS
  height: number; // Required to prevent CLS
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string; // Responsive sizes attribute
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  threshold?: number; // Intersection observer threshold
  rootMargin?: string; // Intersection observer root margin
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  objectFit = 'cover',
  threshold = 0.1,
  rootMargin = '50px',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return; // Skip if priority or already in view

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView, threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Calculate aspect ratio for maintaining proportions
  const aspectRatio = (height / width) * 100;

  // Determine loading strategy
  const loadingStrategy = priority ? 'eager' : loading;
  const fetchPriority = priority ? 'high' : 'auto';

  // Object fit classes
  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  }[objectFit];

  // Generate responsive image sources
  const generateSrcSet = (format: string) => {
    const baseName = src.replace('/Luxe assets/optimized/', '').replace(/\.[^/.]+$/, '');
    const baseUrl = '/Luxe assets/optimized/optimized/';
    
    return LUXE_SIZES
      .map(size => `${baseUrl}${baseName}-${size}w.${format} ${size}w`)
      .join(', ');
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Aspect ratio container to prevent CLS */}
      <div style={{ paddingBottom: `${aspectRatio}%` }} className="relative">
        {/* Loading placeholder with luxury styling */}
        {!isLoaded && !hasError && isInView && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse"></div>
          </div>
        )}

        {/* Lazy loading placeholder when not in view */}
        {!isInView && !priority && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-luxe-accent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Optimized picture element with multiple formats */}
        {(isInView || priority) && (
          <picture className="absolute inset-0">
            {/* AVIF format for modern browsers */}
            <source
              srcSet={generateSrcSet('avif')}
              sizes={sizes}
              type="image/avif"
            />
            
            {/* WebP format for good browser support */}
            <source
              srcSet={generateSrcSet('webp')}
              sizes={sizes}
              type="image/webp"
            />
            
            {/* JPEG fallback for all browsers */}
            <source
              srcSet={generateSrcSet('jpg')}
              sizes={sizes}
              type="image/jpeg"
            />

            {/* Fallback img element */}
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={loadingStrategy}
              decoding="async"
              fetchPriority={fetchPriority as 'high' | 'low' | 'auto'}
              onLoad={handleLoad}
              onError={handleError}
              className={`absolute inset-0 w-full h-full ${objectFitClass} transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </picture>
        )}

        {/* Error state with luxury fallback */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-2 bg-luxe-accent rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 luxe-body">Image not available</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptimizedImage;