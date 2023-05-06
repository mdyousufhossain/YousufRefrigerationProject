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
      xs: '568px',
      md: '992px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
