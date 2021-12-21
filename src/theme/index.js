import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    800: '#082262',
    700: '#051843',
    600: '#061A4A',
    550: '#001f68',
    500: '#337afe',
    400: '#5e96fe'
  },
}

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1100px',
  xl: '1400px',
  '2xl': '1536px',
})

const fonts = {
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
}

const config = {
    mode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme( {colors}, {config},{breakpoints}, fonts)

export default theme;