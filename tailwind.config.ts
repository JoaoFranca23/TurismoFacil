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
        color1: "#13101c;",
        color2: "#0e425e",
        color3: "#0983af",
        color4: "#07ccff",
        color5: "#0ffff8",
        color6: "#47a2c36b",
        colorbutton: "#515151",
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
