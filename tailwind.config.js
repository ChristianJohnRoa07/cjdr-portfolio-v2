/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
    },
    extend: {
      fontFamily: {
        tiltPrism: ["Tilt Prism", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
});
