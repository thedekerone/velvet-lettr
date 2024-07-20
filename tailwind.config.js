/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': {
          '800': '#851A60',
          '200': '#E18CAA',
          '300': '#D46A9E',
          '400': '#C94C92',
          '500': '#BE2E86',
          '600': '#B1107A',
          '700': '#A4006D',
          '900': '#6E0050',
          'default': '#851A60'
        },
        'secondary': '#AEBD65'
      },
      fontFamily: {
        'sans': ['nunito', 'ui-sans-serif', 'system-ui'],
        'serif': ['Offside', 'ui-serif', 'Georgia'],
      }
    },
  },
  plugins: [],
}

