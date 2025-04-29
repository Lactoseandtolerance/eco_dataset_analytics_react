import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function WaterQualityChart() {
  const [data, setData] = useState([]); // State to store fetched data
  const [year, setYear] = useState('all'); // Default to "all" for all-time data
  const [visibleParams, setVisibleParams] = useState({
    ph: true,
    oxygen: true,
    dosaturation: true,
  }); // State to track which parameters are visible

  // Fetch data from the backend
  useEffect(() => {
    axios.get(`http://localhost:5000/api/water-quality?year=${year}`)
      .then((response) => {
        const transformedData = response.data.map((item) => ({
          month: item.EventDate.split('T')[0], // Extract date (YYYY-MM-DD)
          ph: item.PH,
          oxygen: item.DissolvedOxygen,
          dosaturation: item.DOSaturation || 0, // Use 0 if DOSaturation is null
        }));
        setData(transformedData);
      })
      .catch((error) => {
        console.error('Error fetching water quality data:', error);
      });
  }, [year]); // Re-fetch data when the year changes

  // Handle checkbox toggle
  const handleCheckboxChange = (param) => {
    setVisibleParams((prev) => ({
      ...prev,
      [param]: !prev[param],
    }));
  };

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

      {/* Parameter Selection */}
      <div className="mb-4">
        <label className="mr-4 font-medium">Select Parameters:</label>
        <label className="mr-4">
          <input
            type="checkbox"
            checked={visibleParams.ph}
            onChange={() => handleCheckboxChange('ph')}
            className="mr-2"
          />
          pH Level
        </label>
        <label className="mr-4">
          <input
            type="checkbox"
            checked={visibleParams.oxygen}
            onChange={() => handleCheckboxChange('oxygen')}
            className="mr-2"
          />
          Dissolved Oxygen
        </label>
        <label>
          <input
            type="checkbox"
            checked={visibleParams.dosaturation}
            onChange={() => handleCheckboxChange('dosaturation')}
            className="mr-2"
          />
          DO Saturation
        </label>
      </div>

      {/* Chart */}
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
          {visibleParams.ph && (
            <Line 
              type="monotone" 
              dataKey="ph" 
              name="pH Level" 
              stroke="#3B82F6" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 6 }} 
            />
          )}
          {visibleParams.oxygen && (
            <Line 
              type="monotone" 
              dataKey="oxygen" 
              name="Dissolved Oxygen" 
              stroke="#10B981" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 6 }} 
            />
          )}
          {visibleParams.dosaturation && (
            <Line 
              type="monotone" 
              dataKey="dosaturation" 
              name="DO Saturation" 
              stroke="#8B5CF6" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 6 }} 
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WaterQualityChart;