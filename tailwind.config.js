/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "280px",
      tablet: "640px",
      md: "64rem",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      animation: {
        height: "changeHeight 2s ease-in-out",
      },
      keyframes: {
        changeHeight: {
          from: { height: "0" },
          to: { height: "10px" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
