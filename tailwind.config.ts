import type { Config } from "tailwindcss";

const colorsConfig = {
  "primary-blue":'#010847',
  "secondary-blue":'#B0D7F8',
  "tertiary-blue":'#DBEFFE',
}

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
      colors: colorsConfig,
    },
  },
  plugins: [],
};
export default config;
