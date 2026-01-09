import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Phone, MessageCircle, Star, Shield, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SEO from '../components/SEO';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Create WhatsApp message with cart details
    const message = `Hello! I'd like to book the following services:\n\n${cartItems.map(item => 
      `• ${item.serviceName} - ${item.optionName}\n  Quantity: ${item.quantity}\n  Price: ₹${item.price.toLocaleString()}\n`
    ).join('\n')}\n\nTotal: ₹${getTotalPrice().toLocaleString()}\n\nPlease confirm my booking.`;
    
    const whatsappUrl = `https://wa.me/918828709945?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => setIsCheckingOut(false), 2000);
  };

  if (cartItems.length === 0) {
    return (
      <>
        <SEO
          title="Shopping Cart - LUXE Premium Furniture Services"
          description="Review your selected premium furniture polishing services before booking"
          canonical="/cart"
        />
        
        <div className="min-h-screen bg-black pt-20 pb-24 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 left-4 w-32 h-32 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 right-4 w-40 h-40 bg-gradient-to-br from-yellow-700/10 to-yellow-900/5 rounded-full blur-2xl"></div>
          
          <div className="max-w-sm mx-auto relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/services" 
                className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors p-2 -ml-2 rounded-lg hover:bg-gray-800/50"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Services</span>
              </Link>
              <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
                Cart
              </h1>
              <div className="w-16"></div>
            </div>

            {/* Empty Cart */}
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700/50">
                <ShoppingBag className="w-10 h-10 text-gray-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display' }}>
                Your cart is empty
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                Discover our premium furniture polishing services and add them to your cart
              </p>
              <Link
                to="/services"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-xl font-bold text-sm hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25"
              >
                Browse Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 mt-12">
              <div className="text-center">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-yellow-500/30">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-gray-400 text-xs">Premium Quality</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-yellow-500/30">
                  <Shield className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-gray-400 text-xs">6 Month Warranty</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-yellow-500/30">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-gray-400 text-xs">24/7 Service</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`Cart (${cartItems.length} items) - LUXE Premium Furniture Services`}
        description="Review your selected premium furniture polishing services before booking"
        canonical="/cart"
      />
      
      <div className="min-h-screen bg-black pt-20 pb-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-4 w-32 h-32 bg-gradient-to-br from-yellow-600/10 to-yellow-800/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-4 w-40 h-40 bg-gradient-to-br from-yellow-700/10 to-yellow-900/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-sm mx-auto relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/services" 
              className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors p-2 -ml-2 rounded-lg hover:bg-gray-800/50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Services</span>
            </Link>
            <div className="text-center">
              <h1 className="text-lg font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
                Your Cart
              </h1>
              <p className="text-yellow-400 text-xs font-medium">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
            </div>
            <div className="w-16"></div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 mb-6">
            {cartItems.map((item, index) => (
              <div key={item.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  {/* Service Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-yellow-500/30">
                    <ShoppingBag className="w-6 h-6 text-yellow-400" />
                  </div>
                  
                  {/* Service Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-sm mb-1 leading-tight">
                      {item.serviceName}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2 leading-relaxed">
                      {item.optionName}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-yellow-400 font-bold text-base">
                        ₹{item.price.toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200 border border-gray-600/50 hover:border-red-500/50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Quantity Controls */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700/50">
                  <span className="text-gray-300 text-sm font-medium">Quantity</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white transition-all duration-200 border border-gray-600/50 hover:border-gray-500/50"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="w-10 h-8 flex items-center justify-center bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                      <span className="text-yellow-400 font-bold text-sm">
                        {item.quantity}
                      </span>
                    </div>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white transition-all duration-200 border border-gray-600/50 hover:border-gray-500/50"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-6 shadow-xl">
            <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Order Summary
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-gray-300">
                <span className="text-base">Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                <span className="font-semibold">₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span className="text-base">Service Charge</span>
                <span className="text-green-400 font-semibold">Free</span>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span className="text-base">Home Visit</span>
                <span className="text-green-400 font-semibold">Free</span>
              </div>
              <div className="border-t border-gray-700/50 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-xl">Total</span>
                  <span className="text-yellow-400 font-bold text-2xl">₹{getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Buttons */}
          <div className="space-y-4 mb-8">
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-xl font-bold text-base hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center space-x-3 shadow-lg shadow-yellow-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{isCheckingOut ? 'Opening WhatsApp...' : 'Book via WhatsApp'}</span>
            </button>
            
            <a
              href="tel:+918828709945"
              className="w-full bg-transparent border-2 border-yellow-500 text-yellow-400 py-4 rounded-xl font-bold text-base hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>Call to Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;