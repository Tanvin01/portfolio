import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-inter)", "Inter", "sans-serif"] },
      container: { center: true, padding: "1.5rem", screens: { "2xl": "1280px" } },
      colors: {
        slate: {
          950: "#0a0f1e",
        },
      },
      animation: {
        "gradient": "gradientShift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
