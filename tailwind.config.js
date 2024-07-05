/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'finger-paint': ['"Finger Paint"', 'sans-serif'],
      },
      borderRadius: {
        'custom-sm': '10px',
        'custom-md': '20px',
        'custom-lg': '30px',
      },
      colors: {
        primary: {
          100: '#FEFFD2',
          200: '#FFEEA9',
          300: '#FFBF78',
          400: '#FF7D29'
        }
      }
    },
  },
  plugins: [],
}

