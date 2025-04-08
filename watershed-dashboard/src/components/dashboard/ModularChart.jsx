import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronUp, ChevronDown, Maximize, Minimize, Settings } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import { DynamicChart } from '../charts/ChartRegistry';
import ChartSettingsModal from './ChartSettingsModal';

function ModularChart({ chart }) {
  const { removeChart, updateChart } = useDashboard();
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  
  // Toggle between half and full width
  const toggleSize = () => {
    updateChart(chart.id, { 
      size: chart.size === 'half' ? 'full' : 'half' 
    });
  };
  
  // Move chart up in order
  const moveUp = () => {
    updateChart(chart.id, { order: Math.max(1, chart.order - 1) });
  };
  
  // Move chart down in order
  const moveDown = () => {
    updateChart(chart.id, { order: chart.order + 1 });
  };
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`${chart.size === 'full' ? 'col-span-full' : 'col-span-1'} bg-white rounded-xl shadow-sm overflow-hidden`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800">{chart.title}</h3>
            <p className="text-sm text-gray-500">{chart.subtitle}</p>
          </div>
          <div className="flex items-center space-x-1">
            <button 
              onClick={moveUp} 
              className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
              title="Move Up"
            >
              <ChevronUp size={16} />
            </button>
            <button 
              onClick={moveDown} 
              className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
              title="Move Down"
            >
              <ChevronDown size={16} />
            </button>
            <button 
              onClick={toggleSize} 
              className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
              title={chart.size === 'half' ? 'Expand' : 'Shrink'}
            >
              {chart.size === 'half' ? (
                <Maximize size={16} />
              ) : (
                <Minimize size={16} />
              )}
            </button>
            <button 
              onClick={() => setIsSettingsModalOpen(true)} 
              className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
              title="Settings"
            >
              <Settings size={16} />
            </button>
            <button 
              onClick={() => removeChart(chart.id)} 
              className="p-1 text-gray-400 hover:text-red-500 transition-colors"
              title="Remove"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <DynamicChart chartId={chart.id} />
      </div>
      
      {/* Chart Settings Modal */}
      <ChartSettingsModal 
        isOpen={isSettingsModalOpen} 
        onClose={() => setIsSettingsModalOpen(false)} 
        chartId={chart.id}
      />
    </motion.div>
  );
}

export default ModularChart;