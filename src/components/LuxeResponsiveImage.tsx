import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export const LuxeResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false
}) => {
  // Extract base name from src
  const baseName = src.replace('/assets/', '').replace(/\.[^/.]+$/, '');
  const baseUrl = '/assets/optimized/';
  
  // Generate srcSet for different formats and sizes
  const generateSrcSet = (format: string) => {
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    return sizes
      .map(size => `${baseUrl}${baseName}-${size}w.${format} ${size}w`)
      .join(', ');
  };
  
  return (
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
        className="w-full h-auto"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
};

export default LuxeResponsiveImage;