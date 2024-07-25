/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fascinate: ["Fascinate Inline"],
        spline: ["Spline Sans Mono"],
      },
      colors: {
        title: "#14213D",
        body: "#E5E5E5",
        yellow: "#FCA311",
        quotes: "#f7820c",
      },
      // objectPosition: {

      // },
      keyframes: {
        notify: {
          "50%": { transform: "translate(-100)" },
        },
      },
    },
  },
  plugins: [],
};
