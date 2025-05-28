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
           <ul className="space-y-2 text-sm text-gray-300">
  <li>
    <span className="text-white font-medium">FAQ:</span> Get answers to the most commonly asked questions about our products, shipping, payments, and more.
  </li>
  <li>
    <span className="text-white font-medium">Shipping Policy:</span> Orders are processed within 1–2 business days. Delivery may take 3–7 business days depending on location.
  </li>
  <li>
    <span className="text-white font-medium">Returns & Refunds:</span> You can return the product within 7 days of delivery. Refunds will be processed within 5 working days after approval.
  </li>
  <li>
    <span className="text-white font-medium">Privacy Policy:</span> We value your privacy. All personal data is encrypted and never shared without consent.
  </li>
  <li>
    <span className="text-white font-medium">Terms & Conditions:</span> By using our services, you agree to our terms regarding purchases, warranties, and support.
  </li>
</ul>

          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-white">VPO Malhot61 Teh Jhandutta Distt. Bilaspur (H.P) </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">+91 8219373551</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-white">gauravsureel3551@gmail.com</span>
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
