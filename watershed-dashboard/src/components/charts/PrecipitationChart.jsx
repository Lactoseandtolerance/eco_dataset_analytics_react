import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { precipitationData } from '../../data/extendedMockData';

function PrecipitationChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={precipitationData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" stroke="#888" />
        <YAxis stroke="#888" label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          formatter={(value) => [`${value} mm`, 'Rainfall']}
        />
        <Bar 
          dataKey="rainfall" 
          fill="#38BDF8" 
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PrecipitationChart;