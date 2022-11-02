/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        sf: "url('https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        sanFrancisco: "./img/sanFrancisco.jpg",
        norway:
          "url('https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        chicago:
          "url('https://images.pexels.com/photos/1569012/pexels-photo-1569012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#cc2d4a",
        secondary: "#8fa206",
        terciary: "#61aec9",
      }),
      textColor: {
        primary: "#cc2d4a",
        secondary: "#8fa206",
        terciary: "#61aec9",
      },
    },
  },
  plugins: [],
};
