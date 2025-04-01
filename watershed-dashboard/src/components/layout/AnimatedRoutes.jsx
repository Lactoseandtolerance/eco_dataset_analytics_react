import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import page components
import HomePage from '../../pages/HomePage';
import Dashboard from '../../pages/Dashboard';
import Regions from '../../pages/Regions';
import Reports from '../../pages/Reports';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;