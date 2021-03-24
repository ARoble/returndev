module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#47da77",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
