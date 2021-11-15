import type { DefaultTheme } from 'styled-components'

const BaseTheme: DefaultTheme = {
  layout: {
    maxWidth: '1408px',
  },
  breakpoints: ['48em', '64em', '76em', '88em'],
  colors: {
    primary: '#23a166',
    secondary: '#001e26',
    accent: '#06f4b6',

    white: '#ffffff',
    black: '#000000',
    background: '#f4f4f4',

    success: '#e6f2ed',
    info: '#eff3fe',
    warning: '#fffaf0',
    danger: '#ffefed',

    blue: '#58a6ff',

    grays: {
      0: '#f6f6f7',
      10: '#e3e5e7',
      20: '#d0d3d7',
      30: '#bec1c7',
      40: '#abb0b7',
      50: '#989ea8',
      60: '#858d98',
      70: '#737b88',
      80: '#606978',
      90: '#576170',
      100: '#444f60',
    },
  },
  fonts: {
    primary: 'Nexa Bold',
    secondary: 'Montserrat',
    tertiary: 'DM Sans',
    text: 'DM Sans',
  },
  typography: {
    font12: {
      fontSize: '12px',
      lineHeight: 1.3,
    },
    font14: {
      fontSize: '14px',
      lineHeight: 1.3,
    },
    font16: {
      fontSize: '16px',
      lineHeight: 1.3,
    },
    font18: {
      fontSize: '18px',
      lineHeight: 1.3,
    },
    font20: {
      fontSize: '20px',
      lineHeight: 1.3,
    },
    font24: {
      fontSize: '24px',
      lineHeight: 1.3,
    },
    font30: {
      fontSize: '30px',
      lineHeight: 1.3,
    },
    font36: {
      fontSize: '36px',
      lineHeight: 1.3,
    },
    font42: {
      fontSize: '42px',
      lineHeight: 1.3,
    },
    font48: {
      fontSize: '48px',
      lineHeight: 1.3,
    },
    font60: {
      fontSize: '60px',
      lineHeight: 1.3,
    },
    font72: {
      fontSize: '72px',
      lineHeight: 1.3,
    },
  },
}

export default BaseTheme
