/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-1000': 'fadeIn 0s 1000ms forwards',
        'fade-in-1500': 'fadeIn 0s 1500ms forwards',
        'fade-in-2000': 'fadeIn 0s 2000ms forwards',
        'fade-in-2500': 'fadeIn 0s 2500ms forwards',
        'fade-in-3000': 'fadeIn 0s 3000ms forwards',

      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
