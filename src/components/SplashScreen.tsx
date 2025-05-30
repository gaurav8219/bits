import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden flex">
      {/* Left Side Content */}
      <div className="relative z-20 flex flex-col justify-center pl-10 pr-6 w-1/2">
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
        >
          BITS <span className="block text-teal-400">Laptop & Accessories</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 60 }}
        >
          All essentials for students and professionals in one place – explore laptops, gadgets, and tech accessories at BITS.
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
        
        </motion.button>
      </div>

      {/* Right Side Animated Image */}
      <div className="w-1/2 relative z-10 flex justify-center items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
          alt="BITS Store"
          className="w-3/4 h-auto object-cover rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 1.2, ease: 'easeOut', type: 'spring', stiffness: 60 }}
        />
      </div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Footer */}
      <div className="absolute bottom-4 left-10 z-30 text-sm text-gray-400">
        www.bitsstore.com
      </div>
    </div>
  );
};

export default SplashScreen;
