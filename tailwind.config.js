module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pal_green' : "#017f7f"
      }
    },
    screens: {
      'screen250px' : {'max' : '250px'},
      'screen600px' : {'max' : '600px'},
      'screen1000px' : {'max' : '1000px'},
    }
  },
  plugins: [],
}