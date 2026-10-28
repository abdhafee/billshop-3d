/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030b1a',
          900: '#071633', // Deep navy
          800: '#0b2351',
          700: '#103375',
          600: '#14459f',
        },
        primary: {
          DEFAULT: '#1455D9', // Primary blue
          hover: '#0f44b2',
          light: '#e8f0fe',
        },
        electric: {
          DEFAULT: '#1677FF', // Electric blue
          glow: '#1677ff88',
        },
        cyan: {
          brand: '#39C6FF', // Cyan
          glow: '#39c6ff66',
        },
        surface: {
          light: '#F2F7FF',
          card: '#ffffff',
          cardMuted: '#f8faff',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(22, 119, 255, 0.25)',
        'glow-md': '0 0 25px rgba(22, 119, 255, 0.35)',
        'glow-lg': '0 0 45px rgba(57, 198, 255, 0.3)',
        'glow-cyan': '0 0 30px rgba(57, 198, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(7, 22, 51, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(3, 11, 26, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'scan-line': 'scan 2.5s ease-in-out infinite',
        'laser': 'laser 2s infinite ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { top: '0%', opacity: '0.8' },
          '50%': { top: '100%', opacity: '1' },
          '100%': { top: '0%', opacity: '0.8' },
        },
        laser: {
          '0%': { opacity: '0.2', transform: 'scaleX(0.8)' },
          '50%': { opacity: '1', transform: 'scaleX(1.05)' },
          '100%': { opacity: '0.2', transform: 'scaleX(0.8)' },
        }
      }
    },
  },
  plugins: [],
}
