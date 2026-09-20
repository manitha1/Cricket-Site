/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3D2E',
          50: '#E8F5EE',
          100: '#C5E6D4',
          200: '#9DD3B6',
          300: '#74C098',
          400: '#4CAC7A',
          500: '#0B3D2E',
          600: '#093427',
          700: '#072B20',
          800: '#051E16',
          900: '#03110D',
        },
        secondary: {
          DEFAULT: '#16A34A',
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        accent: {
          DEFAULT: '#F5B301',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#F5B301',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        dark: {
          DEFAULT: '#0F172A',
          card: '#1E293B',
          border: '#334155',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B3D2E 0%, #16A34A 50%, #0B3D2E 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
        'green-gradient': 'linear-gradient(135deg, #0B3D2E, #16A34A)',
        'gold-gradient': 'linear-gradient(135deg, #F5B301, #D97706)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'counter': 'counterUp 2s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.14)',
        'green': '0 4px 20px rgba(22, 163, 74, 0.3)',
        'gold': '0 4px 20px rgba(245, 179, 1, 0.3)',
      },
    },
  },
  plugins: [],
}
