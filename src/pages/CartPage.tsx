import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount > 0 
      ? Math.round(item.price * (1 - item.discount / 100)) 
      : item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  const shipping = subtotal > 0 ? (subtotal > 5000 ? 0 : 100) : 0;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {cartItems.map(item => {
              const itemPrice = item.discount > 0 
                ? Math.round(item.price * (1 - item.discount / 100)) 
                : item.price;
              
              return (
                <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center p-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <Link to={`/product/${item.id}`} className="font-medium text-gray-800 hover:text-primary-DEFAULT">
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-500">{item.brand}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <button 
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            -
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                            {item.quantity}
                          </span>
                          <button 
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="font-bold text-gray-800 mr-4">₹{itemPrice * item.quantity}</span>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-accent-DEFAULT"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <Link to="/" className="flex items-center text-primary-DEFAULT hover:underline">
              <ArrowLeft size={16} className="mr-1" />
              Continue Shopping
            </Link>
            
            <button 
              onClick={() => clearCart()}
              className="text-gray-500 hover:text-accent-DEFAULT"
            >
              Clear Cart
            </button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
            
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

            {/* ✅ Updated Proceed to Checkout Button */}
            <button 
              onClick={() => {
                localStorage.setItem('orderCompleted', 'true'); // store flag
                navigate('/checkout');                          // redirect to checkout
              }}
              className="btn-primary w-full"
            >
              Proceed to Checkout
            </button>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-800 mb-2">We Accept</h3>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
