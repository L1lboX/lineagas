/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#11185C',
          orange: '#F5660A',
          'orange-dark': '#C84D08',
          yellow: '#F4A20E',
          soft: '#EDEFFA',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F5F7FA',
        },
        content: {
          DEFAULT: '#17213B',
          muted: '#475569',
        },
        border: '#E2E8F0',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      borderRadius: {
        card: '16px',
        btn: '10px',
      },
    },
  },
  plugins: [],
};
