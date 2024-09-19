/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      "2xl":"1536px",
      "xl":"1280px",
      "lg":"1024px",
      "md":"768px",
      "sm":"640px",
      "xs":"512px",
      "2xs":"384px",
      "3xs":"256px",
    },
  },
  darkMode: "class",

  plugins: [nextui()]
};
