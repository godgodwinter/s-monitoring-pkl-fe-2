/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dmSans': ['"DM Sans"', 'cursive'],
      },},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
