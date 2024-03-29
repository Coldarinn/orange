// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1439px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '479px' },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      stars: '#EDB013',
      background: '#FAF8F2',
      red: '#FF0000',
      success: '#7ECC00',
      stroke: {
        brand: '#FEEBDA',
        dark: '#F2F2F2',
      },
      brand: {
        100: '#FFF8F0',
        200: '#FFF3E5',
        300: '#FFE7CC',
        350: '#FFDBB3',
        400: '#FFCF99',
        500: '#FFB766',
        600: '#FF9F33',
        700: '#FF8700',
      },
      text: {
        100: '#E6E6E6',
        200: '#CCCCCC',
        300: '#B3B3B3',
        400: '#999999',
        500: '#808080',
        600: '#666666',
        700: '#4D4D4D',
        800: '#333333',
        900: '#1A1A1A',
        1000: '#000000',
      },
    },
  },
};
