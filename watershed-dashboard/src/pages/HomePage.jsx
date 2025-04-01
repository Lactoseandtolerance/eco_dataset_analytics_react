import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/layout/Hero';
import Features from '../components/layout/Features';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
    </motion.div>
  );
}

export default HomePage;