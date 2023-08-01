/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textPrimary:'#333',
        primary:"#0e0013",
        secondary: "#aaa6c3",
        tertiary: "#0a0220",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}



// #E1348B
// #373A41
// #717378
// #505057
// #505357
// rgba(217, 217, 217, 0.29
// rgba(255, 255, 255, 0.45)