/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Pokemon Theme Palette
        primary: {
          50: '#fffee5',
          100: '#fffab8',
          200: '#fff58a',
          300: '#ffed5c',
          400: '#ffe02e',
          500: '#FFCB05',  // Pikachu Yellow
          600: '#e6b200',
          700: '#cc9600',
          800: '#a67600',
          900: '#8c6000',
        },
        surface: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c2d2ff',
          300: '#94b0ff',
          400: '#5c85ff',
          500: '#3C5AA6',  // Pokemon Blue
          600: '#2a4075',
          700: '#1e2e54',
          800: '#141e36',
          900: '#0a0f1b',  // Dark Deep Blue
        },
        accent: {
          yellow: '#FFCB05',   // Pikachu
          blue: '#3C5AA6',     // Brand Blue
          red: '#FF0000',      // Pokeball Red
          dark: '#1a1a1a',     // Gameboy Dark
        }
      },
      fontFamily: {
        'display': ['"Press Start 2P"', 'cursive'], // Retro Gaming Font
        'body': ['Outfit', 'sans-serif'],
        'retro': ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'spotlight': 'spotlight 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 4px 20px rgba(255, 203, 5, 0.2)' },
          'to': { boxShadow: '0 8px 40px rgba(255, 203, 5, 0.4)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        spotlight: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #FFCB05 0%, #FF0000 100%)',   // Electric -> Fire
        'gradient-nebula': 'linear-gradient(135deg, #3C5AA6 0%, #FFCB05 100%)',   // Water -> Electric
        'gradient-deep': 'linear-gradient(135deg, #0a0f1b 0%, #1a1a1a 100%)',     // Deep Space
      },
    },
  },
  plugins: [],
};