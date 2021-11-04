const COLORS = require("./constants/colors")
module.exports = {
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["SFProDisplay", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '7.5rem',
          xl: '18.2rem',
          '2xl': '20.5rem',
          '3xl': '20.5rem',
        },
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1600px'
      },
      backgroundImage: {
        'home-small': "url('./assets/images/bg-home-small.jpg')",
        'home-large': "url('./assets/images/bg-home-large.jpg')",
        'male-small': "url('./assets/images/male-small.jpg')",
        'male-large': "url('./assets/images/male-large.jpg')",
        'female-small': "url('./assets/images/female-small.jpg')",
        'female-large': "url('./assets/images/female-large.jpg')",
        'pregnant-small': "url('./assets/images/pregnant-small.jpg')",
        'pregnant-large': "url('./assets/images/pregnant-large.jpg')",
        'children-small': "url('./assets/images/children-small.jpg')",
        'children-large': "url('./assets/images/children-large.jpg')",
      },
      colors: {
        'primary': COLORS.PRIMARY,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
