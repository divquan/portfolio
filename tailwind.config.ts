import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        qblack: "#18191f",
        background: "#c5e4d2",
        qyellow: "#F7B501",
        qpink: "#FFAEB0",
        qred: "#E25A25",
        qgreen: "#4A8A36",
      },
    },
  },
  plugins: [],
};
export default config;
