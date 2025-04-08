import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { temperatureData } from '../../data/extendedMockData';

function TemperatureChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={temperatureData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" stroke="#888" />
        <YAxis 
          stroke="#888" 
          domain={[10, 25]}
          label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} 
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          formatter={(value) => [`${value}°C`, 'Temperature']}
        />
        <Line 
          type="monotone" 
          dataKey="temperature" 
          stroke="#F97316" 
          strokeWidth={2}
          dot={{ fill: '#F97316', r: 4 }} 
          activeDot={{ fill: '#F97316', r: 6, strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TemperatureChart;