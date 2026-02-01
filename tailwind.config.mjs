/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE7411",
        secondary: "#0A0B0D",
        green: "#38CB89",
        red: "#ED0006",
        blue: "#00579F",
        purple: "#8A38F5",
        "dark-black": "#3C3C3B",
        "body-text":"#6C7275",
        "border-color":"#B8B8B8",
        "ghost-white": "#F8F8FF",
        white:"#fff",
        "light-orange": "#DFDBD7",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        hind: ["var(--font-hind)"],
      },
    },
  },
  plugins: [],
};
