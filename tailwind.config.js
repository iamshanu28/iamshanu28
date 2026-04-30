/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Intel One Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#000000',
          muted: 'rgba(0, 0, 0, 0.73)',
        },
        card: '#0d0d0d',
      },
      maxWidth: {
        page: '1440px',
      },
    },
  },
  plugins: [],
};
