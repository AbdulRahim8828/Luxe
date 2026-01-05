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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Luxury Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 luxe-gold-gradient rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xl luxe-luxury-spacing">L</span>
              </div>
              <div>
                <h3 className="luxe-heading-sm text-white">LUXE</h3>
                <p className="text-sm text-yellow-400 font-medium">Premium Furniture Excellence</p>
              </div>
            </div>
            <p className="luxe-body-md text-gray-300 mb-6 leading-relaxed">
              Leading luxury furniture polishing services in Mumbai. We restore and polish your premium wooden furniture to perfection with eco-friendly products and master craftsmen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="luxe-heading-sm text-yellow-400 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="luxe-body-md text-gray-300 hover:text-yellow-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="luxe-body-md text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="luxe-body-md text-gray-300 hover:text-yellow-400 transition-colors duration-300">Premium Services</Link></li>
              <li><Link to="/blog" className="luxe-body-md text-gray-300 hover:text-yellow-400 transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="luxe-body-md text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Premium Services */}
          <div>
            <h4 className="luxe-heading-sm text-yellow-400 mb-6">Premium Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/wooden-furniture-polish" className="luxe-body-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300">Luxury Wooden Furniture Polish</Link></li>
              <li><Link to="/sofa-chair-polishing" className="luxe-body-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300">Premium Sofa & Chair Polishing</Link></li>
              <li><Link to="/services/table-and-bed-polishing" className="luxe-body-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300">Table & Bed Restoration</Link></li>
              <li><Link to="/services/antique-restoration" className="luxe-body-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300">Antique Restoration</Link></li>
              <li><Link to="/services/commercial-polishing" className="luxe-body-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300">Commercial Polishing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="luxe-heading-sm text-yellow-400 mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918828709945" className="luxe-body-md text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    +91 8828709945
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-yellow-400 flex-shrink-0 mt-1" />
                <a href="mailto:A1furniturepolishservice@gmail.com" className="luxe-body-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300 break-all">
                  A1furniturepolishservice@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                <span className="luxe-body-sm text-gray-300">Shop No 18, Akbar Ali Compound, Relief Road, near HK College, Oshiwara, Jogeshwari West, Mumbai, Maharashtra 400102</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="luxe-body-md text-gray-300">24 Hours Premium Service</span>
              </div>
              <a
                href="https://wa.me/918828709945"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 w-fit shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
              >
                <MessageCircle size={18} />
                <span className="luxe-body-md font-medium">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="luxe-body-sm text-gray-400">
              © 2024 LUXE Premium Furniture Services. All rights reserved.
            </p>
            <p className="luxe-body-sm text-gray-400 mt-2 md:mt-0">
              Luxury Furniture Polishing Services in Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
