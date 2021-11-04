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
        'primary-1': COLORS.PRIMARY_1,
        'primary-2': COLORS.PRIMARY_2,
        'primary-3': COLORS.PRIMARY_3,
        'primary-4': COLORS.PRIMARY_4,
        'primary-5': COLORS.PRIMARY_5,
        'primary-6': COLORS.PRIMARY_6,
        "neutral-1": COLORS.NEUTRAL_1,
        "neutral-2": COLORS.NEUTRAL_2,
        "neutral-3": COLORS.NEUTRAL_3,
        "neutral-4": COLORS.NEUTRAL_4,
        "neutral-5": COLORS.NEUTRAL_5,
        "neutral-6": COLORS.NEUTRAL_6,
        "neutral-bg-1": COLORS.NEUTRAL_BG_1,
        "neutral-bg-2": COLORS.NEUTRAL_BG_2,
        "neutral-bg-3": COLORS.NEUTRAL_BG_3,
        "semantic-pink": COLORS.SEMANTIC_PINK,
        "semantic-yellow": COLORS.SEMANTIC_YELLOW,
        "semantic-green": COLORS.SEMANTIC_GREEN,
        "accent-grey": COLORS.ACCENT_GREY,
        "accent-yellow": COLORS.ACCENT_YELLOW,
        "accent-orange": COLORS.ACCENT_ORANGE,
        "accent-pink": COLORS.ACCENT_PINK,
        "accent-pastel-1": COLORS.ACCENT_PASTEL_1,
        "accent-pastel-2": COLORS.ACCENT_PASTEL_2,
        "accent-pastel-3": COLORS.ACCENT_PASTEL_3,
        "accent-pastel-4": COLORS.ACCENT_PASTEL_4,
        "accent-pastel-5": COLORS.ACCENT_PASTEL_5,
        "accent-pastel-6": COLORS.ACCENT_PASTEL_6,
      }
    },
    backgroundImage: {
      "primary-gradient": `linear-gradient(126.41deg, ${COLORS.GRADIENT_1} 10.85%, ${COLORS.GRADIENT_2} 86.3%)`,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
