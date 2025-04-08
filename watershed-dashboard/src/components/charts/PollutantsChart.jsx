import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { pollutantsData } from '../../data/extendedMockData';

function PollutantsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={pollutantsData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="pollutant" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        />
        <Legend />
        <Bar 
          dataKey="concentration" 
          name="Current Level" 
          fill="#3B82F6" 
          radius={[4, 4, 0, 0]}
        />
        {pollutantsData.map((entry, index) => (
          <ReferenceLine 
            key={`ref-${index}`}
            y={entry.limit} 
            stroke="#EF4444" 
            strokeDasharray="3 3"
            isFront={true}
            segment={[{ x: index, y: entry.limit }, { x: index + 1, y: entry.limit }]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PollutantsChart;