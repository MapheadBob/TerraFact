import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2f6f4f",
          foreground: "#f4faf6",
        },
        surface: "#ffffff",
        ink: "#141a17",
        "ink-soft": "#5b6a63",
        border: "#e1e7e3",
        success: "#1f8a53",
        danger: "#c23b3b",
      },
      borderRadius: {
        card: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
