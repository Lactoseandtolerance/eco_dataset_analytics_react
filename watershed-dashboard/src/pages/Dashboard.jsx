import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SummaryCard from '../components/ui/SummaryCard';
import DashboardControls from '../components/dashboard/DashboardControls';
import ModularChart from '../components/dashboard/ModularChart';
import { useDashboard } from '../context/DashboardContext';

function Dashboard() {
  const { visibleCharts } = useDashboard();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 min-h-screen"
    >
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Watershed Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitoring water quality and usage across regions</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SummaryCard
            title="Water Quality Index"
            value="86"
            description="Good - Above regional average"
            trend="up"
            percentage="3.2%"
            color="blue"
          />
          <SummaryCard
            title="Water Usage"
            value="124.3M"
            description="Gallons per day - Urban & Agricultural"
            trend="down"
            percentage="1.8%"
            color="green"
          />
        </div>
        
        {/* Dashboard Controls */}
        <DashboardControls />
        
        {/* Dynamic Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <AnimatePresence mode="popLayout">
            {visibleCharts.map((chart) => (
              <ModularChart 
                key={chart.id} 
                chart={chart} 
              />
            ))}
          </AnimatePresence>
          
          {visibleCharts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center bg-gray-50 rounded-xl p-10">
              <p className="text-gray-500 mb-4">No charts are currently displayed</p>
              <button
                onClick={() => document.getElementById('add-chart-button')?.click()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Charts
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;