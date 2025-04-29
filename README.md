# Watershed Analytics Dashboard

This is a modern, interactive dashboard for visualizing watershed data analytics, built with React. The application provides a clean, intuitive interface for exploring water quality metrics, usage patterns, and a regional watershed map of the contiguous United States.


## Features

- **Interactive Dashboard**: Visualize water quality trends, usage patterns, and water levels with dynamic, customizable charts
- **Modular Architecture**: Easily add, remove, reorder and resize charts on the dashboard 
- **Persistent Layout**: Dashboard configuration is automatically saved and restored via localStorage
- **Regional Map**: Explore an outline map of the contiguous U.S. with smooth hover interactions
- **Animated Navigation**: Fluid, animated page transitions for a polished user experience
- **Responsive Design**: Tailored layouts and components for optimal viewing on various screen sizes

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/watershed-dashboard.git
   cd watershed-dashboard
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

The project follows a standard React structure with additional organizational directories:

```
watershed-dashboard/
├── public/
│   └── gz_2010_us_outline_5m.json
├── src/
│   ├── components/
│   │   ├── charts/           # Chart components and registry
│   │   ├── dashboard/        # Dashboard-specific components
│   │   ├── layout/           # Global layout components
│   │   └── ui/               # Reusable UI components
│   ├── data/                 # Mock data for development
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Top-level page components
│   ├── App.jsx               # Main application component
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── .eslintrc.json            # ESLint configuration
├── index.html                # HTML template
├── package.json              # Project configuration and dependencies
├── postcss.config.cjs        # PostCSS configuration
├── README.md                 # Project documentation
├── tailwind.config.cjs       # Tailwind CSS configuration
└── vite.config.js            # Vite configuration
```

## Configuration

The application uses Vite as the build tool and development server. You can customize the Vite configuration in the `vite.config.js` file.

To modify the Tailwind CSS configuration, update the `tailwind.config.cjs` file.

ESLint rules can be adjusted in the `.eslintrc.json` file.

## Contributing

We welcome contributions to improve the Watershed Analytics Dashboard! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes and push the branch to your fork
4. Open a pull request describing your changes

Please ensure your code follows the existing style and passes the linting checks.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

The Watershed Analytics Dashboard was built using the following open-source libraries and tools:

- [React](https://react.dev/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Recharts](https://recharts.org/) - Composable charting library
- [Lucide](https://lucide.dev/) - Open-source icon library