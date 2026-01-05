import { getCanonicalURL, getCurrentCanonicalURL } from '../utils/canonicalURL';
import { 
  luxurySEOConfig, 
  generateLuxuryOpenGraphTags, 
  generateLuxuryTwitterCardTags 
} from '../seo/config/luxurySEOConfig';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: object | object[];
  // Enhanced SEO props from SEO system
  openGraphTags?: Record<string, string>;
  twitterCardTags?: Record<string, string>;
  cacheHeaders?: Record<string, string>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType,
  canonical,
  noindex = false,
  structuredData,
  openGraphTags,
  twitterCardTags,
  cacheHeaders,
}) => {
  // Generate canonical URL if not provided
  const canonicalUrl = canonical || getCurrentCanonicalURL();
  
  // Use canonical URL for OG URL if not provided
  const openGraphUrl = ogUrl || canonicalUrl;
  
  // Generate luxury Open Graph and Twitter Card tags if not provided
  const luxuryOpenGraphTags = openGraphTags || generateLuxuryOpenGraphTags(
    ogTitle || title,
    ogDescription || description,
    openGraphUrl,
    ogImage
  );
  
  const luxuryTwitterCardTags = twitterCardTags || generateLuxuryTwitterCardTags(
    ogTitle || title,
    ogDescription || description,
    ogImage
  );
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content={luxurySEOConfig.brandName} />
      <meta name="language" content="English" />
      
      {/* Canonical URL - Always included */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      {Object.entries(luxuryOpenGraphTags).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
      
      {/* Twitter */}
      {Object.entries(luxuryTwitterCardTags).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
      
      {/* Cache Headers (for performance optimization) */}
      {cacheHeaders && Object.entries(cacheHeaders).map(([name, value]) => (
        <meta key={name} httpEquiv={name} content={value} />
      ))}
      
      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )
      )}
    </>
  );
};

export default SEOHead;
