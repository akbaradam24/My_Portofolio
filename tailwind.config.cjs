/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'CairoPlay':['Cairo Play', 'cursive'],
        'ReemKufiInk':['Reem Kufi Ink', 'sans-serif'],
      }
    },
    screens: {
      'xs': '320px',
      //smallest screen
      's': '440px',
      //mediumest screen
      'sm': '640px',
      //smallmedium screen
      'md': '768px',
      //mediummedium screen
      'lg': '1280px',
      //large screen
    },
  },
  plugins: [],
}