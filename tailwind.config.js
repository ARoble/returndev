module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          darkgreen: "#3eb966",
          green: "#47da77",
          lightgreen: "#EAFAF0",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
