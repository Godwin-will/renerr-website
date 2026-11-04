/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#123B2A',      // Deep forest green
          primary: '#218653',   // Primary green
          accent: '#B8E986',    // Bright energy green
          cream: '#F7F8F3',     // Warm off-white
          charcoal: '#202820',  // Charcoal text
          muted: '#68736A',     // Muted grey
          light: '#EBF4EE',     // Soft tinted green-grey background
          surface: '#F0F5F1',   // Clean card surface
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
