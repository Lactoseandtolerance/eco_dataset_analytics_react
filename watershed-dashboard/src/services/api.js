import axios from 'axios';
import { API_BASE_URL } from '../config';

export const getWaterQualityData = async () => {
  const response = await axios.get(`${API_BASE_URL}/data/water-quality`);
  return response.data;
};

export const getWaterUsageData = async () => {
  const response = await axios.get(`${API_BASE_URL}/data/water-usage`);
  return response.data;
};

export const getWaterlevelData = async () => {
  const response = await axios.get(`${API_BASE_URL}/data/water-level`);
  return response.data;
};

// Add more service functions for other charts and POST, PUT, DELETE requests as needed