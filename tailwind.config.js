const defaultTheme = require('tailwindcss/defaultTheme')
 
 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  darkMode: 'class',
  theme: {
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '2000px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}

