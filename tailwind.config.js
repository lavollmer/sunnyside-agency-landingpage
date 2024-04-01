module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      fontWeight: {
        600: "600",
        700: "700",
        900: "900",
      },
      spacing: {
        "1/10": "10%",
      },
      colors: {
        "underline-color": "#F8F1C8",
        "underline-color2": "#F9E3DC",
        "soft red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkcyan: "hsl(167, 40%, 24%)",
        darkblue: "hsl(198, 62%, 26%)",
        darkfooter: "hsl(168, 34%, 41%)",
        verydarkblue: "hsl(212, 27%, 19%)",
        grayblue: "hsl(213, 9%, 39%)",
        darkgrayblue: "hsl(232, 10%, 55%)",
        grayishblue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
