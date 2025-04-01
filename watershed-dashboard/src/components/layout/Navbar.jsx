import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplet, Home, BarChart2, MapPin, FileText, Menu, X } from 'lucide-react';

// NavLink component for desktop navigation
function NavLink({ to, icon, text }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        isActive 
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      } transition-all duration-200`}
    >
      <span className="mr-1.5">{icon}</span>
      {text}
    </Link>
  );
}

// MobileNavLink component for mobile navigation
function MobileNavLink({ to, icon, text, setIsOpen }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-3 rounded-md text-base font-medium ${
        isActive 
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      } transition-all duration-200`}
      onClick={() => setIsOpen(false)}
    >
      <span className="mr-2">{icon}</span>
      {text}
    </Link>
  );
}

// Main Navbar component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Droplet className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-blue-700">Drizzual</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home size={18} />} text="Home" />
            <NavLink to="/dashboard" icon={<BarChart2 size={18} />} text="Dashboard" />
            <NavLink to="/regions" icon={<MapPin size={18} />} text="Regions" />
            <NavLink to="/reports" icon={<FileText size={18} />} text="Reports" />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
          <MobileNavLink to="/" icon={<Home size={18} />} text="Home" setIsOpen={setIsOpen} />
          <MobileNavLink to="/dashboard" icon={<BarChart2 size={18} />} text="Dashboard" setIsOpen={setIsOpen} />
          <MobileNavLink to="/regions" icon={<MapPin size={18} />} text="Regions" setIsOpen={setIsOpen} />
          <MobileNavLink to="/reports" icon={<FileText size={18} />} text="Reports" setIsOpen={setIsOpen} />
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;