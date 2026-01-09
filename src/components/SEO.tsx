import { Helmet } from 'react-helmet-async';
import { getCurrentCanonicalURL } from '../utils/canonicalURL';
import { 
  luxurySEOConfig, 
  generateLuxuryOpenGraphTags, 
  generateLuxuryTwitterCardTags 
} from '../seo/config/luxurySEOConfig';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = luxurySEOConfig.defaultTitle,
  description = luxurySEOConfig.defaultDescription,
  keywords = luxurySEOConfig.defaultKeywords.join(', '),
  image = '/Luxe assets/og-image.jpg',
  url,
  canonical,
}) => {
  // Generate canonical URL if not provided
  const canonicalUrl = canonical || url || getCurrentCanonicalURL();
  const ogUrl = url || canonicalUrl;
  
  // Generate luxury Open Graph and Twitter Card tags
  const openGraphTags = generateLuxuryOpenGraphTags(title, description, ogUrl, image);
  const twitterCardTags = generateLuxuryTwitterCardTags(title, description, image);
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      {Object.entries(openGraphTags).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}

      {/* Twitter */}
      {Object.entries(twitterCardTags).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content={luxurySEOConfig.brandName} />
      
      {/* Canonical URL - Always included */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
