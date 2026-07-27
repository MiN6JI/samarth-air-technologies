// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
    colors: {
      sky: "#EAF3FB", // background mist, top of page gradient
      mist: "#F3F7FB", // subtle inset panel background
      navy: "#0F2540", // primary text / dark surfaces
      amber: {
        DEFAULT: "#F5A524", // solar accent — the sun
        dark: "#D9860E",
      },
      ember: "#E8622C", // secondary accent / error state
      leaf: "#2F9E6E", // positive / eco stats
    },
    fontFamily: {
      display: ["Space Grotesk", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },
    boxShadow: {
      sun: "0 20px 45px -20px rgba(15, 37, 64, 0.18)",
    },
  },
  plugins: [],
} satisfies Config;
