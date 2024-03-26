/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F3F2FA",
        dark: "#1A1A1F",
        violet: "#5D37F3",
        error: "#EA1919",
        correct: "#14D81C",
      },
    },
  },
  plugins: [],
};
