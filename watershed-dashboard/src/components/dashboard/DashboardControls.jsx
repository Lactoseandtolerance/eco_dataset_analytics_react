import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Plus, X, RefreshCw, ChevronUp, ChevronDown } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import { getAvailableCharts } from '../charts/ChartRegistry';
import AddChartModal from './AddChartModal';

function DashboardControls() {
  const { 
    charts, 
    visibleCharts, 
    addChart, 
    resetDashboard 
  } = useDashboard();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isAddChartModalOpen, setIsAddChartModalOpen] = useState(false);
  
  // Get charts that are not currently visible
  const availableCharts = charts.filter(chart => !chart.visible);
  
  return (
    <div className="relative z-10 mb-8">
      {/* Control panel toggle button */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setIsAddChartModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 transition-colors"
        >
          <Plus size={16} />
          <span>Add Chart</span>
        </button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
        >
          <Settings size={16} />
          <span>Dashboard Controls</span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </motion.button>
      </div>
      
      {/* Add Chart Modal */}
      <AddChartModal 
        isOpen={isAddChartModalOpen} 
        onClose={() => setIsAddChartModalOpen(false)} 
      />
      
      {/* Control panel dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-800">Customize Dashboard</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Add charts section */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Add Charts</h4>
              {availableCharts.length > 0 ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsAddChartModalOpen(true);
                  }}
                  className="w-full py-2 px-4 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg flex items-center justify-center"
                >
                  <Plus size={16} className="mr-2" />
                  Add Charts to Dashboard
                </button>
              ) : (
                <p className="text-sm text-gray-500">All charts are currently displayed</p>
              )}
            </div>
            
            {/* Reset dashboard */}
            <div className="pt-3 border-t border-gray-100">
              <button
                onClick={() => {
                  resetDashboard();
                  setIsOpen(false);
                }}
                className="flex items-center text-sm text-gray-600 hover:text-gray-800"
              >
                <RefreshCw size={14} className="mr-1" />
                Reset to Default
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DashboardControls;