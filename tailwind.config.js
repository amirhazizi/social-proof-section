/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1440px",
    },
    extend: {
      colors: {
        veryDarkMagenta: "hsl(300, 43%, 22%)",
        softPink: "hsl(333, 80%, 67%)",
        darkGrayishMagenta: "hsl(303, 10%, 53%)",
        lightGrayishMagenta: "hsl(300, 24%, 96%)",
      },
    },
  },
  plugins: [],
};
