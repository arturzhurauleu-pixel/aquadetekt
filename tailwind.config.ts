import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Głęboki petrol/granat — kolor główny (zaufanie, woda, profesjonalizm)
        brand: {
          50: "#eef6f8",
          100: "#d3e7ec",
          200: "#a7cfd9",
          300: "#79b3c1",
          400: "#4a92a4",
          500: "#2c7488",
          600: "#1c5a6c",
          700: "#164658",
          800: "#0f313f",
          900: "#0b3d4c",
          950: "#071e26",
        },
        // Ciepły akcent — wyłącznie do CTA / alertów awaryjnych
        alert: {
          400: "#f0805f",
          500: "#e85d3d",
          600: "#c94526",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
