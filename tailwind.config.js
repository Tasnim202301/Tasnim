module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Railway", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#00797B",
        secondary: "#272A2E",
        additional: "#F19B1C",
      },
    },
  },
  plugins: [],
}
