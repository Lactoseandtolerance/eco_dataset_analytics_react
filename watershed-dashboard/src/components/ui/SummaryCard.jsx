import React from 'react';
import { motion } from 'framer-motion';
import { Droplet } from 'lucide-react';

function SummaryCard({ title, value, description, trend, percentage, color }) {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };
  
  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
  };
  
  const trendIcons = {
    up: '↑',
    down: '↓',
  };
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg ${colors[color]} flex items-center justify-center mb-4`}>
          <Droplet size={24} className="text-white" />
        </div>
        <h3 className="text-lg font-medium text-gray-700 mb-1">{title}</h3>
        <div className="flex items-baseline">
          <p className="text-3xl font-bold text-gray-800">{value}</p>
          <span className={`ml-4 text-sm font-medium ${trendColors[trend]}`}>
            {trendIcons[trend]} {percentage}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
    </motion.div>
  );
}

export default SummaryCard;