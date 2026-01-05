import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';
import JsonLd from '../components/JsonLd';
import { getCanonicalURL } from '../utils/canonicalURL';
import { localBusiness } from '../data/localBusiness.ts';
import { services as servicesSchema } from '../data/services.ts';
import { reviews, aggregateRating } from '../data/reviews.ts';
import { getHomeSEO } from '../seo/config/luxurySEOConfig';
import StickyWhatsApp from '../components/StickyWhatsApp';
import StickyBookButton from '../components/StickyBookButton';
import PopularServices from '../components/PopularServices';
import CustomerPhotos from '../components/CustomerPhotos';
import TrustBadges from '../components/TrustBadges.tsx';
import QuickQuoteCalculator from '../components/QuickQuoteCalculator.tsx';
import FAQSection from '../components/FAQSection.tsx';
import WhyBookOnline from '../components/WhyBookOnline.tsx';
import FinalCTA from '../components/FinalCTA';
import ContactCTA from '../components/ContactCTA';
import OptimizedImage from '../../src/components/OptimizedImage';
import { COMMON_SIZES } from '../../src/utils/imageHelpers';

// Lazy load heavy components
const OurProcess = lazy(() => import('../components/OurProcess'));
const StatsCounter = lazy(() => import('../components/StatsCounter'));

const Home = () => {
  // Get luxury SEO configuration for home page
  const homeSEO = getHomeSEO();
  
  return (
    <>
      <SEOHead
        title={homeSEO.title}
        description={homeSEO.description}
        keywords={homeSEO.keywords}
        ogImage="/assets/Sofa And chair.webp"
        canonical={getCanonicalURL('/')}
      />
      <JsonLd data={localBusiness} />
      <JsonLd data={servicesSchema} />
      {reviews.map((review, index) => (
        <JsonLd key={`review-${index}`} data={review} />
      ))}
      <JsonLd data={aggregateRating} />

      {/* Sticky WhatsApp Button */}
      <StickyWhatsApp />

      {/* Sticky Book Button (Mobile) */}
      <StickyBookButton />

      {/* Hero Section - Luxury Design */}
      <section className="relative luxe-bg-primary py-12 md:py-16 lg:py-20 overflow-hidden min-h-[80vh] md:min-h-[75vh] lg:min-h-[80vh] flex items-center">
        {/* Decorative Background Circles - Optimized for mobile */}
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-2xl md:blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-6 md:mb-8">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full mr-2 md:mr-3"></div>
                <span className="text-yellow-400 text-xs md:text-sm font-medium tracking-wider uppercase">Premium Furniture Care</span>
              </div>

              {/* Main Heading - Better Mobile Sizing */}
              <h1 className="mb-4 md:mb-6">
                <span className="text-yellow-400 block leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold luxe-shimmer" style={{ fontFamily: 'Playfair Display', letterSpacing: '0.05em' }}>LUXE</span>
                <span className="text-white block mt-1 md:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Playfair Display' }}>Wooden Furniture</span>
                <span className="text-yellow-400 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Playfair Display' }}>Polishing</span>
              </h1>
              
              {/* Description - Better Mobile Text */}
              <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                <span className="text-yellow-400 font-semibold">Luxury Finish</span> for Timeless Furniture. Expert restoration for premium homes and offices.
              </p>

              {/* Feature Pills - Mobile Optimized */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-10 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-2 md:space-x-3 bg-gray-800/50 px-2 py-2 md:px-4 md:py-3 rounded-lg border border-gray-700/50">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-xs md:text-sm">✓</span>
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">6 Months Warranty</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 bg-gray-800/50 px-2 py-2 md:px-4 md:py-3 rounded-lg border border-gray-700/50">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-xs md:text-sm">✓</span>
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">Master Artisans</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 bg-gray-800/50 px-2 py-2 md:px-4 md:py-3 rounded-lg border border-gray-700/50">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-xs md:text-sm">✓</span>
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">Premium Materials</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 bg-gray-800/50 px-2 py-2 md:px-4 md:py-3 rounded-lg border border-gray-700/50">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-xs md:text-sm">✓</span>
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">Starting ₹1,299</span>
                </div>
              </div>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 max-w-md mx-auto lg:mx-0">
                <Link
                  to="/services"
                  className="luxe-gold-gradient text-black px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Book Premium Service</span>
                  <ArrowRight size={18} className="md:w-5 md:h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-yellow-500 text-yellow-400 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  <span>Call Now</span>
                </Link>
              </div>

              {/* Trust Badges - Mobile Optimized */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-sm">⭐</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm md:text-base">5-Star Rated</div>
                    <div className="text-gray-400 text-xs md:text-sm">Service</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-sm">🏆</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm md:text-base">Award</div>
                    <div className="text-gray-400 text-xs md:text-sm">Winning</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm md:text-base">100%</div>
                    <div className="text-gray-400 text-xs md:text-sm">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Card - Mobile Optimized */}
            <div className="relative mt-8 lg:mt-0">
              <div className="luxe-glass-card border border-yellow-500/20 rounded-2xl p-4 md:p-6 max-w-sm mx-auto hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
                <OptimizedImage
                  src="/assets/Sofa And chair.webp"
                  alt="Luxury furniture polishing services"
                  width={400}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover rounded-xl mb-4"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-6 md:top-8 right-6 md:right-8 luxe-gold-gradient text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                  10+ Years
                </div>

                {/* Rating Section */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="md:w-4 md:h-4" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-white font-semibold text-sm md:text-base">4.8</span>
                </div>
                
                <p className="text-gray-300 text-xs md:text-sm mb-4">500+ Premium Clients</p>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <p className="text-yellow-400 text-xs md:text-sm font-medium">Trusted by Luxury Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Popular Services with Quick Book */}
      <PopularServices />

      {/* Our Process */}
      <Suspense fallback={<div className="py-16 bg-white"></div>}>
        <OurProcess />
      </Suspense>

      {/* Stats Counter */}
      <Suspense fallback={<div className="py-16"></div>}>
        <StatsCounter />
      </Suspense>

      {/* Customer Photos Carousel - Join 50,000+ Happy Customers */}
      <CustomerPhotos />

      {/* Quick Quote Calculator - Get Instant Quote */}
      <QuickQuoteCalculator />

      {/* Why Book Online */}
      <WhyBookOnline />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA - Join 50,000+ Happy Customers */}
      <FinalCTA />

      {/* Contact CTA - Still have questions */}
      <ContactCTA />
    </>
  );
};

export default Home;
