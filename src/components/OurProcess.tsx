import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    {
      step: 1,
      title: 'Consultation & Booking',
      description: 'We start with a detailed consultation to understand your needs and book a convenient slot.',
      image: '/assets/consultation-booking.webp',
      color: 'from-amber-400 to-amber-600'
    },
    {
      step: 2,
      title: 'Select Wood Polish Shade',
      description: 'Choose from a wide range of polish shades to match your existing furniture or create a new look.',
      image: '/assets/select-wood-polish-shade.webp',
      color: 'from-orange-400 to-orange-600'
    },
    {
      step: 3,
      title: 'Cleaning & Sanding',
      description: 'Our team meticulously cleans and sands the furniture to prepare it for polishing.',
      image: '/assets/Cleaning & Sanding.jpg',
      color: 'from-amber-500 to-orange-500'
    },
    {
      step: 4,
      title: 'Filling Gaps & Polish Application',
      description: 'We fill any cracks or gaps and apply the first coat of high-quality polish.',
      image: '/assets/filling-gaps-polish-application.webp',
      color: 'from-orange-500 to-amber-600'
    },
    {
      step: 5,
      title: 'Drying & Finishing',
      description: 'The furniture is left to dry completely before applying the final finishing touches.',
      image: '/assets/drying-finishing.webp',
      color: 'from-amber-600 to-orange-600'
    },
    {
      step: 6,
      title: 'Final Inspection & Payment',
      description: 'We do a final quality check with you and collect payment once you are 100% satisfied.',
      image: 'https://images.pexels.com/photos/7792815/pexels-photo-7792815.jpeg',
      color: 'from-orange-600 to-amber-700'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Wood Polishing Process
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            From consultation to final inspection, we ensure a flawless finish for your valuable furniture.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute h-full border-l-4 border-dashed border-amber-300 left-1/2 transform -translate-x-1/2"></div>
          
          {steps.map((item, index) => (
            <div 
              key={item.step} 
              className={`relative mb-8 md:mb-12 lg:flex items-center w-full ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Spacer for Desktop View */}
              <div className="hidden lg:block w-1/2"></div>

              {/* Timeline Circle - Desktop */}
              <div className={`hidden lg:flex absolute w-16 h-16 bg-gradient-to-br ${item.color} rounded-full items-center justify-center text-white font-bold text-2xl left-1/2 -ml-8 z-10 shadow-xl border-4 border-white`}>
                {item.step}
              </div>

              {/* Content Card */}
              <div className="w-full lg:w-1/2 lg:px-8">
                <div className="group relative bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Mobile Step Number */}
                  <div className={`lg:hidden absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {item.step}
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-br-full`}></div>
                  
                  <div className="relative">
                    {/* Image */}
                    <div className="mb-4 rounded-xl overflow-hidden shadow-md">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                        loading="lazy" 
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex items-start space-x-3 mb-3">
                      <CheckCircle2 className={`w-6 h-6 text-amber-600 flex-shrink-0 mt-1`} />
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight pr-12 lg:pr-0">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed pl-9">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold text-sm md:text-base">6-Step Quality Process Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
