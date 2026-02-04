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
        accent: "#38CB89",
        danger: "#ED0006",
        warning: "#FFAB00",
        info: "#00579F",
        purple: "#8A38F5",
        "heading-color": "#3C3C3B",
        "body-color":"#6C7275",
        "border-color":"#B8B8B8",
        "ghost-white": "#F8F8FF",
        white:"#fff",
        "light-orange": "#F2EFE9",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        hind: ["var(--font-hind)"],
      },
    },
    screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
  },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      "quickbd-store": {
        primary: "#EE7411",
        secondary: "#0A0B0D",
        accent: "#38CB89",
        danger: "#ED0006",
        warning: "#FFAB00",
        info: "#00579F",
        purple: "#8A38F5",
        "heading-color": "#3C3C3B",
        "body-color":"#6C7275",
        "border-color":"#B8B8B8",
        "ghost-white": "#F8F8FF",
        white:"#fff",
        "light-orange": "#DFDBD7",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        hind: ["var(--font-hind)"],
      },
    }],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
  },
};
