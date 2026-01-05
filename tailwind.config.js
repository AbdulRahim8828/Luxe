import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luxe: {
          primary: '#0E0E0E',      // Jet Black
          accent: '#C9A24D',       // Royal Gold
          secondary: '#E6D3A3',    // Champagne Gold
          'text-primary': '#F5F5F5',  // Ivory White
          'text-secondary': '#9A9A9A', // Warm Grey
        },
        // Override default colors to ensure luxury palette compliance
        primary: '#0E0E0E',
        secondary: '#E6D3A3',
        accent: '#C9A24D',
        neutral: '#9A9A9A',
        'base-100': '#F5F5F5',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        // Set default font families to luxury fonts
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        'luxury': '0.1em',
        'headings': '0.02em',
      },
      spacing: {
        'section': '120px',
        'component': '60px',
        'element': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
        'slideInUp': 'slideInUp 300ms ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'luxe-hover': 'luxeHover 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        luxeHover: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-4px) scale(1.02)' },
        },
      },
      boxShadow: {
        'luxe': '0 10px 25px rgba(201, 162, 77, 0.2)',
        'luxe-lg': '0 20px 40px rgba(201, 162, 77, 0.3)',
      },
    },
  },
  plugins: [typography],
};
