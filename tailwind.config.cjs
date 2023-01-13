/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        11: "3rem",
        12: "4rem",
        13: "5rem",
        14: "6rem",
        15: "7rem",
      },
      letterSpacing: {
        tightest: "-.075em",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "44rem",
      },
    },
  },
  plugins: [],
};
