import { useState, useEffect, useRef } from 'react';

interface UseLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook for lazy loading components and images
 * Optimized for Luxe Wooden Furniture Polishing performance
 */
export const useLazyLoading = (options: UseLazyLoadingOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
  } = options;

  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return {
    elementRef,
    isInView,
    isLoaded,
    handleLoad,
  };
};

/**
 * Hook for preloading images when they're about to come into view
 */
export const useImagePreloader = (src: string, options: UseLazyLoadingOptions = {}) => {
  const { isInView, elementRef } = useLazyLoading(options);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isInView && src && !imageLoaded && !imageError) {
      const img = new Image();
      
      img.onload = () => {
        setImageLoaded(true);
      };
      
      img.onerror = () => {
        setImageError(true);
      };
      
      img.src = src;
    }
  }, [isInView, src, imageLoaded, imageError]);

  return {
    elementRef,
    isInView,
    imageLoaded,
    imageError,
  };
};

/**
 * Hook for lazy loading components with dynamic imports
 */
export const useComponentLazyLoading = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: UseLazyLoadingOptions = {}
) => {
  const { isInView, elementRef } = useLazyLoading(options);
  const [Component, setComponent] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (isInView && !Component && !loading) {
      setLoading(true);
      importFunc()
        .then((module) => {
          setComponent(() => module.default);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [isInView, Component, loading, importFunc]);

  return {
    elementRef,
    Component,
    loading,
    error,
    isInView,
  };
};

export default useLazyLoading;