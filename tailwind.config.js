/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#112444",
          light: "#1A3666",
          dark: "#0A1629",
        },
        secondary: {
          DEFAULT: "#5990B8",
          light: "#7AA6C7",
          dark: "#447A9E",
        },
        accent: {
          DEFAULT: "#E4CB3F",
          light: "#EBD969",
          dark: "#C7B034",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
      },
    },
  },
  plugins: [],
};
