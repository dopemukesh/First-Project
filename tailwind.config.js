/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9F9FA',
          100: '#F6F6F6',
          200: '#F4F4F5',
          300: '#DCDCDE',
          400: '#C2C2C6',
          500: '#6A6A74',
          600: '#53535D',
          700: '#3E3E45',
          800: '#292930',
          900: '#19191C',
          950: '#131316',
        },
        primary: '#1f1f1f',
        secondary: '#2f2f2f',
        dark: '#131316',
      },
    },
  },
  plugins: [],
}