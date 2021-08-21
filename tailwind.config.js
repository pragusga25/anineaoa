// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "h-98": "28rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
