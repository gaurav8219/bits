import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { CreditCard, Smartphone, Landmark, Truck } from 'lucide-react';
import PaymentForm from '../components/PaymentForm';

const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });
  
  const [step, setStep] = useState(1);
  
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount > 0 
      ? Math.round(item.price * (1 - item.discount / 100)) 
      : item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  const shipping = subtotal > 0 ? (subtotal > 5000 ? 0 : 100) : 0;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentSuccess = () => {
    alert('Payment successful! Your order has been placed.');
    clearCart();
    navigate('/');
  };

  const handlePaymentError = (error: string) => {
    alert(`Payment failed: ${error}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
    } else {
      // Process order
      alert('Order placed successfully! You will receive a confirmation email shortly.');
      clearCart();
      navigate('/');
    }
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Checkout</h1>
      
      {/* Checkout Steps */}
      <div className="flex mb-8">
        <div className={`flex-1 text-center pb-4 relative ${step >= 1 ? 'border-b-2 border-primary-DEFAULT' : 'border-b-2 border-gray-200'}`}>
          <span className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary-DEFAULT text-secondary-DEFAULT' : 'bg-gray-200 text-gray-500'}`}>
            1
          </span>
          <span className={`text-sm font-medium ${step >= 1 ? 'text-primary-DEFAULT' : 'text-gray-500'}`}>Shipping</span>
        </div>
        <div className={`flex-1 text-center pb-4 relative ${step >= 2 ? 'border-b-2 border-primary-DEFAULT' : 'border-b-2 border-gray-200'}`}>
          <span className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary-DEFAULT text-secondary-DEFAULT' : 'bg-gray-200 text-gray-500'}`}>
            2
          </span>
          <span className={`text-sm font-medium ${step >= 2 ? 'text-primary-DEFAULT' : 'text-gray-500'}`}>Payment</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="input"
                      rows={3}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              
              {step === 2 && (
                <>
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Payment Method</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <CreditCard size={20} className="mr-2 text-gray-600" />
                        <span>Credit / Debit Card</span>
                      </label>
                      
                      {formData.paymentMethod === 'card' && (
                        <div className="mt-4 pl-6">
                          <PaymentForm
                            amount={total}
                            onSuccess={handlePaymentSuccess}
                            onError={handlePaymentError}
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === 'upi'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Smartphone size={20} className="mr-2 text-gray-600" />
                        <span>UPI</span>
                      </label>
                      
                      {formData.paymentMethod === 'upi' && (
                        <div className="mt-4 pl-6">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            UPI ID
                          </label>
                          <input
                            type="text"
                            placeholder="yourname@upi"
                            className="input"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="netbanking"
                          checked={formData.paymentMethod === 'netbanking'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Landmark size={20} className="mr-2 text-gray-600" />
                        <span>Net Banking</span>
                      </label>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <Truck size={20} className="mr-2 text-gray-600" />
                        <span>Cash on Delivery</span>
                      </label>
                    </div>
                  </div>
                </>
              )}
              
              <div className="flex justify-between mt-8">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="btn-primary ml-auto"
                >
                  {step === 1 ? 'Continue to Payment' : 'Place Order'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="max-h-60 overflow-y-auto mb-4">
              {cartItems.map(item => {
                const itemPrice = item.discount > 0 
                  ? Math.round(item.price * (1 - item.discount / 100)) 
                  : item.price;
                
                return (
                  <div key={item.id} className="flex items-center py-3 border-b border-gray-200 last:border-b-0">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                        <span className="text-sm font-medium">₹{itemPrice * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (18% GST)</span>
                <span>₹{tax}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between font-bold text-gray-800">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;