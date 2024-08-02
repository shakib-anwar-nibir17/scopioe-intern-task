/** @type {import('tailwindcss').Config} */

const customSpacing = require('./src/utils/design/customSpacing');
const customFontSize = require('./src/utils/design/customFontSize');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      ...customFontSize,
    },
    spacing: {
      ...customSpacing,
    },
    extend: {
      default: 'Poppins, sans-serif',
    },
    borderRadius: {
      '4xl': '2.4rem',
      '3xl': '2.0rem',
      '2xl': '1.6rem',
      xl: '1.2rem',
      lg: '0.8rem',
      md: '0.4rem',
      sm: '0.2rem',
    },
  },
  plugins: [require('tailwindcss-animate')],
};

