import plugin from 'windicss/plugin';
import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  theme: {
    colors: {
      ...colors,
      green: '#42d392',
      white: '#ffffff',
      blue: '#075985',
    },
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
});
