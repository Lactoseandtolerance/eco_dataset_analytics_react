# Watershed Analytics Dashboard

This is a modern, interactive dashboard for visualizing watershed data analytics, built with React. The application provides a clean, intuitive interface for exploring water quality metrics, usage patterns, and a regional watershed map of the contiguous United States.


## Features

- **Interactive Dashboard**: Visualize water quality trends, usage patterns, and water levels with dynamic, customizable charts
- **Modular Architecture**: Easily add, remove, reorder and resize charts on the dashboard 
- **Persistent Layout**: Dashboard configuration is automatically saved and restored via localStorage
- **Regional Map**: Explore an outline map of the contiguous U.S. with smooth hover interactions
- **Animated Navigation**: Fluid, animated page transitions for a polished user experience
- **Responsive Design**: Tailored layouts and components for optimal viewing on various screen sizes

## How to Copy This Repository to Your Personal Account

There are several ways to copy this repository to your own GitHub account. Choose the method that best fits your needs:

### Method 1: Fork the Repository (Recommended)

Forking creates a copy of the repository under your GitHub account while maintaining a connection to the original repository. This is ideal if you want to contribute back or stay updated with changes.

1. Navigate to the repository on GitHub: https://github.com/Lactoseandtolerance/eco_dataset_analytics_react
2. Click the **Fork** button in the top-right corner of the page
3. Select your account as the destination for the fork
4. Once forked, clone your copy:
   ```bash
   git clone https://github.com/YOUR-USERNAME/eco_dataset_analytics_react.git
   cd eco_dataset_analytics_react/watershed-dashboard
   npm install
   npm run dev
   ```

### Method 2: Create an Independent Copy

If you want a completely independent copy without any connection to the original repository:

1. Create a new empty repository on GitHub (do not initialize with README, license, or .gitignore)
2. Clone this repository locally:
   ```bash
   git clone https://github.com/Lactoseandtolerance/eco_dataset_analytics_react.git my-watershed-project
   cd my-watershed-project
   ```
3. Remove the original remote and add your new repository:
   ```bash
   git remote remove origin
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-NEW-REPO.git
   ```
4. Push to your new repository (the default branch is 'main'):
   ```bash
   git push -u origin main
   ```

### Method 3: Use as a Template

If you want to start fresh without the commit history:

1. Download the repository as a ZIP file from GitHub (click "Code" > "Download ZIP")
2. Extract the ZIP file to your desired location
3. Initialize a new git repository:
   ```bash
   cd extracted-folder
   git init
   git add .
   git commit -m "Initial commit"
   ```
4. Create a new repository on GitHub and push (set branch to 'main'):
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-NEW-REPO.git
   git push -u origin main
   ```

After copying the repository using any method, make sure to update the repository URLs in this README file to reflect your personal repository.

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