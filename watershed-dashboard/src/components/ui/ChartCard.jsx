import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useRipple from '../../hooks/useRipple';

function ChartCard({ title, subtitle, children }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation completes (e.g., 600ms)
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      className="relative bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer"
    >
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        {children}
      </div>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-blue-200/50 rounded-full animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </motion.div>
  );
}

export default ChartCard;