/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Professional warm color palette
        primary: {
          50: '#fffbeb',   // Very light cream
          100: '#fef3c7',  // Light cream
          200: '#fde68a',  // Soft yellow
          300: '#fcd34d',  // Warm golden
          400: '#fbbf24',  // Golden amber
          500: '#f59e0b',  // Primary golden
          600: '#d97706',  // Warm amber
          700: '#b45309',  // Deep amber
          800: '#92400e',  // Rich brown
          900: '#78350f',  // Very dark brown
        },
        surface: {
          50: '#fefefe',   // Pure warm white
          100: '#f8f7f5',  // Cream white
          200: '#f1ece6',  // Light warm beige
          300: '#e5ddd4',  // Warm light border
          400: '#d1c7b8',  // Warm medium border
          500: '#8b8075',  // Light warm gray
          600: '#5a5146',  // Medium warm gray
          700: '#2c2621',  // Rich dark brown
          800: '#1a1815',  // Dark warm brown
          900: '#0f0e0d',  // Very dark warm black
        },
        accent: {
          blue: '#3b82f6',    // Professional blue
          success: '#22c55e', // Success green
          warning: '#f59e0b', // Warning amber
          error: '#ef4444',   // Error red
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'spotlight': 'spotlight 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 4px 20px rgba(217, 119, 6, 0.2)' },
          'to': { boxShadow: '0 8px 40px rgba(217, 119, 6, 0.4)' },
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
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'gradient-soft': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'gradient-light': 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
      },
    },
  },
  plugins: [],
};