import React from 'react';
import { CheckCircle2, ArrowRight, Settings, Sparkles, Home, Palette, Wrench, Zap, Target, Shield, Clock, User } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    {
      step: 1,
      title: 'Premium Consultation',
      description: 'Detailed assessment of your luxury furniture needs with expert recommendations',
      image: '/Luxe assets/Step 1.webp',
      icon: Home,
    },
    {
      step: 2,
      title: 'Shade Selection',
      description: 'Choose from 100+ premium polish shades to match your aesthetic vision',
      image: '/Luxe assets/step 2.webp',
      icon: Palette,
    },
    {
      step: 3,
      title: 'Expert Preparation',
      description: 'Meticulous cleaning and surface preparation using professional-grade tools',
      image: '/Luxe assets/step 3.webp',
      icon: Wrench,
    },
    {
      step: 4,
      title: 'Premium Application',
      description: 'Precision gap filling and application of luxury-grade polish materials',
      image: '/Luxe assets/step 4.webp',
      icon: Zap,
    },
    {
      step: 5,
      title: 'Perfect Finishing',
      description: 'Complete drying process with final luxury touches and detailing',
      image: '/Luxe assets/step 5.webp',
      icon: Target,
    },
    {
      step: 6,
      title: 'Quality Assurance',
      description: 'Comprehensive inspection ensuring premium standards and client satisfaction',
      image: '/Luxe assets/step 6.webp',
      icon: CheckCircle2,
    }
  ];

  return (
    <section className="py-14 md:py-18 luxe-bg-secondary relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-700/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-6">
            <Settings className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">Our Process</span>
          </div>
          <h2 className="luxe-heading-lg mb-6">
            Our <span className="luxe-shimmer">6-Step Premium</span> Process
          </h2>
          <p className="luxe-body-lg max-w-3xl mx-auto">
            From luxury consultation to final quality assurance, we ensure a flawless finish for your valuable furniture with our proven premium process
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Grid View */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div 
                key={item.step} 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 md:p-6 group animate-slideInUp hover:border-yellow-500/30 transition-all duration-300 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-xl border-4 border-gray-800">
                  {item.step}
                </div>
                
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                    <item.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-gray-800 to-gray-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-9">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Vertical Stack */}
          <div className="lg:hidden space-y-6">
            {steps.map((item, index) => (
              <div 
                key={item.step} 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 group animate-slideInUp hover:border-yellow-500/30 transition-all duration-300 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-xl border-2 border-gray-800">
                  {item.step}
                </div>
                
                <div className="flex gap-4">
                  {/* Left: Icon and Image */}
                  <div className="flex-shrink-0">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30 mb-3">
                      <item.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    
                    {/* Image */}
                    <div className="relative w-20 h-20 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-start gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Guarantee - Mobile Optimized */}
        <div className="hidden md:block text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            {/* Desktop Layout */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white mb-2">Premium Process Guarantee</div>
                <div className="text-gray-300">6-Step Quality Assurance • 100% Satisfaction • Professional Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-yellow-400 mb-1 md:mb-2">2-4 Hours</div>
            <div className="text-sm md:text-base text-gray-300">Average Completion Time</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-yellow-400 mb-1 md:mb-2">6 Months</div>
            <div className="text-sm md:text-base text-gray-300">Warranty Coverage</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
              <User className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-yellow-400 mb-1 md:mb-2">Expert</div>
            <div className="text-sm md:text-base text-gray-300">Certified Artisans</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
