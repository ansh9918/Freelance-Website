
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'syne': ['Syne' , 'serif']
      },
      gridTemplateColumns:{
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      textShadow: {
        custom: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff',
      },
    },
  },
  plugins: [],
}