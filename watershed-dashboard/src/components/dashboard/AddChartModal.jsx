import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BarChart2, LineChart, PieChart, AreaChart, Activity, Layers, Radar } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';

// Map chart types to icons
const chartTypeIcons = {
  'line': <LineChart size={24} className="text-blue-600" />,
  'bar': <BarChart2 size={24} className="text-purple-600" />,
  'pie': <PieChart size={24} className="text-green-600" />,
  'area': <AreaChart size={24} className="text-cyan-600" />,
  'scatter': <Activity size={24} className="text-orange-600" />,
  'composed': <Layers size={24} className="text-pink-600" />,
  'radar': <Radar size={24} className="text-indigo-600" />,
};

function AddChartModal({ isOpen, onClose }) {
  const { charts, addChart } = useDashboard();
  
  // Get hidden charts that can be added
  const availableCharts = charts.filter(chart => !chart.visible);
  
  // Handle adding a chart
  const handleAddChart = (chartId) => {
    addChart(chartId);
    if (availableCharts.length === 1) {
      // Close modal if no more charts available
      onClose();
    }
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
              className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Add Charts to Dashboard</h3>
                <button 
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {availableCharts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableCharts.map(chart => (
                      <motion.div
                        key={chart.id}
                        whileHover={{ y: -4 }}
                        className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
                        onClick={() => handleAddChart(chart.id)}
                      >
                        <div className="flex items-start mb-3">
                          <div className="p-2 bg-blue-50 rounded-lg mr-4">
                            {chartTypeIcons[chart.type] || <BarChart2 size={24} className="text-blue-600" />}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{chart.title}</h4>
                            <p className="text-sm text-gray-500">{chart.subtitle}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-end">
                          <span className="text-sm text-blue-600 font-medium">Click to add</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">All available charts are already displayed</p>
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="border-t border-gray-100 p-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg mr-3 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default AddChartModal;