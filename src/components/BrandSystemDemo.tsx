/**
 * Brand System Demonstration Component
 * Shows how to use the Luxe brand system in React components
 */

import React from 'react';
import { 
  getBrandName, 
  getPrimaryCTA, 
  getSecondaryCTA, 
  getHeroTitle,
  getLuxuryClasses 
} from '../config';

const BrandSystemDemo: React.FC = () => {
  const heroTitle = getHeroTitle();
  const luxuryClasses = getLuxuryClasses();

  return (
    <div className="luxe-section-spacing bg-white">
      <div className="container mx-auto px-4">
        {/* Brand Name Display */}
        <div className="text-center luxe-component-spacing">
          <h1 className={`${luxuryClasses.heading} text-4xl md:text-6xl text-luxe-primary luxe-luxury-spacing`}>
            {heroTitle.primary}
          </h1>
          <h2 className={`${luxuryClasses.heading} text-2xl md:text-3xl text-luxe-text-secondary mt-4`}>
            {heroTitle.secondary}
          </h2>
          <p className={`${luxuryClasses.body} text-lg text-luxe-text-secondary mt-4 max-w-2xl mx-auto`}>
            {heroTitle.tagline}
          </p>
        </div>

        {/* Brand Information */}
        <div className="text-center luxe-component-spacing">
          <h3 className={`${luxuryClasses.heading} text-2xl text-luxe-primary mb-6`}>
            Welcome to {getBrandName()}
          </h3>
          <p className={`${luxuryClasses.body} text-luxe-text-secondary max-w-3xl mx-auto mb-8`}>
            Experience the pinnacle of luxury furniture care with our premium polishing services. 
            We transform your treasured pieces with meticulous attention to detail and uncompromising quality.
          </p>
        </div>

        {/* Color Palette Display */}
        <div className="luxe-component-spacing">
          <h4 className={`${luxuryClasses.heading} text-xl text-luxe-primary mb-6 text-center`}>
            Luxury Color Palette
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxe-primary rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className={`${luxuryClasses.body} text-sm text-luxe-text-secondary`}>Jet Black</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxe-accent rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className={`${luxuryClasses.body} text-sm text-luxe-text-secondary`}>Royal Gold</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxe-secondary rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className={`${luxuryClasses.body} text-sm text-luxe-text-secondary`}>Champagne Gold</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxe-text-primary border border-gray-200 rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className={`${luxuryClasses.body} text-sm text-luxe-text-secondary`}>Ivory White</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxe-text-secondary rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className={`${luxuryClasses.body} text-sm text-luxe-text-secondary`}>Warm Grey</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center luxe-component-spacing">
          <h4 className={`${luxuryClasses.heading} text-xl text-luxe-primary mb-6`}>
            Luxury Call-to-Action Buttons
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`${luxuryClasses.primaryButton} px-8 py-3 rounded-lg font-medium luxe-hover-lift`}>
              {getPrimaryCTA()}
            </button>
            <button className={`${luxuryClasses.secondaryButton} px-8 py-3 rounded-lg font-medium luxe-hover-lift`}>
              {getSecondaryCTA()}
            </button>
          </div>
        </div>

        {/* Typography Display */}
        <div className="luxe-component-spacing">
          <h4 className={`${luxuryClasses.heading} text-xl text-luxe-primary mb-6 text-center`}>
            Luxury Typography System
          </h4>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <h1 className={`${luxuryClasses.heading} text-4xl text-luxe-primary luxe-luxury-spacing`}>
                Playfair Display - Luxury Headings
              </h1>
              <p className={`${luxuryClasses.body} text-lg text-luxe-text-secondary mt-2`}>
                Poppins - Clean and readable body text for all content
              </p>
            </div>
          </div>
        </div>

        {/* Service Card Example */}
        <div className="luxe-component-spacing">
          <h4 className={`${luxuryClasses.heading} text-xl text-luxe-primary mb-6 text-center`}>
            Luxury Service Card Example
          </h4>
          <div className="max-w-md mx-auto">
            <div className={`${luxuryClasses.card} p-6 rounded-xl border border-gray-100`}>
              <div className="w-full h-48 bg-gradient-to-br from-luxe-secondary to-luxe-accent rounded-lg mb-4 flex items-center justify-center">
                <span className={`${luxuryClasses.heading} text-white text-xl`}>Premium Service</span>
              </div>
              <h5 className={`${luxuryClasses.heading} text-xl text-luxe-primary mb-3`}>
                Luxury Furniture Polishing
              </h5>
              <p className={`${luxuryClasses.body} text-luxe-text-secondary mb-4`}>
                Transform your furniture with our premium polishing service, 
                bringing back the original luster and beauty.
              </p>
              <button className={`${luxuryClasses.primaryButton} w-full py-3 rounded-lg font-medium`}>
                {getPrimaryCTA()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSystemDemo;