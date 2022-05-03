module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pal_green' : "#017f7f",
        'pal_blue' : '#003152',
      }
    },
    screens: {
      'screen250px' : {'max' : '250px'},
      'screen420px' : {'max' : '420px'},
      'screen600px' : {'max' : '600px'},
      'screen650px' : {'max' : '650px'},
      'screen1000px' : {'max' : '1000px'},
      'screen1020px' : {'max' : '1020px'},
    }
  },
  plugins: [],
}