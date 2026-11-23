/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6b35",
        secondary: "#ff8c42",
        dark: "#1a1a2e",
        light: "#f0f2f5",
      },
    },
  },
  plugins: [],
}