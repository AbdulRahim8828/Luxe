import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Phone, MessageCircle, Star, Shield, Clock, Heart, Award } from 'lucide-react';
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
        
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-16 pb-24 px-4 relative overflow-hidden">
          {/* Enhanced Background Elements */}
          <div className="absolute top-20 left-4 w-40 h-40 bg-gradient-to-br from-yellow-600/15 to-yellow-800/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-4 w-48 h-48 bg-gradient-to-br from-yellow-700/15 to-yellow-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 rounded-full blur-2xl"></div>
          
          <div className="max-w-md mx-auto relative z-10">
            {/* Enhanced Header with Hero Section */}
            <div className="text-center mb-8">
              <Link 
                to="/services" 
                className="inline-flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-all duration-300 p-3 rounded-2xl hover:bg-gray-800/30 backdrop-blur-sm border border-transparent hover:border-yellow-500/20 mb-6 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl flex items-center justify-center border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300">
                  <ArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300" />
                </div>
                <span className="font-semibold">Back to Services</span>
              </Link>
              
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Your Cart
                </h1>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ready to transform your furniture with premium care
                </p>
              </div>
            </div>

            {/* Empty Cart with Enhanced Design */}
            <div className="text-center py-12">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-3xl flex items-center justify-center mx-auto border border-gray-700/50 backdrop-blur-sm">
                  <ShoppingBag className="w-12 h-12 text-gray-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full border border-yellow-500/30 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Your cart awaits
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-xs mx-auto">
                Discover our premium furniture polishing services crafted with luxury and precision
              </p>
              
              <Link
                to="/services"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-2xl font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/25 group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-yellow-500/30">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-gray-300 text-xs font-medium">Premium Quality</span>
              </div>
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-yellow-500/30">
                  <Shield className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-gray-300 text-xs font-medium">6 Month Warranty</span>
              </div>
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-yellow-500/30">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-gray-300 text-xs font-medium">24/7 Service</span>
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
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-16 pb-24 px-4 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-20 left-4 w-40 h-40 bg-gradient-to-br from-yellow-600/15 to-yellow-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-4 w-48 h-48 bg-gradient-to-br from-yellow-700/15 to-yellow-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-md mx-auto relative z-10">
          {/* Enhanced Header with Hero Section */}
          <div className="text-center mb-8">
            <Link 
              to="/services" 
              className="inline-flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-all duration-300 p-3 rounded-2xl hover:bg-gray-800/30 backdrop-blur-sm border border-transparent hover:border-yellow-500/20 mb-6 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl flex items-center justify-center border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300">
                <ArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300" />
              </div>
              <span className="font-semibold">Back to Services</span>
            </Link>
            
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
                Your Selection
              </h1>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <p className="text-yellow-400 font-semibold">
                  {cartItems.length} {cartItems.length === 1 ? 'service' : 'services'} selected
                </p>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Cart Items */}
          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-5 hover:border-yellow-500/30 transition-all duration-300 shadow-xl hover:shadow-yellow-500/10 group">
                <div className="flex items-start space-x-4">
                  {/* Enhanced Service Icon */}
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-yellow-500/30 group-hover:scale-105 transition-transform duration-300">
                      <ShoppingBag className="w-7 h-7 text-yellow-400" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-black" />
                    </div>
                  </div>
                  
                  {/* Enhanced Service Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-base mb-2 leading-tight">
                      {item.serviceName}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed bg-gray-700/30 px-3 py-1 rounded-lg inline-block">
                      {item.optionName}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-yellow-400 font-bold text-lg">
                          ₹{item.price.toLocaleString()}
                        </p>
                        <span className="text-gray-500 text-xs">per service</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 border border-gray-600/50 hover:border-red-500/50 group/btn"
                      >
                        <Trash2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Quantity Controls */}
                <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-700/50">
                  <span className="text-gray-300 font-medium">Quantity</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50 hover:scale-105"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="w-12 h-10 flex items-center justify-center bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-xl">
                      <span className="text-yellow-400 font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50 hover:scale-105"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Order Summary */}
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 mb-8 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center border border-yellow-500/30">
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display' }}>
                Order Summary
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-gray-300 p-3 bg-gray-700/30 rounded-xl">
                <span className="font-medium">Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                <span className="font-bold text-white">₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-gray-300 p-3 bg-gray-700/30 rounded-xl">
                <span className="font-medium">Service Charge</span>
                <span className="text-green-400 font-bold">Free</span>
              </div>
              <div className="flex justify-between items-center text-gray-300 p-3 bg-gray-700/30 rounded-xl">
                <span className="font-medium">Home Visit</span>
                <span className="text-green-400 font-bold">Free</span>
              </div>
              <div className="border-t border-gray-700/50 pt-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl border border-yellow-500/20">
                  <span className="text-white font-bold text-xl">Total Amount</span>
                  <span className="text-yellow-400 font-bold text-3xl">₹{getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Checkout Buttons */}
          <div className="space-y-4 mb-8">
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-5 rounded-2xl font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center space-x-3 shadow-xl shadow-yellow-500/25 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>{isCheckingOut ? 'Opening WhatsApp...' : 'Book via WhatsApp'}</span>
            </button>
            
            <a
              href="tel:+918828709945"
              className="w-full bg-transparent border-2 border-yellow-500 text-yellow-400 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center space-x-3 group backdrop-blur-sm"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Call to Book Now</span>
            </a>
          </div>

          {/* Trust Badge */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-gray-300 text-sm font-medium">Secure & Trusted Service</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;