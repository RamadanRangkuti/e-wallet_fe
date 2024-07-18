/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      xxxsm: "300px",
      xxsm: "321px",
      xsm: "376px",
      tbt: "426px",
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1281px",
      "2xl": "1441px",
      "4xl": "1537px",
      uw: "2041px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        nunitosans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#2948FF",
        bgprimary: "#3969FD",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
