/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#030061",
        "secondary-color": "#1DB954",
        "btn-color": "#e23d8f",
      },

      backgroundImage: {
        "hero-pattern": "../../assets/img/homeSec1img1.webp')",
        "header-pattern": "url('/src/assets/img/courseSec1img1.svg')",
        "video-pattern": "url('/src/assets/img/courseSec2img1.svg')",
        "stats-pattern": "url('/src/assets/img/courseSec6img8.svg')",
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

      screens: {
        'phone-custom': {'min': '320px', 'max': '767px'},
      // => @media (min-width: 500px and max-width: 767px) { ... }
        'mobile-hidden': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'tablet-custom': {'min': '768px', 'max': '991px'},
      // => @media (min-width: 768px and max-width: 991px) { ... }
      'pc-custom': {'min': '992px', 'max': '1199px'},
      // => @media (min-width: 992px and max-width: 1199px) { ... }
      'desktop-custom': {'min': '1200px', 'max': '1439px'},
      // => @media (min-width: 1200px and max-width: 1439px) { ... }
      },
    },
  },
  plugins: [],
};

