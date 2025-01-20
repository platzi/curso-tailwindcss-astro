/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6028D9',
          DEFAULT: '#4C1D95',
          dark: '#2E1065'
        },
        secondary: {
          light: '#34D399', // Verde claro
          DEFAULT: '#059669', // Verde principal
          dark: '#065F46' // Verde oscuro
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Ubuntu', 'sans-serif']
      },
      spacing: {
        72: '18rem'
      },
      fontSize: {
        xxs: '0.65rem'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography'),]
};
