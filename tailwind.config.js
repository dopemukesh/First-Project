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
        // gray: {
        //   50: '#F9F9FA',
        //   100: '#F6F6F6',
        //   200: '#F4F4F5',
        //   300: '#DCDCDE',
        //   400: '#C2C2C6',
        //   500: '#6A6A74',
        //   600: '#53535D',
        //   700: '#3E3E45',
        //   800: '#212126',
        //   900: '#19191C',
        //   950: '#131316',
        // },
        primary: '#1f1f1f',
        secondary: '#2CFBCD',
        dark: '#131316',
        'teal': {
          50: '#E6FFFC',
          100: '#B3FFFA',
          200: '#80FFF7',
          300: '#4DFFFB',
          400: '#26FFE3',
          500: '#2CFBCD', // Base color
          600: '#1AC1A9',
          700: '#149E8F',
          800: '#107C76',
          900: '#0C5A5D',
          950: '#084B4B' // Darkest shade
        },
      },
    },
  },
  plugins: [],
}