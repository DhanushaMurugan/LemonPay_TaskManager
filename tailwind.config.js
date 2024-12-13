/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(151.08deg, #FFFFFF 20.71%, #183BA3 66.01%)',
      },
      backgroundBlendMode: {
        'lighten': 'lighten',
      },
      textDecorationSkip: {
        'ink': 'none',
      },
    },
  },
  plugins: [],
}