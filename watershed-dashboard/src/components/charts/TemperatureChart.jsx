import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function TemperatureChart() {
  const [data, setData] = useState([]); // State to store fetched data
  const [year, setYear] = useState('all'); // Default to "all" for all-time data

  // Fetch data from the backend
  useEffect(() => {
    axios.get(`http://localhost:5000/api/water-quality?year=${year}`)
      .then((response) => {
        // Transform the data if necessary
        const transformedData = response.data.map((item) => ({
          month: item.EventDate.split('T')[0], // Extract date (YYYY-MM-DD)
          temperature: item.WaterTemp,
        }));
        setData(transformedData);
      })
      .catch((error) => {
        console.error('Error fetching temperature data:', error);
      });
  }, [year]); // Re-fetch data when the year changes

  return (
    <div>
      {/* Year Filter */}
      <div className="mb-4">
        <label htmlFor="year" className="mr-2 font-medium">Filter by Year:</label>
        <select
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="all">All Time</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#888" />
          <YAxis 
            stroke="#888" 
            domain={[10, 30]} 
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
    </div>
  );
}

export default TemperatureChart;