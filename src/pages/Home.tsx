import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Phone, MessageCircle, Wrench } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { localBusiness } from '../data/localBusiness.ts';
import { services as servicesSchema } from '../data/services.ts';
import { reviews, aggregateRating } from '../data/reviews.ts'; // Import both reviews and aggregateRating
import OurProcess from '../components/OurProcess';

const Home = () => {
  const services = [
    {
      title: 'Wooden Furniture Polish',
      description: 'Professional polishing for all types of wooden furniture',
      image: '/assets/wooden furniture .webp',
      link: '/wooden-furniture-polish'
    },
    {
      title: 'Sofa & Chair Polishing',
      description: 'Restore the shine and beauty of your upholstered furniture',
      image: '/assets/Sofa And chair.jpg',
      link: '/sofa-chair-polishing'
    },
    {
      title: 'Table & Bed Polishing',
      description: 'Specialized care for dining tables, beds, and more',
      image: '/assets/Table & Bed Polishing.jpg',
      link: '/table-bed-polishing'
    },
    {
      title: 'Antique Restoration',
      description: 'Specialized care for vintage and antique furniture pieces',
      image: '/assets/Antique Restoration.jpg',
      link: '/antique-restoration'
    },
    {
      title: 'Commercial Polishing',
      description: 'Professional furniture polishing for offices and businesses',
      image: '/assets/drying-finishing.webp',
      link: '/commercial-polishing'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Bandra, Mumbai',
      rating: 5,
      text: 'Excellent service! My dining table looks brand new after A1 Furniture Polish treatment. Highly recommended for anyone in Mumbai.'
    },
    {
      name: 'Rajesh Patel',
      location: 'Andheri, Mumbai',
      rating: 5,
      text: 'Professional team and amazing results. They polished all my wooden furniture and the quality is outstanding. Best furniture polish service in Mumbai!'
    },
    {
      name: 'Meera Joshi',
      location: 'Powai, Mumbai',
      rating: 5,
      text: 'Very satisfied with their antique furniture restoration work. They brought my grandmother\'s cabinet back to life. Great craftsmanship!'
    }
  ];

  return (
    <>
      <SEOHead
        title="A1 Furniture Polish — Professional Wooden Furniture Polishing in Mumbai"
        description="A1 Furniture Polish offers expert wooden furniture polishing, scratch repair, and restoration in Mumbai. Book online or call for a free estimate."
        ogUrl="https://a1furniturepolish.com/"
        ogImage="/assets/Sofa And chair.jpg"
      />
      <JsonLd data={localBusiness} />
      <JsonLd data={servicesSchema} />
      {/* Render each review as a separate JSON-LD script */}
      {reviews.map((review, index) => (
        <JsonLd key={`review-${index}`} data={review} />
      ))}
      {/* Render the aggregate rating */}
      <JsonLd data={aggregateRating} />


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional <span className='text-amber-600'>Furniture</span> <span className='text-amber-600'>Polish</span> Services in Mumbai
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your furniture with A1 Furniture Polish - Mumbai's trusted experts in wooden furniture polishing, restoration, and refinishing. We bring back the original shine and beauty to your valuable furniture pieces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918828709945"
                  className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Phone size={20} />
                  <span className="font-semibold">Call Now: +91 8828709945</span>
                </a>
                <Link
                  to="/services"
                  className="flex items-center justify-center space-x-2 bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <span className="font-semibold">View Services</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src="/assets/Sofa And chair.jpg"
                alt="Professional furniture polishing in Mumbai"
                className="rounded-lg shadow-2xl w-full h-80 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">4.8/5 Rating</span>
                </div>
                <p className="text-xs text-gray-600">127+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurProcess />

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose A1 Furniture Polish in Mumbai?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are Mumbai's most trusted furniture polishing service with years of experience in restoring and maintaining wooden furniture.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all our furniture polishing services in Mumbai.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled craftsmen with 10+ years experience in furniture polishing and restoration.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600">Fast and efficient furniture polishing service delivery across Mumbai.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-ray-600">Safe, non-toxic polish products that are environmentally friendly and family-safe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Furniture Polishing Services in Mumbai
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From wooden furniture polish to complete restoration, we offer comprehensive furniture care services across Mumbai.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Mumbai Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by hundreds of satisfied customers across Mumbai
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Restore Your Furniture's Beauty?
          </h2>
          <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Contact A1 Furniture Polish today for professional furniture polishing services in Mumbai. Free quotes available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918828709945"
              className="flex items-center justify-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
            >
              <Phone size={20} />
              <span>Call: +91 8828709945</span>
            </a>
            <a
              href="https://wa.me/918828709945"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
