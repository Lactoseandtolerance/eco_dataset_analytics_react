import React from 'react';
import { MapPin, Droplet, BarChart2 } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

function Features() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Comprehensive Water Analytics</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our platform provides detailed insights into watershed health, water quality trends, and usage patterns
            to help communities and agencies make informed decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<MapPin size={24} className="text-blue-600" />}
            title="Regional Mapping"
            description="Visualize watershed boundaries, water bodies, and monitoring stations with interactive maps and geographical data."
          />
          <FeatureCard 
            icon={<Droplet size={24} className="text-blue-600" />}
            title="Water Quality Analysis"
            description="Track water quality parameters over time, identify trends and monitor compliance with environmental standards."
          />
          <FeatureCard 
            icon={<BarChart2 size={24} className="text-blue-600" />}
            title="Usage Patterns"
            description="Analyze water consumption across different sectors, identifying opportunities for conservation and efficiency."
          />
        </div>
      </div>
    </div>
  );
}

export default Features;