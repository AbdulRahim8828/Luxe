import React from 'react';
import { Award, Users, Shield, Leaf } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: 'Excellence',
      description: 'We strive for perfection in every furniture polishing project we undertake.'
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We ensure every customer is 100% happy with our service.'
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: 'Trust & Reliability',
      description: 'Trusted by Mumbai families and businesses for over a decade.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-amber-600" />,
      title: 'Eco-Friendly',
      description: 'We use environmentally safe polishing products that are safe for your family and pets.'
    }
  ];

  return (
    <>
      <SEOHead
        title="About A1 Furniture Polish - Mumbai's Trusted Furniture Polishing Experts"
        description="Learn about A1 Furniture Polish, Mumbai's leading furniture polishing service. 10+ years experience, eco-friendly products, skilled craftsmen. Serving all Mumbai areas."
        ogTitle="About A1 Furniture Polish - Mumbai's Trusted Furniture Polishing Experts"
        ogDescription="Learn about A1 Furniture Polish, Mumbai's leading furniture polishing service. 10+ years experience, eco-friendly products, skilled craftsmen. Serving all Mumbai areas."
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About A1 Furniture Polish
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over a decade, A1 Furniture Polish has been Mumbai's most trusted name in professional furniture polishing and restoration services. We have transformed thousands of furniture pieces across Mumbai, bringing them back to their original glory.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team of skilled craftsmen specializes in wooden furniture polish, antique restoration, and commercial furniture maintenance. We serve residential and commercial clients across all areas of Mumbai with the same dedication to quality and customer satisfaction.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">1000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">100%</p>
                  <p className="text-sm text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg"
                alt="Professional furniture polishing team in Mumbai"
                className="rounded-lg shadow-2xl w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide every furniture polishing project we undertake in Mumbai
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Furniture Polishing Process</h2>
            <p className="text-lg text-gray-600">
              Professional furniture polishing methodology that delivers exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">We inspect your furniture and provide a detailed quote for polishing services.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">Careful cleaning and preparation of furniture surfaces for optimal polishing results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Polishing</h3>
              <p className="text-gray-600">Expert application of premium polish using professional techniques and tools.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600">Final inspection and customer approval to ensure perfect results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Experience the A1 Difference Today
          </h2>
          <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied customers in Mumbai who trust A1 Furniture Polish for their furniture care needs.
          </p>
          <a
            href="tel:+918828709945"
            className="inline-flex items-center space-x-2 bg-white text-amber-600 px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
          >
            <span>Get Free Quote: +91 8828709945</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
