/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700',
          dark: '#E6C200',
          light: '#FFF0A0',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        },
        accent: {
          DEFAULT: '#FF4500',
          light: '#FF6A33',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'text-glow': 'text-glow 2s ease-in-out infinite alternate',
        'zoom-in': 'zoom-in 2s ease-out forwards',
      },
      keyframes: {
        'text-glow': {
          '0%': { textShadow: '0 0 5px rgba(255, 215, 0, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(255, 215, 0, 0.9), 0 0 30px rgba(255, 215, 0, 0.7)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(1.1)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};