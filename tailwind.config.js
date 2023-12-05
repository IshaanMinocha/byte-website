/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'subhead' : ['Hedvig Letters Sans', 'sans-serif'],
        'head' : ['Nova Square', 'sans-serif'],
        'thinspaced' : ['Roboto Condensed', 'sans-serif'],
      },
      backgroundImage: {
      },
      colors: {
        'light': '#FFE4F3',
        'dark': '#121212',
        'primary': '#FF7F11',
        'secondary': '#1380B0',
      },
  

    },
  },
  plugins: [],
}

