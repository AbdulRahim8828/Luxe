/**
 * Luxury Redirect Manager Component
 * Handles 301 redirects from old A1 URLs to new Luxe URLs
 */

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { findRedirectMapping, getAllRedirectMappings } from '../seo/config/luxuryURLConfig';

interface RedirectManagerProps {
  children: React.ReactNode;
}

const LuxuryRedirectManager: React.FC<RedirectManagerProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Check if current URL needs to be redirected
    const redirectMapping = findRedirectMapping(currentPath);
    
    if (redirectMapping) {
      // Perform redirect
      console.log(`Redirecting from ${redirectMapping.oldUrl} to ${redirectMapping.newUrl}`);
      navigate(redirectMapping.newUrl, { replace: true });
      return;
    }

    // Check for pattern-based redirects
    const patternRedirects = getPatternRedirects(currentPath);
    if (patternRedirects) {
      console.log(`Pattern redirect from ${currentPath} to ${patternRedirects}`);
      navigate(patternRedirects, { replace: true });
      return;
    }

    // Check for old brand name in URL
    if (currentPath.includes('a1-') || currentPath.includes('A1-')) {
      const luxuryPath = convertToLuxuryURL(currentPath);
      if (luxuryPath !== currentPath) {
        console.log(`Brand redirect from ${currentPath} to ${luxuryPath}`);
        navigate(luxuryPath, { replace: true });
        return;
      }
    }
  }, [location.pathname, navigate]);

  return <>{children}</>;
};

// Pattern-based redirect logic
const getPatternRedirects = (path: string): string | null => {
  // Redirect old service patterns to luxury equivalents
  const servicePatterns = [
    {
      pattern: /^\/services\/affordable-(.+)$/,
      replacement: '/services/luxury-$1'
    },
    {
      pattern: /^\/services\/best-(.+)$/,
      replacement: '/services/premium-$1'
    },
    {
      pattern: /^\/services\/professional-(.+)$/,
      replacement: '/services/luxury-$1'
    },
    {
      pattern: /^\/services\/top-rated-(.+)$/,
      replacement: '/services/premium-$1'
    }
  ];

  for (const { pattern, replacement } of servicePatterns) {
    const match = path.match(pattern);
    if (match) {
      return path.replace(pattern, replacement);
    }
  }

  // Redirect old location patterns
  const locationPatterns = [
    {
      pattern: /^\/(.+)-furniture-polish$/,
      replacement: '/locations/luxury-furniture-polishing-$1'
    },
    {
      pattern: /^\/(.+)-wood-polish$/,
      replacement: '/locations/premium-wood-polishing-$1'
    }
  ];

  for (const { pattern, replacement } of locationPatterns) {
    const match = path.match(pattern);
    if (match) {
      return path.replace(pattern, replacement);
    }
  }

  return null;
};

// Convert old brand URLs to luxury URLs
const convertToLuxuryURL = (path: string): string => {
  let luxuryPath = path;

  // Replace brand name references
  luxuryPath = luxuryPath.replace(/a1-furniture-polish/gi, 'luxe-wooden-furniture-polishing');
  luxuryPath = luxuryPath.replace(/a1-polish/gi, 'luxe-polish');
  luxuryPath = luxuryPath.replace(/a1-/gi, 'luxe-');

  // Replace service quality indicators with luxury terms
  luxuryPath = luxuryPath.replace(/affordable-/gi, 'luxury-');
  luxuryPath = luxuryPath.replace(/best-/gi, 'premium-');
  luxuryPath = luxuryPath.replace(/professional-/gi, 'luxury-');
  luxuryPath = luxuryPath.replace(/top-rated-/gi, 'premium-');

  // Replace generic terms with luxury equivalents
  luxuryPath = luxuryPath.replace(/furniture-polish/gi, 'furniture-polishing');
  luxuryPath = luxuryPath.replace(/wood-polish/gi, 'wood-polishing');

  return luxuryPath;
};

// Hook for checking if current URL needs redirect
export const useLuxuryRedirect = () => {
  const location = useLocation();
  
  const needsRedirect = (): boolean => {
    const currentPath = location.pathname;
    
    // Check direct mappings
    const directMapping = findRedirectMapping(currentPath);
    if (directMapping) return true;
    
    // Check pattern redirects
    const patternRedirect = getPatternRedirects(currentPath);
    if (patternRedirect) return true;
    
    // Check brand name redirects
    if (currentPath.includes('a1-') || currentPath.includes('A1-')) {
      const luxuryPath = convertToLuxuryURL(currentPath);
      if (luxuryPath !== currentPath) return true;
    }
    
    return false;
  };

  const getRedirectURL = (): string | null => {
    const currentPath = location.pathname;
    
    // Check direct mappings first
    const directMapping = findRedirectMapping(currentPath);
    if (directMapping) return directMapping.newUrl;
    
    // Check pattern redirects
    const patternRedirect = getPatternRedirects(currentPath);
    if (patternRedirect) return patternRedirect;
    
    // Check brand name redirects
    if (currentPath.includes('a1-') || currentPath.includes('A1-')) {
      const luxuryPath = convertToLuxuryURL(currentPath);
      if (luxuryPath !== currentPath) return luxuryPath;
    }
    
    return null;
  };

  return {
    needsRedirect: needsRedirect(),
    redirectURL: getRedirectURL(),
    currentPath: location.pathname
  };
};

// Component for displaying redirect information (for debugging)
export const RedirectDebugInfo: React.FC = () => {
  const { needsRedirect, redirectURL, currentPath } = useLuxuryRedirect();
  
  if (!needsRedirect) return null;
  
  return (
    <div className="fixed bottom-4 right-4 bg-yellow-500 text-black p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <h4 className="font-bold mb-2">Redirect Debug</h4>
      <p className="text-sm mb-1"><strong>From:</strong> {currentPath}</p>
      <p className="text-sm"><strong>To:</strong> {redirectURL}</p>
    </div>
  );
};

export default LuxuryRedirectManager;