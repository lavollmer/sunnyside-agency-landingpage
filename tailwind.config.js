module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
      },
      fontWeight: {
        '600': '600',
        '700': '700',
        '900': '900',
      },
      spacing: {
        '1/10': '10%'
      },
      colors: {
        'underline-color': '#F8F1C8',
        'underline-color2': '#F9E3DC', 
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};