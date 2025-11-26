import React, { useState } from 'react';
import {
  getOptimizedImagePath,
  generateSrcSet,
  COMMON_SIZES,
} from '../utils/imageHelpers';

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
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = COMMON_SIZES.content,
  objectFit = 'cover',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  // Generate srcsets for different formats
  const avifSrcSet = generateSrcSet(src, 'avif', width);
  const webpSrcSet = generateSrcSet(src, 'webp', width);
  const jpgSrcSet = generateSrcSet(src, 'jpg', width);

  // Fallback image path
  const fallbackSrc = getOptimizedImagePath(src, undefined, 'jpg');

  // Object fit classes
  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  }[objectFit];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Aspect ratio container to prevent CLS */}
      <div style={{ paddingBottom: `${aspectRatio}%` }} className="relative">
        {/* Loading placeholder */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}

        {/* Picture element with modern formats */}
        <picture>
          {/* AVIF format - best compression */}
          <source
            type="image/avif"
            srcSet={avifSrcSet}
            sizes={sizes}
          />

          {/* WebP format - good compression with wide support */}
          <source
            type="image/webp"
            srcSet={webpSrcSet}
            sizes={sizes}
          />

          {/* JPG fallback - universal support */}
          <source
            type="image/jpeg"
            srcSet={jpgSrcSet}
            sizes={sizes}
          />

          {/* Fallback img element */}
          <img
            src={fallbackSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loadingStrategy}
            decoding="async"
            fetchPriority={fetchPriority as 'high' | 'low' | 'auto'}
            onLoad={handleLoad}
            onError={handleError}
            className={`absolute inset-0 w-full h-full ${objectFitClass} transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </picture>

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-sm">Image not available</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptimizedImage;
