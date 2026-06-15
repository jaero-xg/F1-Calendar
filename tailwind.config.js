/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        f1: {
          black: "#080808",
          dark: "#111111",
          card: "#161616",
          surface: "#1c1c1c",
          border: "#2a2a2a",
          text: "#ececec",
          muted: "#666666",
          accent: "#e10600",
          accentHover: "#c00000",
          silver: "#9a9a9a",
          gold: "#c9a227",
          bronze: "#cd7f32",
        },
      },
      fontFamily: {
        display: ['"Gibed"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
