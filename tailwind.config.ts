import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    colors: {
      "color-elements": "var(--color-elements)",
      "color-background": "var(--color-background)",
      "color-input-text": "var(--color-input-text)",
      "color-text": "var(--color-text)",
    },
    fontWeight: {
      "fw-bold": "var(--fw-bold)",
      "fw-semi-bold": "var(--fw-semi-bold)",
      "fw-regular": "var(--fw-regular)",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
