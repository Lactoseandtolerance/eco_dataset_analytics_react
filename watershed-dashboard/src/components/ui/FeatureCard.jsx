import React from 'react';
import { motion } from 'framer-motion';

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="p-3 bg-white rounded-full inline-block mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;