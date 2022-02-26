const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Example content paths...
    "./**/*.html",
    "./assets/js/**/*.{js,jsx,ts}",
  ],
  theme: {
    extend: {
      textDecorationThickness: {
        6: "16px",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        openSans: "'Open Sans', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        icon: {
          dark: "#6F8BA4",
          darkest: "#3B566E",
          centosPurple: "#932279",
          centosYellow: "#EFA724",
          centosTeget: "#262577",
          centosGreen: "#9CCD2A",
          ubuntu: "#DD4814",
          fedoraBlue: "#294172",
          fedoraLight: "#3C6EB4",
          debian: "#A80030",
          windows: "#00ADEF",
        },
        wh: {
          // $wh-1: #011640;
          // $wh-2: #1f5aa6;
          // $wh-3: #63b0f2;
          // $wh-4: #080808;
          // $wh-5: #1df23d;
          // $bh-silver: #A6ABBD;
          // $bh-gold: #F1A208;

          aliceBlue:'#F0FAFF',
          skyBlue:'#84C0FC',
          bluDarkest: "#011640",
          bluLight: "#63b0f2",
          bluDark01: "#00458f",
          bluDark02: "#003b7a",
          green: "#17bf52",
          greenLight: "#1df23d",
          greenDarken: "#12913E",
          silver: "#A6ABBD",
          silverDarken: "#959aaa",
          gold: "#F1A208",
          goldDarken: "#d99207",
          light: "#e9eff6",
        },
        matisse: {
          50: "#B9D2F2",
          100: "#A3C4EE",
          200: "#78A8E6",
          300: "#4D8CDE",
          400: "#2771D1",
          500: "#1F5AA6",
          600: "#17437B",
          700: "#0F2B50",
          800: "#071425",
          900: "#000000",
        },
        zircon: {
          50: "#ffffff",
          100: "#fefeff",
          200: "#fdfdff",
          300: "#fbfcfe",
          400: "#f8fafe",
          500: "#f5f8fd",
          600: "#dddfe4",
          700: "#b8babe",
          800: "#939598",
          900: "#787a7c",
        },
        emerald: {
          50: "#f3fbf7",
          100: "#e7f7ef",
          200: "#c3ecd7",
          300: "#9ee1bf",
          400: "#56ca90",
          500: "#0db360",
          600: "#0ca156",
          700: "#0a8648",
          800: "#086b3a",
          900: "#06582f",
        },
      },

      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -40px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
