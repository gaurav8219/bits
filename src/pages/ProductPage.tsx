import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { laptops, accessories } from '../data/products';
import { Product } from '../types';
import { motion } from 'framer-motion';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(0);
  
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    // Find product from our data
    const allProducts = [...laptops, ...accessories];
    const foundProduct = allProducts.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-xl">Loading product...</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({...product, quantity});
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isWishlisted = isInWishlist(product.id);
  
  const discountedPrice = product.discount > 0 
    ? Math.round(product.price * (1 - product.discount / 100)) 
    : product.price;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-primary-DEFAULT">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/?category=${product.category}`} className="hover:text-primary-DEFAULT">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg overflow-hidden mb-4 border border-gray-200">
            <motion.img 
              src={product.images ? product.images[activeImage] : product.image} 
              alt={product.name}
              className="w-full h-80 object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={activeImage}
            />
          </div>
          
          {/* Thumbnail Images */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer border-2 rounded-md overflow-hidden ${
                    activeImage === index ? 'border-primary-DEFAULT' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt={`${product.name} - view ${index + 1}`} className="w-full h-16 object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">{product.rating} ({product.reviewCount} reviews)</span>
          </div>
          
          <div className="mb-6">
            {product.discount > 0 ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-800">₹{discountedPrice}</span>
                <span className="text-lg text-gray-500 line-through ml-3">₹{product.price}</span>
                <span className="ml-3 bg-accent-DEFAULT text-white text-sm font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-gray-800">₹{product.price}</span>
            )}
            <p className="text-sm text-green-600 mt-1">In Stock</p>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600">{product.shortDescription}</p>
          </div>
          
          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <span className="mr-4 text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button 
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
              <button 
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={handleAddToCart}
              className="btn-primary flex-1 flex items-center justify-center"
            >
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </button>
            <button 
              onClick={handleWishlistToggle}
              className={`btn flex-1 flex items-center justify-center ${
                isWishlisted 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Heart 
                size={18} 
                className={`mr-2 ${isWishlisted ? 'fill-red-600' : ''}`} 
              />
              {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
          
          {/* Product Features */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Highlights</h3>
            <ul className="space-y-2">
              {product.highlights?.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-DEFAULT mr-2">•</span>
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Shipping Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Truck size={20} className="text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">Free Shipping</span>
            </div>
            <div className="flex items-center">
              <Shield size={20} className="text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">1 Year Warranty</span>
            </div>
            <div className="flex items-center">
              <RotateCcw size={20} className="text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">7-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-primary-DEFAULT text-primary-DEFAULT'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'specifications'
                  ? 'border-primary-DEFAULT text-primary-DEFAULT'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-primary-DEFAULT text-primary-DEFAULT'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reviews ({product.reviewCount})
            </button>
          </nav>
        </div>
        
        <div className="py-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-600">{product.description}</p>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.specifications?.map((spec, index) => (
                <div key={index} className="border-b border-gray-200 pb-3">
                  <h4 className="font-medium text-gray-800">{spec.name}</h4>
                  <p className="text-gray-600">{spec.value}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              {/* Reviews would go here */}
              <p className="text-gray-600">Customer reviews coming soon.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      <div>
        <h2 className="section-title mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Show related products from the same category */}
          {(product.category === 'laptops' ? laptops : accessories)
            .filter(p => p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <div key={relatedProduct.id} className="card">
                <Link to={`/product/${relatedProduct.id}`} className="block">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-1">{relatedProduct.name}</h3>
                    <p className="text-primary-DEFAULT font-bold">₹{relatedProduct.price}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;