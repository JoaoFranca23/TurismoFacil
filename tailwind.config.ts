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
        background: "#fffffe;",
        headline: "#094067",
        paragraph: "#5f6c7b",
        button: "#007A73",
        buttonText: "#fffffe",
        secondary: "#90b4ce",
        stronke: "#094067",
        error: "#ef4565",
      },
      animation: {
        "loop-scroll": "loop-scroll 5s linear infinite",
      },
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0)" },
      },
    },
  },
  plugins: [],
};
export default config;
