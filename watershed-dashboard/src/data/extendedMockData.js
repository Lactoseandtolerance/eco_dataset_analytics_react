// Extended mock data with additional datasets for new chart components

// Data for pollutant concentrations (bar chart)
export const pollutantsData = [
    { pollutant: 'Lead', concentration: 0.012, limit: 0.015 },
    { pollutant: 'Mercury', concentration: 0.001, limit: 0.002 },
    { pollutant: 'Arsenic', concentration: 0.008, limit: 0.010 },
    { pollutant: 'Nitrates', concentration: 7.2, limit: 10.0 },
    { pollutant: 'Phosphates', concentration: 0.9, limit: 1.0 },
    { pollutant: 'E. coli', concentration: 120, limit: 200 },
  ];
  
  // Data for precipitation (bar chart)
  export const precipitationData = [
    { month: 'Jan', rainfall: 65 },
    { month: 'Feb', rainfall: 59 },
    { month: 'Mar', rainfall: 80 },
    { month: 'Apr', rainfall: 81 },
    { month: 'May', rainfall: 56 },
    { month: 'Jun', rainfall: 45 },
  ];
  
  // Data for water temperature (line chart)
  export const temperatureData = [
    { month: 'Jan', temperature: 12.4 },
    { month: 'Feb', temperature: 13.1 },
    { month: 'Mar', temperature: 14.5 },
    { month: 'Apr', temperature: 16.2 },
    { month: 'May', temperature: 18.7 },
    { month: 'Jun', temperature: 21.3 },
  ];
  
  // Data for watershed biodiversity (radar chart)
  export const biodiversityData = [
    { category: 'Fish Species', value: 82, fullMark: 100 },
    { category: 'Plant Diversity', value: 75, fullMark: 100 },
    { category: 'Invertebrates', value: 86, fullMark: 100 },
    { category: 'Bird Species', value: 65, fullMark: 100 },
    { category: 'Mammal Species', value: 48, fullMark: 100 },
    { category: 'Amphibians', value: 70, fullMark: 100 },
  ];
  
  // Data for public access points (scatter plot)
  export const accessPointsData = [
    { name: 'Main Pier', visitors: 1200, facilities: 8, coordinates: [42, 59] },
    { name: 'North Shore', visitors: 800, facilities: 5, coordinates: [67, 23] },
    { name: 'East Bay', visitors: 1500, facilities: 9, coordinates: [84, 48] },
    { name: 'West Ridge', visitors: 450, facilities: 3, coordinates: [23, 55] },
    { name: 'South Cove', visitors: 950, facilities: 6, coordinates: [38, 78] },
    { name: 'Central Park', visitors: 1100, facilities: 7, coordinates: [52, 42] },
  ];
  
  // Data for sediment analysis (composed chart)
  export const sedimentData = [
    { month: 'Jan', suspended: 120, bedload: 85 },
    { month: 'Feb', suspended: 135, bedload: 78 },
    { month: 'Mar', suspended: 145, bedload: 92 },
    { month: 'Apr', suspended: 138, bedload: 88 },
    { month: 'May', suspended: 128, bedload: 82 },
    { month: 'Jun', suspended: 118, bedload: 75 },
  ];
  
  // Data for watershed area comparison (treemap)
  export const watershedAreasData = [
    {
      name: 'North Region',
      size: 4500,
      children: [
        { name: 'Alpine Creeks', size: 1200 },
        { name: 'Pine Forest', size: 1800 },
        { name: 'North Valley', size: 1500 },
      ],
    },
    {
      name: 'South Region',
      size: 3800,
      children: [
        { name: 'Coastal Basin', size: 1600 },
        { name: 'Southern Plains', size: 2200 },
      ],
    },
    {
      name: 'East Region',
      size: 2900,
      children: [
        { name: 'Eastern Hills', size: 1100 },
        { name: 'Riverside', size: 900 },
        { name: 'Urban Area', size: 900 },
      ],
    },
  ];