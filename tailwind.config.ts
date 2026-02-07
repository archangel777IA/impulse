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
        /* Base */
        bg: "#0b0b0f",
        fg: "#f5f5f7",
        muted: "#a1a1aa",
        line: "rgba(255,255,255,0.08)",

        /* NOVA COR PRINCIPAL – Lavanda */
        primary: "#B794F4",      // lavanda principal
        primaryHover: "#A77BEF",
        primarySoft: "rgba(183,148,244,0.15)",

        /* Substituições semânticas (antes vermelho) */
        accent: "#B794F4",
        accentHover: "#A77BEF",

        /* Estados */
        success: "#4ADE80",
        warning: "#FACC15",
        danger: "#F87171", // mantido apenas para erro real, não branding
      },
    },
  },
  plugins: [],
};

export default config;
