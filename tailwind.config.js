/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        space: '#05070D',
        navy: '#111827',
        cosmic: '#38BDF8',
        nebula: '#A78BFA',
        muted: '#94A3B8'
      },
      fontFamily: { display: ['Orbitron', 'system-ui', 'sans-serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: { glow: '0 0 40px -8px rgba(56,189,248,.45)', glowp: '0 0 40px -8px rgba(167,139,250,.45)' }
    }
  },
  plugins: []
}
