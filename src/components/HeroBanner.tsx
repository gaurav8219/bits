import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative h-screen bg-secondary overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('/HeroBanner.jpg')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Next-Gen <span className="text-primary">Tech</span> Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Discover premium laptops and accessories for professionals, gamers, and creators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row"
          >
            <Link 
              to="/?category=laptops" 
              className="btn-primary group flex items-center justify-center text-lg"
            >
              Explore Laptops
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/?category=accessories" 
              className="btn-secondary flex items-center justify-center text-lg"
            >
              Browse Accessories
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            <div className="text-center">
              <h3 className="text-primary text-3xl font-bold mb-2">500+</h3>
              <p className="text-gray-300">Products</p>
            </div>
            <div className="text-center">
              <h3 className="text-primary text-3xl font-bold mb-2">50K+</h3>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-primary text-3xl font-bold mb-2">24/7</h3>
              <p className="text-gray-300">Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
