import { getCanonicalURL, getCurrentCanonicalURL } from '../utils/canonicalURL';

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
  structuredData?: object;
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
}) => {
  // Generate canonical URL if not provided
  const canonicalUrl = canonical || getCurrentCanonicalURL();
  
  // Use canonical URL for OG URL if not provided
  const openGraphUrl = ogUrl || canonicalUrl;
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="A1 Furniture Polish" />
      <meta name="language" content="English" />
      
      {/* Canonical URL - Always included */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType || 'website'} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={openGraphUrl} />
      <meta property="og:site_name" content="A1 Furniture Polish" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </>
  );
};

export default SEOHead;
