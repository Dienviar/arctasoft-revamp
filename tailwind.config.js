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
      'screen370px' : {'max' : '370px'},
      'screen400px' : {'max' : '400px'},
      'screen420px' : {'max' : '420px'},
      'screen450px' : {'max' : '450px'},
      'screen500px' : {'max' : '500px'},
      'screen550px' : {'max' : '550px'},
      'screen600px' : {'max' : '600px'},
      'screen650px' : {'max' : '650px'},
      'screen750px' : {'max' : '750px'},
      'screen800px' : {'max' : '800px'},
      'screen820px' : {'max' : '820px'},
      'screen850px' : {'max' : '850px'},
      'screen900px' : {'max' : '900px'},
      'screen1000px' : {'max' : '1000px'},
      'screen1020px' : {'max' : '1020px'},
    }
  },
  plugins: [],
}