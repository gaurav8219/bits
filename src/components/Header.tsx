import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-DEFAULT">BITS</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <form 
            onSubmit={handleSearch}
            className="hidden md:flex items-center flex-1 max-w-xl mx-8"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search laptops, accessories..."
                className="w-full py-2 px-4 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Navigation Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/wishlist" className="relative">
              <Heart size={24} className="hover:text-primary-DEFAULT transition-colors" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-DEFAULT text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="hover:text-primary-DEFAULT transition-colors" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-DEFAULT text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/login">
              <User size={24} className="hover:text-primary-DEFAULT transition-colors" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <form 
          onSubmit={handleSearch}
          className="mt-3 md:hidden"
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search laptops, accessories..."
              className="w-full py-2 px-4 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-white hover:text-primary-DEFAULT py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/wishlist" 
                className="text-white hover:text-primary-DEFAULT py-2 flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Wishlist</span>
                {wishlistItems.length > 0 && (
                  <span className="bg-accent-DEFAULT text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              <Link 
                to="/cart" 
                className="text-white hover:text-primary-DEFAULT py-2 flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Cart</span>
                {cartItems.length > 0 && (
                  <span className="bg-accent-DEFAULT text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <Link 
                to="/login" 
                className="text-white hover:text-primary-DEFAULT py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Categories Navigation */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex items-center space-x-8 py-2">
            <Link to="/" className="text-white hover:text-primary-DEFAULT text-sm">Home</Link>
            <Link to="/?category=laptops" className="text-white hover:text-primary-DEFAULT text-sm">Laptops</Link>
            <Link to="/?category=accessories" className="text-white hover:text-primary-DEFAULT text-sm">Accessories</Link>
            <Link to="/?category=deals" className="text-white hover:text-primary-DEFAULT text-sm">Deals</Link>
            <Link to="/?category=new" className="text-white hover:text-primary-DEFAULT text-sm">New Arrivals</Link>
            <Link to="/?category=new" className="text-white hover:text-primary-DEFAULT text-sm">Order</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
