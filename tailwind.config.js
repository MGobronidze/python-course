/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1B1F3B',
        inkdeep: '#14172C',
        paper: '#F5F3EE',
        pybuse: '#3A7CA5',
        mustard: '#E8A33D',
        leaf: '#5FAD56',
        coral: '#E1604D',
        slate: '#8A8FA3',
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        blob: '1.75rem 1.25rem 1.75rem 1.25rem',
      },
    },
  },
  plugins: [],
}
