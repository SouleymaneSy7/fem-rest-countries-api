import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    colors: {
      "color-elements": "var(--color-elements)",
      "color-background": "var(--color-background)",
      "color-input-text": "var(--color-input-text)",
      "color-text": "var(--color-text)",
      "color-errors": "var(--color-errors)",
    },
    fontSize: {
      "fs-logo": "var(--fs-logo)",
      "fs-homepage": "var(--fs-homepage)",
      "fs-detail-page": "var(--fs-detail-page)",
      "fs-card-title": "var(--fs-card-title)",
      "fs-detail-page-title": "var(--fs-detail-page-title)",
      "fs-errors-title": "var(--fs-errors-title)",
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
