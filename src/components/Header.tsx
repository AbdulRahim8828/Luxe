import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { brandConfig } from '../config/brand';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="luxe-glass-card-square shadow-2xl sticky top-0 z-50 border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Luxe Logo */}
          <Link to="/" className="flex items-center space-x-3 sm:space-x-4 group transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shadow-2xl group-hover:shadow-yellow-500/25 transition-all duration-300 border-2 border-yellow-500/20 group-hover:border-yellow-500/40">
              <img 
                src="/assets/Luxe assets/logo.png" 
                alt="LUXE Wooden Furniture Polishing - Wooden Furniture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display', letterSpacing: '0.02em' }}>
                LUXE
              </h1>
              <p className="text-xs sm:text-sm text-yellow-400 font-medium leading-tight">
                Wooden Furniture Polishing
              </p>
            </div>
            {/* Mobile - Show only on small screens */}
            <div className="block sm:hidden">
              <h1 className="text-base font-bold text-white" style={{ fontFamily: 'Playfair Display', letterSpacing: '0.02em' }}>
                LUXE
              </h1>
            </div>
          </Link>

          {/* Luxury Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm lg:text-base font-medium transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Luxury Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${brandConfig.contactInfo.phone}`}
              className="flex items-center space-x-2 luxe-gold-gradient text-black px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${brandConfig.contactInfo.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-transparent border-2 border-yellow-500 text-yellow-400 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-yellow-500 hover:text-black"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Luxury Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 group"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <Menu size={24} className="transition-transform duration-300 group-hover:scale-110" />
              )}
            </div>
          </button>
        </div>

        {/* Elegant Luxury Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-gradient-to-b from-gray-900/50 to-gray-800/30 border-t border-yellow-500/20 backdrop-blur-sm">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-yellow-400 bg-yellow-500/20 shadow-lg'
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive(item.href) && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-yellow-400 rounded-r-full" />
                    )}
                    <div className="absolute inset-0 bg-yellow-500/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                ))}
              </nav>
              
              {/* Luxury Mobile Contact Buttons */}
              <div className="flex space-x-3 pt-4 px-2">
                <a
                  href={`tel:${brandConfig.contactInfo.phone}`}
                  className="flex-1 flex items-center justify-center space-x-2 luxe-gold-gradient text-black px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
                >
                  <Phone size={16} />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${brandConfig.contactInfo.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-transparent border-2 border-yellow-500 text-yellow-400 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-yellow-500 hover:text-black"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
