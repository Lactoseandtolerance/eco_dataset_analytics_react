import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'; // Import axios for API calls

function WaterQualityChart() {
  const [data, setData] = useState([]); // State to store fetched data

  // Fetch data from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/water-quality')
      .then((response) => {
        // Transform the data if necessary (e.g., format dates or keys)
        const transformedData = response.data.map((item) => ({
          month: item.EventDate.split('T')[0], // Extract date (YYYY-MM-DD)
          ph: item.PH,
          oxygen: item.DissolvedOxygen,
          nitrogen: item.Nitrogen || 0, // Use 0 if Nitrogen is null
        }));
        setData(transformedData);
      })
      .catch((error) => {
        console.error('Error fetching water quality data:', error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" stroke="#888" />
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
        <Line 
          type="monotone" 
          dataKey="ph" 
          name="pH Level" 
          stroke="#3B82F6" 
          strokeWidth={2} 
          dot={{ r: 4 }} 
          activeDot={{ r: 6 }} 
        />
        <Line 
          type="monotone" 
          dataKey="oxygen" 
          name="Dissolved Oxygen" 
          stroke="#10B981" 
          strokeWidth={2} 
          dot={{ r: 4 }} 
          activeDot={{ r: 6 }} 
        />
        <Line 
          type="monotone" 
          dataKey="nitrogen" 
          name="Nitrogen Level" 
          stroke="#8B5CF6" 
          strokeWidth={2} 
          dot={{ r: 4 }} 
          activeDot={{ r: 6 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default WaterQualityChart;