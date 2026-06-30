/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lelicar: {
          dark: '#0A0A0C',
          graphite: '#141416',
          red: '#E61E25',
          'red-glow': '#FF3B41',
          light: '#F2F2F2',
          muted: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hex-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M30 0l25.98 15v30L30 60 4.02 45V15L30 0z\" fill=\"none\" fill-rule=\"evenodd\"/%3E%3C/svg%3E)",
      }
    },
  },
  plugins: [],
}

