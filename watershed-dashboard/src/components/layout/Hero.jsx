import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function Hero() {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 to-transparent z-10"></div>
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Watershed landscape" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Watershed Analytics for a <span className="text-blue-600">Sustainable Future</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:pr-10">
            Comprehensive analytics and visualization tools to monitor, analyze and protect
            our most valuable resource: water.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/dashboard">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Explore Dashboard
              </motion.button>
            </Link>
            <Link to="/regions">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
              >
                View Regions
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 1.5, 
          type: "spring",
          stiffness: 50
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown size={30} className="text-blue-600 animate-bounce" />
      </motion.div>
    </div>
  );
}

export default Hero;