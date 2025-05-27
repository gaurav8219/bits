import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex flex-col space-y-2">
            <button 
              onClick={handleWishlistToggle}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <Heart 
                size={18} 
                className={isWishlisted ? "fill-accent-DEFAULT text-accent-DEFAULT" : "text-gray-600"} 
              />
            </button>
          </div>
          {product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-accent-DEFAULT text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-gray-800 line-clamp-1">{product.name}</h3>
          </div>
          <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
          
          <div className="flex items-center mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {product.discount > 0 ? (
                <>
                  <span className="font-bold text-gray-800">₹{Math.round(product.price * (1 - product.discount / 100))}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹{product.price}</span>
                </>
              ) : (
                <span className="font-bold text-gray-800">₹{product.price}</span>
              )}
            </div>
            <button 
              onClick={handleAddToCart}
              className="p-2 bg-primary-DEFAULT text-secondary-DEFAULT rounded-full hover:bg-primary-dark transition-colors"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;