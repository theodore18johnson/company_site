/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005ccc',
          700: '#004599',
          800: '#002e66',
          900: '#001733',
        },
        primary: {
          50: '#fffde6',
          100: '#fffbcc',
          200: '#fff799',
          300: '#fff366',
          400: '#ffef33',
          500: '#ffeb00',
          600: '#ccbc00',
          700: '#998d00',
          800: '#665e00',
          900: '#332f00',
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0d1424',
          900: '#030712',
        }
      },
    },
  },
  plugins: [],
}

