/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Dark slate
        secondary: '#1e293b', // Slightly lighter slate
        accent: '#14b8a6', // Teal
        accentHover: '#0d9488', // Darker teal
        textPrimary: '#f1f5f9', // Light gray
        textSecondary: '#94a3b8', // Medium gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(20, 184, 166, 0.3)',
      },
    },
  },
  plugins: [],
}
