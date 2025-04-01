import React from 'react';
import { motion } from 'framer-motion';
import SummaryCard from '../components/ui/SummaryCard';
import ChartCard from '../components/ui/ChartCard';
import WaterQualityChart from '../components/charts/WaterQualityChart';
import WaterUsageChart from '../components/charts/WaterUsageChart';
import WaterLevelChart from '../components/charts/WaterLevelChart';

function Dashboard() {
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartCard 
            title="Water Quality Parameters" 
            subtitle="6-Month Trend Analysis"
          >
            <WaterQualityChart />
          </ChartCard>
          
          <ChartCard 
            title="Water Usage by Sector" 
            subtitle="Current Distribution"
          >
            <WaterUsageChart />
          </ChartCard>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-8">
          <ChartCard 
            title="Water Level Monitoring" 
            subtitle="6-Month Measurements"
          >
            <WaterLevelChart />
          </ChartCard>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;