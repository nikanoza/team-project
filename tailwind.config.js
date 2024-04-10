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
        gray: "#85858D",
        yellow: "#D6961C",
        green: "#15C972",
        purple: "#B71FDD",
        indigo: "#5D37F3",
        lily: "#F4F3FF",
        motetro: "#E4E3EB",
      },
      padding: {
        "1/4": "1.25rem",
        20: "1.25rem",
      },
      width: {
        480: "30rem",
      },
      height: {
        17: "17rem",
      },
      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
