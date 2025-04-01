import React from 'react';
import { motion } from 'framer-motion';

function ChartCard({ title, subtitle, children }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

export default ChartCard;