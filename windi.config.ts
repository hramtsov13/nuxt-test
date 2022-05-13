import plugin from 'windicss/plugin';
import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  theme: {
    screens: {
      xs: '440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      ...colors,
      green: '#42d392',
      white: '#ffffff',
      blue: '#075985',
      yellow: '#ffd859',
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
