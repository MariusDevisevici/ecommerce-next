/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "rgb(53,36,38)",
        gri: "rgb(139,139,139)",
        primary: "rgb(240,169,89)",
        darkBrown: "rgb(40,27,29)",
        blackCustom: "rgb(51,51,51)",
      },
      height: {
        hamburgerMenuBar: "2px",
        carousel: "530px",
      },
      width: {
        hamburgerMenuBar: "1.4rem",
        banner: "95%",
      },

      boxShadow: {
        bannerShadow: " 0px 16px 15px -2px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};
