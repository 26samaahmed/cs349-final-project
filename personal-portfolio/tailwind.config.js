module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Ensure this matches the location of your components
  theme: {
    extend: {
      fontFamily: {
        arsenal: ['Arsenal', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
}
