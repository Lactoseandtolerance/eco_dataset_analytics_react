import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Regions() {
  const mapRef = useRef(null);
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch('../../data/georgia.geojson');
        const data = await response.json();
        setGeoData(data);
      } catch (error) {
        console.error('Error loading GeoJSON data:', error);
      }
    };

    fetchGeoData();
  }, []);

  useEffect(() => {
    if (mapRef.current && geoData) {
      const map = mapRef.current;
      const bounds = L.geoJSON(geoData).getBounds();
      map.fitBounds(bounds);
    }
  }, [geoData]);

  const mapStyle = {
    fillColor: '#4a90e2',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        const layer = e.target;
        layer.setStyle({
          fillColor: '#1a5276',
          fillOpacity: 0.9,
        });
      },
      mouseout: (e) => {
        const layer = e.target;
        layer.setStyle(mapStyle);
      },
      click: (e) => {
        const layer = e.target;
        console.log('Clicked on region:', layer.feature.properties.name);
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 min-h-screen"
    >
      <div className="container mx-auto px-4 py-8">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Regional Watershed Map</h1>
          <p className="text-gray-600 mt-2">Explore watersheds by geographical regions</p>
        </header>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-4">
          <MapContainer
            ref={mapRef}
            center={[32.75, -83.5]}
            zoom={7}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {geoData && (
              <GeoJSON
                data={geoData}
                style={mapStyle}
                onEachFeature={onEachFeature}
              />
            )}
          </MapContainer>
        </div>
      </div>
    </motion.div>
  );
}

export default Regions;