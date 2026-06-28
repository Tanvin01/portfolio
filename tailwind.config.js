/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-inter)", "Inter", "sans-serif"] },
      container: { center: true, padding: "1.5rem", screens: { "2xl": "1280px" } },
    },
  },
  plugins: [],
};
