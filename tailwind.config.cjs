/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          1000: "#092B4A"
        }
      },
      screens: {
        xs: { max: "640px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px" }
      }
    },
    fontFamily: {
      audiowide: ["Audiowide", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}
