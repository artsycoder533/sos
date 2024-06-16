import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#1b0000", //dark brown
        'primary-text': "#0C1618", //rich black
        'accent': "#b57f50", //copper
        'background': '#ecf0f1', //light gray
        // 'background': "#FAF4D3", //consilk
        'secondary': "#6db1bf", //light blue
      }
    },
  },
  plugins: [],
};
export default config;
