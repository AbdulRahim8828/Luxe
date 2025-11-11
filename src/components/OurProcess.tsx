import React from 'react';

const OurProcess = () => {
  const steps = [
    {
      step: 1,
      title: 'Consultation & Booking',
      description: 'We start with a detailed consultation to understand your needs and book a convenient slot.',
      image: '/assets/consultation-booking.webp'
    },
    {
      step: 2,
      title: 'Select Wood Polish Shade',
      description: 'Choose from a wide range of polish shades to match your existing furniture or create a new look.',
      image: '/assets/select-wood-polish-shade.webp'
    },
    {
      step: 3,
      title: 'Cleaning & Sanding',
      description: 'Our team meticulously cleans and sands the furniture to prepare it for polishing.',
      image: '/assets/Cleaning & Sanding.jpg'
    },
    {
      step: 4,
      title: 'Filling Gaps & Polish Application',
      description: 'We fill any cracks or gaps and apply the first coat of high-quality polish.',
      image: '/assets/filling-gaps-polish-application.webp'
    },
    {
      step: 5,
      title: 'Drying & Finishing',
      description: 'The furniture is left to dry completely before applying the final finishing touches.',
      image: '/assets/drying-finishing.webp'
    },
    {
      step: 6,
      title: 'Final Inspection & Payment',
      description: 'We do a final quality check with you and collect payment once you are 100% satisfied.',
      image: 'https://images.pexels.com/photos/7792815/pexels-photo-7792815.jpeg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Wood Polishing Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From consultation to final inspection, we ensure a flawless finish for your valuable furniture.
          </p>
        </div>
        <div className="relative">
          {/* Responsive Timeline Line */}
          <div className="absolute h-full border-l-2 border-amber-600 left-5 lg:left-1/2 transform lg:-translate-x-1/2"></div>
          
          {steps.map((item, index) => (
            <div key={item.step} className={`relative mb-12 lg:flex items-center w-full ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Spacer for Desktop View */}
              <div className="hidden lg:block w-1/2"></div>

              {/* Timeline Circle */}
              <div className="absolute w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg left-5 -ml-5 lg:left-1/2 lg:-ml-5 z-10">
                {item.step}
              </div>

              {/* Content Card */}
              <div className="w-full lg:w-1/2 pl-16 pr-4 lg:px-8">
                <div className="p-6 rounded-lg shadow-lg bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover rounded-lg shadow-md" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
