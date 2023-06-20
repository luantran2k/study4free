/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors"); 

import * as daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
    },
    colors: {
      // ...colors,
      
    },
    spacing: {
    }
  },
  plugins: [daisyui],
};
