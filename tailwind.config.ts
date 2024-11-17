const animate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx,vue}', './components/**/*.{ts,tsx,vue}', './layouts/**/*.{ts,tsx,vue}'],

  theme: {
    container: {
      center: true,
      padding: { 
        DEFAULT: '1rem', 
        sm: '0.5rem', 
        lg: '2rem' 
      },
    },

    extend: {
      screens: {
        xs: '500px',
        xss: '420px',
      },

      lineClamp: {
        12: '12',
        16: '16',
      },

      fontSize: {
        xss: [
          '0.7rem',
          {
            lineHeight: '110%',
            letterSpacing: '0.01em',
          },
        ],
        lg: [
          '1.25rem',
          {
            lineHeight: '110%',
            letterSpacing: '0.01em',
          },
        ],
        xl: [
          '1.5rem',
          {
            lineHeight: '110%',
            letterSpacing: '0.01em',
          },
        ],
        '2xl': [
          '1.75rem',
          {
            lineHeight: '110%',
            letterSpacing: '0.01em',
          },
        ],
        '3xl': [
          '2rem',
          {
            lineHeight: '110%',
            letterSpacing: '0.02em',
          },
        ],
      },

      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
  
        brand: {
          accent: {
            superLight: '#f5f3ff',
            light: '#c4b5fd',
            normal: '#a78bfa',
            dark: '#7c3aed',
            black: '#4c1d95',
          },
        },
      },
    },
  },
  plugins: [
    animate
  ],
};
