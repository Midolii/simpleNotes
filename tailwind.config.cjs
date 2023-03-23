/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue": {
          "theme": {
            "main": "#4fa5d9",
            "light": "#00aeec"
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
