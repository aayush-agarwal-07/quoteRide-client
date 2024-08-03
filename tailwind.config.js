/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        gooey: 'gooey 6s ease-in-out infinite alternate',
      },
      keyframes: {
        gooey: {
          '0%': {
            filter: 'blur(20px)',
            transform: 'translate(10%, -10%) skew(0deg)',
          },
          '100%': {
            filter: 'blur(30px)',
            transform: 'translate(-10%, 10%) skew(-12deg)',
          },
        },
      },
      spacing: {
        '32vw': '32vw',
      },
      borderRadius: {
        'full': '50%',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
};
