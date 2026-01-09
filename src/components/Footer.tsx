import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="luxe-bg-primary text-white pb-20 md:pb-4 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Luxury Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>LUXE</h3>
                <p className="text-sm text-yellow-400 font-medium">Premium Furniture Excellence</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
              Leading luxury furniture polishing services in Mumbai. We restore and polish your premium wooden furniture to perfection with eco-friendly products and master craftsmen.
            </p>
            
            {/* Social Proof */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg">500+</div>
                <div className="text-gray-400 text-xs">Happy Clients</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg">4.8★</div>
                <div className="text-gray-400 text-xs">Rating</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg">10+</div>
                <div className="text-gray-400 text-xs">Years</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-6" style={{ fontFamily: 'Playfair Display' }}>Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </Link></li>
              <li><Link to="/about" className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </Link></li>
              <li><Link to="/services" className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Premium Services
              </Link></li>
              <li><Link to="/blog" className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Blog
              </Link></li>
              <li><Link to="/contact" className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </Link></li>
            </ul>
          </div>

          {/* Premium Services */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-6" style={{ fontFamily: 'Playfair Display' }}>Premium Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/wooden-furniture-polish" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Luxury Wooden Furniture Polish
              </Link></li>
              <li><Link to="/sofa-chair-polishing" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Premium Sofa & Chair Polishing
              </Link></li>
              <li><Link to="/services/table-and-bed-polishing" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Table & Bed Restoration
              </Link></li>
              <li><Link to="/services/antique-restoration" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Antique Restoration
              </Link></li>
              <li><Link to="/services/commercial-polishing" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Commercial Polishing
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-6" style={{ fontFamily: 'Playfair Display' }}>Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-yellow-400" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+918828709945" className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
                    +91 8828709945
                  </a>
                  <span className="text-xs text-gray-500">24/7 Available</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-yellow-400" />
                </div>
                <div className="flex flex-col">
                  <a href="mailto:A1furniturepolishservice@gmail.com" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300 break-all">
                    A1furniturepolishservice@gmail.com
                  </a>
                  <span className="text-xs text-gray-500">Quick Response</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-yellow-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300 leading-relaxed">Shop No 18, Akbar Ali Compound, Relief Road, near HK College, Oshiwara, Jogeshwari West, Mumbai, Maharashtra 400102</span>
                  <span className="text-xs text-gray-500 mt-1">Visit Our Showroom</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-yellow-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base text-gray-300 font-medium">24 Hours Premium Service</span>
                  <span className="text-xs text-gray-500">Always Ready</span>
                </div>
              </div>
              
              <a
                href="https://wa.me/918828709945"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 w-full shadow-lg hover:shadow-green-500/25 transform hover:scale-105 mt-6"
              >
                <MessageCircle size={18} />
                <span className="text-sm md:text-base font-medium">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © 2024 LUXE Premium Furniture Services. All rights reserved.
              </p>
              <div className="hidden md:block w-px h-4 bg-gray-700"></div>
              <p className="text-sm text-gray-400">
                Luxury Furniture Polishing Services in Mumbai
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Online Now</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Premium Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
