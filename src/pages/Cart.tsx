import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, X } from 'lucide-react';
import { SelectedService } from '../types';
import SEO from '../components/SEO';

interface CartProps {
  selectedServices: SelectedService[];
  onUpdateQuantity: (serviceId: string, optionId: string, newQuantity: number) => void;
  onRemoveService: (serviceId: string, optionId: string) => void;
  onProceedToCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  selectedServices,
  onUpdateQuantity,
  onRemoveService,
  onProceedToCheckout,
}) => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState('');

  // Valid coupons
  const validCoupons = {
    'FIRST10': { discount: 0.10, description: 'First Booking - 10% OFF' },
  };

  // Calculate totals
  const itemTotal = selectedServices.reduce((sum, service) => sum + service.price * service.quantity, 0);
  const taxesAndFee = Math.round(itemTotal * 0.08); // 8% taxes
  
  // Apply coupon discount
  let discount = 0;
  if (appliedCoupon && validCoupons[appliedCoupon as keyof typeof validCoupons]) {
    discount = Math.round(itemTotal * validCoupons[appliedCoupon as keyof typeof validCoupons].discount);
  }
  
  const totalAmount = itemTotal + taxesAndFee - discount;
  const advancePayment = 49; // Fixed advance payment
  const amountToPay = advancePayment;
  const payableAfterService = totalAmount - advancePayment;

  // Handle coupon application
  const handleApplyCoupon = () => {
    const code = couponCode.toUpperCase().trim();
    if (validCoupons[code as keyof typeof validCoupons]) {
      setAppliedCoupon(code);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code');
      setAppliedCoupon(null);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  return (
    <>
      <SEO
        title="Your Cart - A1 Furniture Polish | Review Your Booking"
        description="Review your furniture polishing service booking. Check selected services, pricing, and proceed to checkout for professional furniture care in Mumbai."
        keywords="furniture polish cart, booking review, service checkout, Mumbai furniture services"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Your cart</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Checkout Section */}
        <section className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-bold mb-4">Checkout</h2>
          
          {/* Services List */}
          <div className="space-y-6">
            {selectedServices.map((service) => (
              <div key={`${service.serviceId}-${service.optionId}`} className="space-y-3">
                <h3 className="font-semibold text-gray-900">{service.serviceName}</h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{service.optionName}</span>
                  
                  <div className="flex items-center gap-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 border-2 border-purple-600 rounded-lg px-3 py-1">
                      <button
                        onClick={() => {
                          if (service.quantity > 1) {
                            onUpdateQuantity(service.serviceId, service.optionId, service.quantity - 1);
                          } else {
                            onRemoveService(service.serviceId, service.optionId);
                          }
                        }}
                        className="text-purple-600 font-bold text-lg w-6 h-6 flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="font-semibold text-purple-600 min-w-[20px] text-center">
                        {service.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(service.serviceId, service.optionId, service.quantity + 1)}
                        className="text-purple-600 font-bold text-lg w-6 h-6 flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    
                    {/* Price */}
                    <span className="font-semibold text-gray-900 min-w-[80px] text-right">
                      ₹{(service.price * service.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coupons Section */}
        <section className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Apply Coupon</h3>
          </div>
          
          {!appliedCoupon ? (
            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Enter coupon code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 uppercase"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  Apply
                </button>
              </div>
              {couponError && (
                <p className="text-sm text-red-600">{couponError}</p>
              )}
              <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-semibold text-green-800 mb-1">Available Offer:</p>
                <p className="text-xs text-green-700">Use code <span className="font-bold">FIRST10</span> for 10% OFF on first booking</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <div>
                <p className="font-semibold text-green-800">{appliedCoupon}</p>
                <p className="text-sm text-green-700">
                  {validCoupons[appliedCoupon as keyof typeof validCoupons].description}
                </p>
              </div>
              <button
                onClick={handleRemoveCoupon}
                className="p-1 hover:bg-green-100 rounded transition-colors"
              >
                <X className="w-5 h-5 text-green-700" />
              </button>
            </div>
          )}
        </section>

        {/* Payment Summary */}
        <section className="bg-white rounded-lg p-4 shadow-sm space-y-4">
          <h2 className="text-lg font-bold">Payment summary</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>Item total</span>
              <span className="font-semibold">₹{itemTotal.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between text-gray-700">
              <span>Taxes and Fee</span>
              <span className="font-semibold">₹{taxesAndFee.toLocaleString()}</span>
            </div>
            
            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Coupon Discount ({appliedCoupon})</span>
                <span className="font-semibold">-₹{discount.toLocaleString()}</span>
              </div>
            )}
            
            <div className="border-t border-gray-200 pt-3 flex justify-between text-gray-900">
              <span className="font-bold">Total amount</span>
              <span className="font-bold">₹{totalAmount.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between text-gray-700">
              <span>Advance payment</span>
              <span className="font-semibold">₹{advancePayment}</span>
            </div>
            
            <p className="text-sm text-gray-600">
              ₹{payableAfterService.toLocaleString()} payable after service
            </p>
            
            <div className="border-t border-gray-200 pt-3 flex justify-between text-gray-900">
              <span className="font-bold">Amount to pay</span>
              <span className="font-bold">₹{amountToPay}</span>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={onProceedToCheckout}
            className="w-full bg-purple-600 text-white font-semibold py-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Login/Sign up to proceed
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cart;
