const theme = {
  palette: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#133C55',
    secondary: '#FF4860',
    tertiary: '#FE9920',
    quaternary: '#1FA0B0',
    background: {
      white: '#FFFFFF',
      offWhite: '#F0F4F8',
      grey: '#748A9D',
      dark: '#133C55',
      black: '#000000',
    },
    text: {
      white: '#748A9D',
      offWhite: '#A6BCD0',
      secondary: '#133C55',
      link: '#FE9920',
    },
    shadow: {
      white: '#00000029',
    },
  },
  rounding: {
    none: '0px',
    rounded: '30px',
    wedged: '10px',
    circled: '50px',
  },
  spacing: {
    0: '0rem',
    1: '.25rem',
    2: '.75rem',
    3: '1.25rem',
    4: '2rem',
    5: '3rem',
  },
  typeface: {
    default: 'Poppins',
  },
};

export const roundingMapping = (value) => {
  switch (value) {
    case 'circled':
      return theme.rounding.circled;
    case 'rounded':
      return theme.rounding.rounded;
    case 'wedged':
      return theme.rounding.wedged;
    default:
      return theme.rounding.none;
  }
};

export const spacingMapping = (value) => {
  switch (value) {
    case '1':
      return theme.spacing[1];
    case '2':
      return theme.spacing[2];
    case '3':
      return theme.spacing[3];
    case '4':
      return theme.spacing[4];
    case '5':
      return theme.spacing[5];
    default:
      return theme.spacing[0];
  }
};

export default theme;
