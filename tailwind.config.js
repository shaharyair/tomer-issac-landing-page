/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        backgroundBlack: "var(--foreground-rgb)",
        navbarBlack: "#101010",
        white: "#FAF4F4",
        main: "#6D9886",
      },
      height: {
        navbarHeight: "5rem",
      },
      spacing: {
        navbarHeight: "5rem",
      },
      dropShadow: {
        stroke: "0 1.2px 1.2px rgba(0,0,0)",
      },
      transitionProperty: {
        mobileNavbar: "right, transform",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease forwards",
        "loading-screen": "fade-out 0.5s ease-in forwards 4.5s",
      },
    },
  },
  plugins: [],
};
