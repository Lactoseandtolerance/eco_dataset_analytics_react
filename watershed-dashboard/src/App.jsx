import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AnimatedRoutes from './components/layout/AnimatedRoutes';
import { DashboardProvider } from './context/DashboardContext';

function App() {
  return (
    <DashboardProvider>
      <Router>
        <div className="font-sans text-gray-800 bg-gradient-to-br from-blue-50 to-white min-h-screen">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </Router>
    </DashboardProvider>
  );
}

export default App;