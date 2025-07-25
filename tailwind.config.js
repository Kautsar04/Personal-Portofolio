const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // pakai class 'dark' untuk switch
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        textColor: 'var(--text-color)',
        primary: 'var(--color-primary)',
      },
    },
  },
  plugins: [heroui()],
};

