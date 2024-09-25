/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_purple: "#57467B",
        primary_green: "#1C8963",
        background_purple: "#F7F1FC",
        background_green: "#F5FFF9",
        accent_purple: "#C3A9F4",
        accent_green: "#F5FFF9",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
