/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#bdd13e",

          "secondary": "#fca9ce",

          "accent": "#2fd83d",

          "neutral": "#182025",

          "base-100": "#FAF8FC",

          "info": "#90A5F4",

          "success": "#68EDA0",

          "warning": "#E5990B",

          "error": "#E55A48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
