/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom, #62D9FF, #3BF686)',
        'gradient-project': 'linear-gradient(0deg, #323443, #323443), #EFF6FF',
      },
      fontFamily: {
        sora: ['Sora', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: '#00E0F3',
          500: '#00c4fd',
        },
        gray: {
          100: '#D6D6D6',
          200: '#BDBDBD',
          300: '#C9C9C9',
          400: '#757575',
          500: '#7d7d7d',
          600: '#424242',
          700: '#212121',
          800: '#000000',
          900: '#000000',
        },
        ocean: {
          50: '#f6fbff',
          100: '#edf6ff',
          200: '#d2eaff',
          300: '#b7ddff',
          400: '#82c3ff',
          500: '#4CA9FF',
          600: '#4498e6',
          700: '#397fbf',
          800: '#2e6599',
          900: '#25537d',
        },
        sky: {
          50: '#f7fdff',
          100: '#effbff',
          200: '#d8f6ff',
          300: '#c0f0ff',
          400: '#91e4ff',
          500: '#62d9ff',
          600: '#58c3e6',
          700: '#4aa3bf',
          800: '#3b8299',
          900: '#306a7d',
        },
        leaf: {
          50: '#f5fff9',
          100: '#ebfef3',
          200: '#cefde1',
          300: '#b1fbcf',
          400: '#76f9aa',
          500: '#3BF686',
          600: '#35dd79',
          700: '#2cb965',
          800: '#239450',
          900: '#1d7942',
        },
        dark: {
          DEFAULT: '#272727',
          100: '#3A3636',
          200: '#323443',
          300: '#3F4152',
        },
        light: {
          DEFAULT: '#EFF6FF',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
