# Watershed Analytics Dashboard

A modern, interactive dashboard for visualizing watershed data analytics. This React application provides a clean, intuitive interface for exploring water quality metrics, usage patterns, and regional watershed information.

![Watershed Analytics Dashboard Screenshot](placeholder-screenshot.png)

## 🌊 Features

- **Interactive Dashboard**: Visualize water quality trends, usage patterns, and water levels
- **Regional Mapping**: Explore watersheds by geographical regions (placeholder for future implementation)
- **Modern UI**: Clean, water-inspired aesthetic with smooth animations and responsive design
- **Comprehensive Reports**: View detailed water quality analysis (placeholder for future implementation)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Lactoseandtolerance/eco_dataset_analytics_react.git
cd watershed-dashboard
```

2. Install dependencies
```bash
# Using npm
npm install

# Using yarn
yarn
```

3. Start the development server
```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

4. Open your browser and navigate to http://localhost:5173

## 🧰 Technology Stack

- **React**: UI library for building component-based interfaces
- **React Router**: Navigation and routing between pages
- **Framer Motion**: Animation library for smooth transitions
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Recharts**: Flexible charting library for data visualization
- **Lucide React**: Lightweight icon library

## 📁 Project Structure

```
watershed-dashboard/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── charts/           # Chart components for data visualization
│   │   ├── layout/           # Structural components (Navbar, Hero)
│   │   └── ui/               # Reusable UI components
│   ├── data/                 # Mock data for development
│   ├── pages/                # Page components for each route
│   ├── App.jsx               # Main application component
│   ├── index.css             # Global styles and Tailwind directives
│   └── main.jsx              # Application entry point
├── .gitignore
├── package.json
├── postcss.config.cjs        # PostCSS configuration
├── tailwind.config.cjs       # Tailwind CSS configuration
└── vite.config.js            # Vite configuration
```

## 💡 Development Notes

### Known Issues and Solutions

#### PostCSS Configuration

If you encounter the following error:
```
[plugin:vite:css] [postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin...
```

Fix by installing the separate PostCSS plugin:
```bash
npm install -D @tailwindcss/postcss
```

And update your postcss.config.cjs:
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  }
}
```

Alternatively, downgrade to Tailwind CSS v3:
```bash
npm uninstall tailwindcss
npm install -D tailwindcss@3.3.5
```

#### ES Module Configuration

If you encounter module.exports errors:
```
ReferenceError: module is not defined in ES module scope
```

Rename configuration files to use .cjs extension:
```bash
mv postcss.config.js postcss.config.cjs
mv tailwind.config.js tailwind.config.cjs
```

### Adding Real Data

The dashboard currently uses mock data from `src/data/mockData.js`. To integrate real watershed data:

1. Create API service files in a new `src/services/` directory
2. Update chart components to fetch and display real data
3. Implement loading states and error handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Recharts](https://recharts.org/) - Composable charting library
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Lucide Icons](https://lucide.dev/) - Beautiful and consistent icons