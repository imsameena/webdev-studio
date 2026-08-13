/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05070c",
          900: "#0a0e17",
          800: "#0f1523",
          700: "#161e30",
          600: "#212c42",
        },
        ink: {
          100: "#f2f4f8",
          300: "#c4cbdb",
          500: "#8891a7",
          700: "#5a6278",
        },
        accent: {
          violet: "#7c5cff",
          cyan: "#22d3ee",
          emerald: "#34e0a1",
        },
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(124,92,255,0.18) 0%, rgba(5,7,12,0) 70%)",
        "accent-gradient": "linear-gradient(120deg, #7c5cff 0%, #22d3ee 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(124,92,255,0.45)",
        "glow-cyan": "0 0 40px -8px rgba(34,211,238,0.4)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
