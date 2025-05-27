import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">BITS</h3>
            <p className="text-white mb-4">
              Your one-stop destination for premium laptops and accessories. We provide quality products at competitive prices with excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-teal-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-400">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-teal-400">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-teal-400">About Us</Link></li>
              <li><Link to="/products" className="text-white hover:text-teal-400">Products</Link></li>
              <li><Link to="/contact" className="text-white hover:text-teal-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-white hover:text-teal-400">FAQ</Link></li>
              <li><Link to="/shipping" className="text-white hover:text-teal-400">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-white hover:text-teal-400">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="text-white hover:text-teal-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white hover:text-teal-400">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-white">123 Tech Street, Digital City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">info@bitsstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 pt-6">
          <p className="text-center text-gray-200 text-sm">
            &copy; {new Date().getFullYear()} BITS - Laptop & Accessories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
