import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { biodiversityData } from '../../data/extendedMockData';

function BiodiversityChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart outerRadius={90} data={biodiversityData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar 
          name="Current Biodiversity" 
          dataKey="value" 
          stroke="#10B981" 
          fill="#10B981" 
          fillOpacity={0.5} 
        />
        <Radar 
          name="Target Level" 
          dataKey="fullMark" 
          stroke="#3B82F6" 
          fill="#3B82F6" 
          fillOpacity={0.15} 
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default BiodiversityChart;