module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_3f": "#0000003f" },
        gray: { 800: "#723d3d", 900: "#402813" },
        red: { 200: "#c79d8f" },
        pink: { 600: "#d41e4a" },
        deep_orange: { 100: "#ffccbb" },
      },
      fontFamily: { inter: "Inter" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
