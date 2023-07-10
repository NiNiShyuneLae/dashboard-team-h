/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1280px',
          xl: '1350px'
        }
      },
      fontFamily: {
        'Inter': 'Inter',
        'Oswald':'Oswald',
      },
      colors: {
        // primary: '#00A3FF',
        primary : '#b19777',
        cardColor : '#323232',
        secondary : '#272727',
        dashboardTextColor: '#E8E8ED',
        textColor: '#B8B5C3',
      }
    },
  },
  plugins: [],
}
