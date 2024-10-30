/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        priceColor: "#ffff82",
        yellowSolar: " #fbff00 ",
        snow: "#FFFBFF",
        murrey: "#870058",
        richBlack: "#071F29",
        bleuCiel: "#05a7fa",
      },
    },
    screens: {
      sm: "640px", // Mobile (small screens)
      md: "768px", // Tablets
      lg: "1024px", // Laptops
      xl: "1280px", // Desktops
      "2xl": "1536px", // Large desktops
    },
  },
  plugins: [],
};
