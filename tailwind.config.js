/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#030061",
        "secondary-color": "#1DB954",
      },

      backgroundImage: {
        "hero-pattern": "../../assets/img/homeSec1img1.webp')",
      },

      fontFamily: {
        GothamBold: "Gotham-Bold",
        GothamMedium: "Gotham-Medium",
        GothamLight: "Gotham-Light",
      },

      maxWidth: {
        "8xl": "1400px",
        "9xl": "1700px",
      },
    },
  },
  plugins: [],
};

