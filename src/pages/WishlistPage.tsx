import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';

const WishlistPage: React.FC = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (productId: string) => {
    const product = wishlistItems.find(item => item.id === productId);
    if (product) {
      addToCart({...product, quantity: 1});
      removeFromWishlist(productId);
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">Save items you love to your wishlist and find them here anytime.</p>
          <Link to="/" className="btn-primary">
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Wishlist ({wishlistItems.length})</h1>
        <button 
          onClick={() => clearWishlist()}
          className="text-sm text-gray-500 hover:text-accent-DEFAULT"
        >
          Clear Wishlist
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map(item => (
          <div key={item.id} className="card">
            <div className="relative">
              <Link to={`/product/${item.id}`}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
              </Link>
              <button 
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Trash2 size={16} className="text-gray-600" />
              </button>
            </div>
            
            <div className="p-4">
              <Link to={`/product/${item.id}`} className="block">
                <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
                
                <div className="flex items-center mb-4">
                  {item.discount > 0 ? (
                    <>
                      <span className="font-bold text-gray-800">
                        ₹{Math.round(item.price * (1 - item.discount / 100))}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">₹{item.price}</span>
                    </>
                  ) : (
                    <span className="font-bold text-gray-800">₹{item.price}</span>
                  )}
                </div>
              </Link>
              
              <button 
                onClick={() => handleAddToCart(item.id)}
                className="btn-primary w-full flex items-center justify-center"
              >
                <ShoppingCart size={16} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;