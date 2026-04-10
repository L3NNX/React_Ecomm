/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          bg: "#F9F8F4",
          fg: "#2D3A31",
          primary: "#8C9A84",
          secondary: "#DCCFC2",
          border: "#E6E2DA",
          accent: "#C27B66",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Source Sans 3", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      borderRadius: {
        full: "9999px",
      },
      boxShadow: {
        botanical: "0 4px 6px -1px rgba(45, 58, 49, 0.05)",
        "botanical-md": "0 10px 15px -3px rgba(45, 58, 49, 0.05)",
        "botanical-lg": "0 20px 40px -10px rgba(45, 58, 49, 0.05)",
        "botanical-xl": "0 25px 50px -12px rgba(45, 58, 49, 0.15)",
      },
      ringColor: {
        botanical: "#8C9A84",
      },
    },
  },
  plugins: [],
}

