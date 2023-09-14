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
        main: "#6D9886",
      },
      height: {
        navbarHeight: "5rem",
      },
      spacing: {
        navbarHeight: "5rem",
      },
      transitionProperty: {
        mobileNavbar: "right, transform",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};
