// const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101d30',
        secondary: '#ff6600'
      },
      backgroundImage: {
        'contact-section': "url('../app/assets/images/contact-bg.png')",
      },
    },
  },
  plugins: [],
}
