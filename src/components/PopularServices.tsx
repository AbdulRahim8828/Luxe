import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ArrowRight, Sparkles } from 'lucide-react';
import { servicePageData } from '../data/servicePageData';

const PopularServices: React.FC = () => {
  const navigate = useNavigate();

  // Get top 6 popular services
  const popularServices = servicePageData.slice(0, 6);

  const handleQuickBook = (serviceId: string) => {
    // Navigate to services page with service ID in URL
    navigate(`/services?service=${serviceId}`);
  };

  return (
    <>
      <section className="py-20 md:py-24 luxe-bg-primary relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-700/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">Premium Services</span>
            </div>
            <h2 className="luxe-heading-lg mb-6">
              Our Most Trusted <span className="luxe-shimmer">Premium</span> Services
            </h2>
            <p className="luxe-body-lg max-w-3xl mx-auto mb-8">
              Discover our most sought-after furniture polishing services, trusted by luxury homes and premium offices across Mumbai
            </p>
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-2 luxe-btn-secondary px-6 py-3 rounded-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => {
              const minPrice = Math.min(...service.options.map(opt => opt.price));
              
              return (
                <div
                  key={service.id}
                  className="luxe-glass-card group animate-slideInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {service.options[0]?.badge && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full">
                        {service.options[0].badge}
                      </div>
                    )}
                    
                    {/* Premium Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-yellow-400 text-xs font-medium px-2 py-1 rounded-full border border-yellow-500/30">
                      Premium
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-white">{service.rating}</span>
                        <span className="text-sm text-gray-400">
                          ({service.reviewCount >= 1000 ? `${(service.reviewCount / 1000).toFixed(1)}K` : service.reviewCount} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Starting from</p>
                        <p className="text-2xl font-bold text-yellow-400">
                          ₹{minPrice.toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleQuickBook(service.id)}
                        className="luxe-btn-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 group-hover:scale-105 transition-transform"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Button - Mobile */}
          <div className="mt-12 text-center md:hidden">
            <Link
              to="/services"
              className="luxe-btn-secondary px-8 py-4 rounded-lg inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center justify-center space-x-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-8 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">1000+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="h-8 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400">Hours Service</div>
              </div>
              <div className="h-8 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularServices;
