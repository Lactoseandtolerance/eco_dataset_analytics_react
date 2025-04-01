import React from 'react';
import { motion } from 'framer-motion';

function Reports() {
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
          <h1 className="text-3xl font-bold text-gray-800">Water Quality Reports</h1>
          <p className="text-gray-600 mt-2">Historical and current water quality analysis</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden h-64">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Annual Water Quality Report</h3>
              <p className="text-gray-600 mb-4">Comprehensive analysis of water quality trends over the past year</p>
              <p className="text-blue-600 font-medium">Coming Soon</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden h-64">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Monthly Analysis</h3>
              <p className="text-gray-600 mb-4">Detailed monthly snapshots of water quality metrics</p>
              <p className="text-blue-600 font-medium">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Reports;