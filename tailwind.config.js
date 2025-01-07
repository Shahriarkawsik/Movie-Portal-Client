/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "rgb(193, 17, 25)",
        color2: "rgb(20, 20, 20)",
      },
      fontFamily: {
        JosefinSans: "Josefin Sans",
        Roboto: "Roboto",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: ["selector", '[data-theme="dark"]'],
};
