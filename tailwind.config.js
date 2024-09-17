/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        'con': {
          100:'#ccc',
          200:'#fffefe',
          400:'#fffbf5',
          600:'#f4ede2',
          900:'#423232'
        }
      },
    },
  },
  plugins: [],
}

