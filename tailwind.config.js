/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './page',
    './component/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EFF5F5',
        primary2: '#e1e5eb',
        secondary: '#06283D',
        secondary2: '#052436',
        Title_light: '#2C3333',
        Title_Dark: '#47B5FF',
        Para_Light: '#0D1111',
        Para_Dark: '#DFF6FF',
      },
      fontFamily: {
        title: ['Staatliches'],
        para: ['Nunito Sans'],
      },
    },
    screens: {
      xs: '450px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};