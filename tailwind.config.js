/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#36BAD8",
          dark: "#36BAD8",
          light: "#e2f5fb",
        },
      },
      boxShadow: {
        card: "0 10px 25px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 16px 40px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

