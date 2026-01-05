import React, { useState, useRef, useEffect } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  threshold?: number;
  rootMargin?: string;
  width?: number;
  height?: number;
}

export const LuxeResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  threshold = 0.1,
  rootMargin = '50px',
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Extract base name from src
  const baseName = src.replace('/assets/', '').replace(/\.[^/.]+$/, '');
  const baseUrl = '/assets/optimized/';
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

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
  
  // Generate srcSet for different formats and sizes
  const generateSrcSet = (format: string) => {
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    return sizes
      .map(size => `${baseUrl}${baseName}-${size}w.${format} ${size}w`)
      .join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };
  
  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && isInView && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse rounded-lg"></div>
        </div>
      )}

      {/* Lazy loading placeholder when not in view */}
      {!isInView && !priority && (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-lg">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-luxe-accent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Optimized picture element */}
      {(isInView || priority) && (
        <picture className={className}>
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
            src={`${baseUrl}${baseName}.jpg`}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-auto transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={handleLoad}
            onError={handleError}
          />
        </picture>
      )}

      {/* Error state */}
      {hasError && (
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg">
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
  );
};

export default LuxeResponsiveImage;