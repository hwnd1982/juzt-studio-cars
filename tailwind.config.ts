import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
