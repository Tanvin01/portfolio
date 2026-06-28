import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-inter)", "Inter", "sans-serif"] },
      container: { center: true, padding: "1.5rem", screens: { "2xl": "1280px" } },
      colors: {
        // Deep crimson background palette
        bg: {
          950: "#0a0505",
          900: "#120808",
          800: "#1a0a0a",
          700: "#220c0c",
        },
        // Neon red accent
        neon: {
          50:  "#fff5f5",
          100: "#ffe0e0",
          200: "#ffb3b3",
          300: "#ff8080",
          400: "#ff4d4d",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-neon": "linear-gradient(135deg, #dc2626, #ef4444, #ff6b6b)",
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(239,68,68,0.03))",
      },
      boxShadow: {
        "neon-sm":  "0 0 10px rgba(239,68,68,0.3), 0 0 30px rgba(239,68,68,0.1)",
        "neon-md":  "0 0 20px rgba(239,68,68,0.4), 0 0 60px rgba(239,68,68,0.15)",
        "neon-lg":  "0 0 40px rgba(239,68,68,0.5), 0 0 100px rgba(239,68,68,0.2)",
        "glass":    "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "float":  "float 7s ease-in-out infinite",
        "pulse-neon": "neonPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
