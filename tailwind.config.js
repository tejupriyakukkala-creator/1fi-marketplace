/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6fbf5',
          100: '#c0f7e4',
          200: '#86eed0',
          300: '#46e0b7',
          400: '#14cb9b',
          500: '#00d09c', // Signature 1Fi Emerald Teal
          600: '#00a379',
          700: '#008263',
          800: '#03664f',
          900: '#065443',
          950: '#013027',
        },
        dark: {
          bg: '#0A0E17', // Deep dark space obsidian
          card: '#121824',
          border: '#1E293B',
          muted: '#94A3B8',
          accent: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 20px -5px rgba(0, 208, 156, 0.3)',
        'glow-teal-lg': '0 0 35px -5px rgba(0, 208, 156, 0.4)',
      }
    },
  },
  plugins: [],
}
