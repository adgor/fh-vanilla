module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        wh: {
          // $wh-1: #011640;
          // $wh-2: #1f5aa6;
          // $wh-3: #63b0f2;
          // $wh-4: #080808;
          // $wh-5: #1df23d;
          // $bh-silver: #A6ABBD;
          // $bh-gold: #F1A208;

          bluDarkest: "#011640",
          bluLight: "#63b0f2",
          bluDark01: "#00458f",
          bluDark02: "#003b7a",
          green: "#17bf52",
          greenLight: "#1df23d",
          silver: "#A6ABBD",
          gold: "#F1A208",
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
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["hover", "group-hover"],
      rotate: ["group-hover"],
    },
  },
  plugins: [],
};
