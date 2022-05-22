module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}'
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
      'xs': '468px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto','sans-serif'],
      }
    },
  },
  plugins: [],
}
