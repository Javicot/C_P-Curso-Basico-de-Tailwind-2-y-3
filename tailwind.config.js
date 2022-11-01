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
        sf: "url('https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        sanFrancisco: "./img/sanFrancisco.jpg",
        norway:
          "url('https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        chicago:
          "url('https://images.pexels.com/photos/1569012/pexels-photo-1569012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};
