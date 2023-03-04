/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  // prefix: 'bf-',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mm-all': { 'min': '501px', 'max': '992px'},
      'mm-md': { 'min': '769px', 'max': '992px'},
      'mm-sm': { 'min': '501px', 'max': '768px'},
      'mm-xs-sm': { 'min': '0px', 'max': '400px'},
      'max-lg': { 'max': '992px' },
      'max-md': { 'max': '768px' },
      'max-sm': { 'max': '500px' },
      'max-xs-sm': { 'max': '400px' },
      'xs-sm': '400px',
      'sm': '501px',
      'md': '769px',
      'lg': '993px'
    },
    extend: {
      fontFamily: {
        'helvetica': ['"Helvetica"', 'system-ui', 'sans-serif'],
        'suisseIntl': ['"SuisseIntl"', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-bg': "url('../images/hero-img.png')",
        'hero-bg-mob': "url('../images/hero-img-mob.png')",
      },
      colors: {
        'overlay': 'rgba(0, 0, 0, 0.55)',
        'custom-green': '#293B33',
        'custom-green-shade': '#1E1E1E',
        'custom-gray-shade': 'rgb(30, 30, 30, 50%)',
        'custom-gray': "#DCDCDC",
        current: 'currentColor',
        'custom-overlay': 'rgba(255, 255, 255, 0.2)'

      }
    },
  },
  // important: true,
  plugins: [
  ],
  corePlugins: {
    container: false
  }
}