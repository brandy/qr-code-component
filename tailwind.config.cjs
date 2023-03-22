const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'clear-blue': '#2c7dfa', // Blue
        'dodger-blue': '#3685ff', // Blue (Shade)
        'cloud-burst': '#1f314f', // Dark Navy
        'bluish-grey': '#7d889e', // Grey
        'hawkes-blue': '#d5e1ef', // Light Grey
      },
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading': ['22px', '28px'],
        'body': ['15px', '19px']
      },
      letterSpacing: {
        'heading': '1',
        'body': '0.1875px'
      },
      boxShadow: {
        'card': '0px 25px 25px rgba(0, 0, 0, 0.0476518)',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};
