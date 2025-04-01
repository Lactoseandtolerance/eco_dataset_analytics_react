/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'water-light': '#EBF4FA',
          'water-medium': '#BDE0FE',
          'water-dark': '#3B82F6',
        },
        boxShadow: {
          'water': '0 4px 14px 0 rgba(59, 130, 246, 0.1)',
        },
        animation: {
          'float': 'float 3s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        },
      },
    },
    plugins: [],
  }