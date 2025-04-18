/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 0.5s ease-out forwards",
        lineGrow: "lineGrow 0.3s ease-in-out forwards",
        tooltipSlide: "tooltipSlide 0.2s ease-out forwards",
        // Existing animations for Loader (if still used elsewhere)
        spin78236: "spin78236 2s infinite linear",
        wobble1: "wobble1 0.8s infinite ease-in-out",
        wobble2: "wobble2 0.8s infinite ease-in-out",
        "spin-slow": "spin 4s linear infinite",
        fadeIn: "fadeIn 0.4s ease-in forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        lineGrow: {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "24px", opacity: "1" }, // Matches h-6 (24px)
        },
        tooltipSlide: {
          "0%": { opacity: "0", transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        shakeX: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
        linearProgress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        // Existing keyframes for Loader (if still used elsewhere)
        spin78236: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wobble1: {
          "0%, 100%": { transform: "translateY(0%) scale(1)", opacity: "1" },
          "50%": { transform: "translateY(-66%) scale(0.65)", opacity: "0.8" },
        },
        wobble2: {
          "0%, 100%": { transform: "translateY(0%) scale(1)", opacity: "1" },
          "50%": { transform: "translateY(66%) scale(0.65)", opacity: "0.8" },
        },
      },
      colors: {
        primary: "#4f46e5",
        secondary: "#ffcc00",
        accent: "#626977",
        dark: {
          primary: "#7f77f5", // Lighter variant for dark mode
          secondary: "#2d2d2d",
          accent: "#3d3d3d",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundColor: {
        dark: {
          primary: "#4f46e5",
          secondary: "#111827",
          accent: "#3d3d3d",
        },
      },
    },
  },
  plugins: [],
};
