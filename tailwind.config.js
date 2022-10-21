/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      primary: "#ffff",
      secondary: "#2e2e",
      amber1: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7494",
        800: "#155e75",
        900: "#164e63",
      },
    },
    extend: {
      colors: {
        blue: {
          950: "#17275c",
        },
      },
      backgroundImage: {
        sanFrancisco: "./img/sanFrancisco.jpg",
        norway: "./img/norway.jpg",
      },
    },
  },
  plugins: [],
};
