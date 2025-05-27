import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden flex">
      {/* Left Side Content */}
      <div className="relative z-20 flex flex-col justify-center pl-10 pr-6 w-1/2">
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          BITS <span className="block text-teal-400">Laptop & Accessories</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          All essentials for students and professionals in one place – explore laptops, gadgets, and tech accessories at BITS.
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          START SLIDE
        </motion.button>
      </div>

      {/* Right Side Animated Image */}
      <div className="w-1/2 relative z-10 flex justify-center items-center">
        <motion.img
          src="src\assets\file_00000000be54622fbafc635602140d9e.png" // ✅ Use forward slashes & place image in public folder
          alt="BITS Store"
          className="w-3/4 h-auto object-cover rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
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
