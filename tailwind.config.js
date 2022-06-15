module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        default: '#E66C00',
        dark: '#E67E22',
      },
      white: {
        DEFAULT: '#fff',
      },
      black: {
        DEFAULT: '#000',
        50: '#242424',
        100: '#373737',
      },
      grey: {
        100: '#5B5B5B',
      },
      red: {
        100: '#E74C3C',
      },
    },
    screens: {
      // eslint-disable-next-line prettier/prettier
      'xs': '468px',
      // eslint-disable-next-line prettier/prettier
      'sm': '640px',
      // eslint-disable-next-line prettier/prettier
      'md': '768px',
      // eslint-disable-next-line prettier/prettier
      'lg': '1024px',
      // eslint-disable-next-line prettier/prettier
      'xl': '1280px',
      // eslint-disable-next-line prettier/prettier
      'xxl': '1536px',
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
