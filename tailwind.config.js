/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#0a0a0a",
      textoAzul: "#000078",
      textoAzulClaro: "#73edff",
      figurasAjedrez: "#1616f3",
    },
    container: {},
    fontFamily: {
      font: ["-apple-system, BlinkMacSystemFont, Arial, sans-serif"],
    },
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      xxl: "1320px",
    },
    fontSize: {
      base: "1rem",
      lg: "1.2rem",
      t2xl: "2rem",
      t14xl: "1.4rem",
    },
  },
  extend: {
    borderWidth: {
      "3bpx": "3px",
    },

    gridTemplateColumns: {
      "grid-cols-8": "repeat(8, minmax(0, 1fr))",
      "grid-rows-8": "repeat(8, minmax(0, 1fr))",
    },
  },

  plugins: [],
};
