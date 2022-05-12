const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#42d392',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.gradient': {
          background: 'linear-gradient(to right, #374151, #111827, #000)',
        },
        '.text-gradient': {
          background: 'linear-gradient(315deg,#42d392 25%,#647eff)',
          '-webkit-text-fill-color': 'transparent',
          backgroundClip: 'text',
        },
      });
    }),
  ],
};
