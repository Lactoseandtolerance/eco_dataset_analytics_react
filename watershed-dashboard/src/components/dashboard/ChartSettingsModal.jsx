import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Save } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

function ChartSettingsModal({ isOpen, onClose, chartId }) {
  const { charts, updateChart } = useDashboard();
  
  // Find the chart we're editing
  const chart = charts.find(c => c.id === chartId) || null;
  
  // Local state for form values
  const [title, setTitle] = useState(chart?.title || '');
  const [subtitle, setSubtitle] = useState(chart?.subtitle || '');
  const [size, setSize] = useState(chart?.size || 'half');
  
  // If no chart is found, don't render
  if (!chart) return null;
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    updateChart(chartId, {
      title,
      subtitle,
      size
    });
    
    onClose();
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="flex items-center justify-center min-h-screen p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-xl shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="flex items-center">
                  <Settings size={20} className="text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Chart Settings</h3>
                </div>
                <button 
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Content */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <label htmlFor="chart-title" className="block text-sm font-medium text-gray-700 mb-1">
                      Chart Title
                    </label>
                    <input
                      id="chart-title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter chart title"
                    />
                  </div>
                  
                  {/* Subtitle */}
                  <div>
                    <label htmlFor="chart-subtitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Chart Subtitle
                    </label>
                    <input
                      id="chart-subtitle"
                      type="text"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter chart subtitle"
                    />
                  </div>
                  
                  {/* Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Chart Size
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={size === 'half'}
                          onChange={() => setSize('half')}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Half Width</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={size === 'full'}
                          onChange={() => setSize('full')}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Full Width</span>
                      </label>
                    </div>
                  </div>
                </div>
              
                {/* Footer */}
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ChartSettingsModal;