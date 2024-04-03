/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'extra-light': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semi-bold': 600,
        'bold': 700,
        'extra-bold': 800,
        'black': 900,
        'semi': 550
      },
      fontFamily: {
        cormo: ['var(--font-cormo)']
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
    },
    animation: {
      'spin-slow': 'spin 8s linear infinite',
    },
    backgroundImage: {
      circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5f5 5px, #f5f5f5f5 100px);'
    }    
    },
  },
  plugins: [],
}