/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rbRed: "#DB0A40",
        rbBlue: "#000B29",
        rbSilver: "#F1F1F1",
        rbYellow: "#FFCC00",
      },
    },
  },
  plugins: [],
}