import { Award, Users, Shield, Leaf, Target, Heart, Zap, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { FadeIn } from '../components/ScrollAnimations';
import { getCanonicalURL } from '../utils/canonicalURL';
import { getAboutSEO } from '../seo/config/luxurySEOConfig';
import OptimizedImage from '../components/OptimizedImage';

const About = () => {
  // Get luxury SEO configuration for about page
  const aboutSEO = getAboutSEO();
  
  const values = [
    {
      icon: <Award className="w-8 h-8 text-black" />,
      title: 'Luxury Excellence',
      description: 'We strive for perfection in every premium furniture restoration project we undertake.'
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: 'Premium Client First',
      description: 'Your satisfaction is our priority. We ensure every luxury client is 100% delighted with our premium service.'
    },
    {
      icon: <Shield className="w-8 h-8 text-black" />,
      title: 'Trust & Prestige',
      description: 'Trusted by Mumbai\'s luxury homes and premium businesses for over a decade.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-black" />,
      title: 'Premium Eco-Friendly',
      description: 'We use the finest environmentally safe polishing products that are safe for luxury homes and families.'
    }
  ];

  return (
    <>
      <SEO
        title={aboutSEO.title}
        description={aboutSEO.description}
        keywords={aboutSEO.keywords}
        canonical={getCanonicalURL('/about')}
      />

      {/* Luxury Hero Section */}
      <section className="relative py-8 md:py-10 bg-gray-900 overflow-hidden">
        {/* Luxury Decorative Elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-yellow-600/30 to-yellow-800/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-700/20 to-yellow-900/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-yellow-600/15 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-6">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-yellow-400 text-xs font-medium tracking-wider uppercase">About LUXE</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                  Mumbai's Most <span className="text-yellow-400 luxe-shimmer">Elite</span> Furniture Restoration Experts
                </h1>
                <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                  For over a decade, LUXE Premium Furniture Services has been Mumbai's most distinguished name in luxury furniture polishing and restoration. We have transformed thousands of premium furniture pieces across Mumbai's finest properties, bringing them back to their original magnificence.
                </p>
                <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                  Our team of master craftsmen specializes in luxury wooden furniture restoration, antique preservation, and premium commercial furniture maintenance. We serve discerning residential and commercial clients across all premium areas of Mumbai with uncompromising dedication to excellence.
                </p>
                
                {/* Premium Stats */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                    <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">10+</p>
                    <p className="text-xs text-gray-300 font-medium">Years Excellence</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                    <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">500+</p>
                    <p className="text-xs text-gray-300 font-medium">Premium Clients</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                    <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">100%</p>
                    <p className="text-xs text-gray-300 font-medium">Luxury Standard</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="relative mt-6 lg:mt-0">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-500/20">
                  <OptimizedImage
                    src="/assets/Sofa And chair.webp"
                    alt="LUXE premium furniture restoration team in Mumbai"
                    className="w-full h-64 lg:h-80 object-cover"
                    width={800}
                    height={500}
                    loading="lazy"
                  />
                  {/* Luxury Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 rounded-2xl shadow-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Award className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Master Craftsmen</p>
                        <p className="text-xs text-yellow-400">Trusted by 500+ luxury properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Premium Values */}
      <section className="py-8 md:py-10 bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-48 h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-16 right-16 w-64 h-64 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-4">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-yellow-400 text-xs font-medium tracking-wider uppercase">Our Premium Values</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>What Drives Our <span className="text-yellow-400 luxe-shimmer">Excellence</span></h2>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
                These core values guide every luxury furniture restoration project we undertake across Mumbai's finest properties
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-3xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-bl-full"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">{value.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LUXE */}
      <section className="py-8 md:py-10 bg-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-16 w-48 h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-16 left-16 w-64 h-64 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-600/30 rounded-full mb-4">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                <span className="text-green-400 text-xs font-medium tracking-wider uppercase">Why Choose LUXE</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>What Makes Us <span className="text-yellow-400 luxe-shimmer">Extraordinary</span></h2>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
                We don't just polish furniture - we restore memories and bring back the magnificence of your cherished luxury pieces
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={100}>
              <div className="flex items-start space-x-3 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Precision Mastery</h3>
                  <p className="text-sm text-gray-300">Meticulous attention to detail in every luxury project, ensuring flawless results that exceed expectations.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex items-start space-x-3 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Premium Client Care</h3>
                  <p className="text-sm text-gray-300">Your satisfaction is our priority. We go above and beyond for every distinguished client.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex items-start space-x-3 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Express Luxury Service</h3>
                  <p className="text-sm text-gray-300">Same-day premium service available in select Mumbai luxury areas without compromising quality.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex items-start space-x-3 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Luxury Guarantee</h3>
                  <p className="text-sm text-gray-300">100% satisfaction guaranteed or we'll make it perfect at no extra cost to our premium clients.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="flex items-start space-x-3 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Trusted Excellence</h3>
                  <p className="text-sm text-gray-300">Verified master craftsmen with background checks and comprehensive insurance coverage.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="flex items-start space-x-3 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 luxe-hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Leaf className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Premium Eco-Conscious</h3>
                  <p className="text-sm text-gray-300">Finest, non-toxic products that protect luxury families and the environment.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-8 md:py-10 bg-gray-900 overflow-hidden">
        {/* Luxury Decorative Background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-600/30 to-yellow-800/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-700/20 to-yellow-900/5 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-yellow-600/15 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 md:p-10 rounded-3xl shadow-2xl hover:border-yellow-500/30 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                Experience the <span className="text-yellow-400 luxe-shimmer">LUXE Difference</span> Today
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of distinguished clients across Mumbai who trust LUXE Premium Furniture Services for their luxury furniture care needs. Get an exclusive consultation and personalized quote today!
              </p>
              
              {/* Premium Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                    <span className="text-yellow-400 text-sm">⭐</span>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">5-Star Rated</div>
                    <div className="text-gray-400 text-xs">Premium Service</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                    <span className="text-yellow-400 text-sm">🏆</span>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">Award Winning</div>
                    <div className="text-gray-400 text-xs">Excellence</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                    <span className="text-yellow-400 text-sm">✓</span>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">6 Months</div>
                    <div className="text-gray-400 text-xs">Warranty</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+918828709945"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Premium: +91 8828709945</span>
                </a>
                <a
                  href="https://wa.me/918828709945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp LUXE</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default About;
