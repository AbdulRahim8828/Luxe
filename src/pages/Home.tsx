import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Award, CheckCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
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
import OptimizedImage from '../components/OptimizedImage';

// Lazy load heavy components
const OurProcess = lazy(() => import('../components/OurProcess'));
const StatsCounter = lazy(() => import('../components/StatsCounter'));

const Home = () => {
  // Get luxury SEO configuration for home page
  const homeSEO = getHomeSEO();
  
  return (
    <>
      <SEO
        title={homeSEO.title}
        description={homeSEO.description}
        keywords={homeSEO.keywords}
        image="/Luxe assets/Sofa And chair.webp"
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
      <section className="relative luxe-bg-primary py-6 md:py-10 lg:py-12 overflow-hidden min-h-[65vh] md:min-h-[60vh] lg:min-h-[65vh] flex items-center">
        {/* Decorative Background Circles - Optimized for mobile */}
        <div className="absolute top-8 left-8 md:top-16 md:left-16 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-xl md:blur-2xl"></div>
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-xl md:blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-xl md:blur-2xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-4 md:mb-6">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full mr-2 md:mr-3"></div>
                <span className="text-yellow-400 text-xs md:text-sm font-medium tracking-wider uppercase">Premium Furniture Care</span>
              </div>

              {/* Main Heading - Better Mobile Sizing */}
              <h1 className="mb-3 md:mb-5">
                <span className="text-yellow-400 block leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold luxe-shimmer" style={{ fontFamily: 'Playfair Display', letterSpacing: '0.05em' }}>LUXE</span>
                <span className="text-white block mt-1 md:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal" style={{ fontFamily: 'Playfair Display' }}>Wooden Furniture</span>
                <span className="text-yellow-400 block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal" style={{ fontFamily: 'Playfair Display' }}>Polishing</span>
              </h1>
              
              {/* Description - Better Mobile Text */}
              <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                <span className="text-yellow-400 font-semibold">Luxury Finish</span> for Timeless Furniture. Expert restoration for premium homes and offices.
              </p>

              {/* Feature Pills - Mobile Optimized */}
              <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-2 bg-gray-800/50 px-2 py-2 md:px-3 md:py-2 rounded-lg border border-gray-700/50">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">6 Months Warranty</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-2 py-2 md:px-3 md:py-2 rounded-lg border border-gray-700/50">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">Master Artisans</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-2 py-2 md:px-3 md:py-2 rounded-lg border border-gray-700/50">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">Premium Materials</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-2 py-2 md:px-3 md:py-2 rounded-lg border border-gray-700/50">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">Starting ₹1,299</span>
                </div>
              </div>

              {/* CTA Buttons - Enhanced Visibility */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 md:px-7 md:py-4 rounded-xl font-bold text-sm md:text-base flex items-center justify-center space-x-2 shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 transform hover:scale-105 border border-yellow-400"
                >
                  <span>Book Premium Service</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-6 py-3 md:px-7 md:py-4 rounded-xl font-bold text-sm md:text-base flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Call Now</span>
                </Link>
              </div>

              {/* Trust Badges - Enhanced Mobile Layout */}
              <div className="grid grid-cols-3 gap-2 md:gap-6 lg:flex lg:flex-wrap lg:justify-start lg:items-center">
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start space-y-2 lg:space-y-0 lg:space-x-3 bg-gray-800/30 p-2 rounded-xl lg:bg-transparent lg:p-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-white font-semibold text-xs md:text-base">5-Star Rated</div>
                    <div className="text-gray-400 text-xs md:text-sm">Service</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start space-y-2 lg:space-y-0 lg:space-x-3 bg-gray-800/30 p-2 rounded-xl lg:bg-transparent lg:p-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-white font-semibold text-xs md:text-base">Award</div>
                    <div className="text-gray-400 text-xs md:text-sm">Winning</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start space-y-2 lg:space-y-0 lg:space-x-3 bg-gray-800/30 p-2 rounded-xl lg:bg-transparent lg:p-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-white font-semibold text-xs md:text-base">100%</div>
                    <div className="text-gray-400 text-xs md:text-sm">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Card - Mobile Optimized */}
            <div className="relative mt-4 lg:mt-0">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 md:p-4 max-w-sm mx-auto hover:border-yellow-500/30 transition-all duration-300 shadow-xl">
                <img
                  src="/Luxe assets/Hero%20Image.webp"
                  alt="LUXE Premium Wooden Furniture Polishing Services"
                  className="w-full h-40 md:h-48 object-cover rounded-xl mb-3"
                  loading="eager"
                  onError={(e) => {
                    console.log('Hero image failed to load, trying fallback');
                    e.currentTarget.src = '/Luxe assets/Sofa And chair.webp';
                  }}
                />
                
                {/* Rating Badge */}
                <div className="absolute top-5 md:top-6 right-5 md:right-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
                  10+ Years
                </div>

                {/* Rating Section */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-white font-semibold text-sm md:text-base">4.8</span>
                </div>
                
                <p className="text-gray-300 text-xs mb-3">500+ Premium Clients</p>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2">
                  <p className="text-yellow-400 text-xs font-medium">Trusted by Luxury Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services with Quick Book */}
      <PopularServices />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Our Process */}
      <Suspense fallback={<div className="py-8 bg-gray-900"></div>}>
        <OurProcess />
      </Suspense>

      {/* Customer Photos Carousel - Join 50,000+ Happy Customers */}
      <CustomerPhotos />

      {/* Stats Counter */}
      <Suspense fallback={<div className="py-8 bg-gray-800"></div>}>
        <StatsCounter />
      </Suspense>

      {/* Quick Quote Calculator - Get Instant Quote */}
      <QuickQuoteCalculator />

      {/* Why Book Online */}
      <WhyBookOnline />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA - Join 50,000+ Happy Customers */}
      <FinalCTA />
    </>
  );
};

export default Home;
