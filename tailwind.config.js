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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};