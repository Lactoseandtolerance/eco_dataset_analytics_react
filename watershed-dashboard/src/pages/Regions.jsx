import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

function Regions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 min-h-screen"
    >
      <div className="container mx-auto px-4 py-8">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Regional Watershed Map</h1>
          <p className="text-gray-600 mt-2">Explore watersheds by geographical regions</p>
        </header>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-4 h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-700">Interactive Map Coming Soon</h3>
            <p className="text-gray-500 mt-2">Regional watershed data will be displayed here</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Regions;