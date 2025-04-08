import React from 'react';

// Import all chart components
import WaterQualityChart from './WaterQualityChart';
import WaterUsageChart from './WaterUsageChart';
import WaterLevelChart from './WaterLevelChart';
import PollutantsChart from './PollutantsChart';
import PrecipitationChart from './PrecipitationChart';
import TemperatureChart from './TemperatureChart';
import BiodiversityChart from './BiodiversityChart';

// Import all datasets
import { 
  waterQualityData, 
  waterUsageData, 
  waterlevelData 
} from '../../data/mockData';

import { 
  pollutantsData, 
  precipitationData, 
  temperatureData, 
  biodiversityData,
  accessPointsData,
  sedimentData,
  watershedAreasData
} from '../../data/extendedMockData';

// Map chart IDs to their respective components
const chartComponents = {
  'water-quality': WaterQualityChart,
  'water-usage': WaterUsageChart,
  'water-level': WaterLevelChart,
  'pollutants': PollutantsChart,
  'precipitation': PrecipitationChart,
  'temperature': TemperatureChart,
  'biodiversity': BiodiversityChart,
};

// Map dataset names to actual data
const chartDatasets = {
  'waterQualityData': waterQualityData,
  'waterUsageData': waterUsageData,
  'waterlevelData': waterlevelData,
  'pollutantsData': pollutantsData,
  'precipitationData': precipitationData,
  'temperatureData': temperatureData,
  'biodiversityData': biodiversityData,
  'accessPointsData': accessPointsData,
  'sedimentData': sedimentData,
  'watershedAreasData': watershedAreasData,
};

// Get chart component by ID
export const getChartComponent = (chartId) => {
  return chartComponents[chartId] || null;
};

// Get dataset by name
export const getDataset = (datasetName) => {
  return chartDatasets[datasetName] || [];
};

// Get all available charts for selection
export const getAvailableCharts = () => {
  return Object.keys(chartComponents).map(id => ({
    id,
    name: id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));
};

// Dynamic Chart Renderer component
export function DynamicChart({ chartId }) {
  const ChartComponent = getChartComponent(chartId);
  
  if (!ChartComponent) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Chart not found</p>
      </div>
    );
  }
  
  return <ChartComponent />;
}