import React, { createContext, useContext, useState, useEffect } from 'react';

// Default chart configurations
const defaultCharts = [
  {
    id: 'water-quality',
    type: 'line',
    title: 'Water Quality Parameters',
    subtitle: '6-Month Trend Analysis',
    dataset: 'waterQualityData',
    visible: true,
    size: 'half', // half or full width
    order: 1,
  },
  {
    id: 'water-usage',
    type: 'pie',
    title: 'Water Usage by Sector',
    subtitle: 'Current Distribution',
    dataset: 'waterUsageData',
    visible: true,
    size: 'half',
    order: 2,
  },
  {
    id: 'water-level',
    type: 'area',
    title: 'Water Level Monitoring',
    subtitle: '6-Month Measurements',
    dataset: 'waterlevelData',
    visible: true,
    size: 'full',
    order: 3,
  },
  {
    id: 'pollutants',
    type: 'bar',
    title: 'Pollutant Concentrations',
    subtitle: 'Key Contaminants Monitoring',
    dataset: 'pollutantsData',
    visible: false,
    size: 'half',
    order: 4,
  },
  {
    id: 'precipitation',
    type: 'bar',
    title: 'Monthly Precipitation',
    subtitle: 'Rainfall Measurements',
    dataset: 'precipitationData',
    visible: false,
    size: 'half',
    order: 5,
  },
  {
    id: 'temperature',
    type: 'line',
    title: 'Water Temperature',
    subtitle: 'Seasonal Variations',
    dataset: 'temperatureData',
    visible: false,
    size: 'half',
    order: 6,
  }
];

// Create the context
const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  // Initialize state with default charts or from localStorage if available
  const [charts, setCharts] = useState(() => {
    const savedCharts = localStorage.getItem('dashboardCharts');
    return savedCharts ? JSON.parse(savedCharts) : defaultCharts;
  });
  
  // Save to localStorage when charts change
  useEffect(() => {
    try {
      localStorage.setItem('dashboardCharts', JSON.stringify(charts));
    } catch (error) {
      console.error("Could not save dashboard configuration to localStorage:", error);
    }
  }, [charts]);
  
  // Load from localStorage on initial mount
  useEffect(() => {
    try {
      const savedCharts = localStorage.getItem('dashboardCharts');
      if (savedCharts) {
        setCharts(JSON.parse(savedCharts));
      }
    } catch (error) {
      console.error("Could not load dashboard configuration from localStorage:", error);
      // Fallback to default configuration if there's an error
      setCharts(defaultCharts);
    }
  }, []);
  
  // Get visible charts sorted by order
  const visibleCharts = charts
    .filter(chart => chart.visible)
    .sort((a, b) => a.order - b.order);
    
  // Add a new chart or make an existing chart visible
  const addChart = (chartId) => {
    setCharts(charts.map(chart => 
      chart.id === chartId ? { ...chart, visible: true } : chart
    ));
  };
  
  // Hide a chart (not delete completely)
  const removeChart = (chartId) => {
    setCharts(charts.map(chart => 
      chart.id === chartId ? { ...chart, visible: false } : chart
    ));
  };
  
  // Update chart config (size, order, etc)
  const updateChart = (chartId, updates) => {
    setCharts(charts.map(chart => 
      chart.id === chartId ? { ...chart, ...updates } : chart
    ));
  };
  
  // Reset to default configuration
  const resetDashboard = () => {
    setCharts(defaultCharts);
  };
  
  // Reorder charts
  const reorderCharts = (startIndex, endIndex) => {
    const result = Array.from(visibleCharts);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    
    // Update order property
    const updated = result.map((chart, index) => ({
      ...chart,
      order: index + 1
    }));
    
    // Merge with hidden charts
    setCharts(charts.map(chart => {
      const updated = result.find(c => c.id === chart.id);
      return updated || chart;
    }));
  };
  
  return (
    <DashboardContext.Provider value={{
      charts,
      visibleCharts,
      addChart,
      removeChart,
      updateChart,
      resetDashboard,
      reorderCharts,
    }}>
      {children}
    </DashboardContext.Provider>
  );
};