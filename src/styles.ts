import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const breakpoints = {
  desktop: 'min-width: 992px',
  tablet: '(min-width: 768px) and (max-width: 991px)',
  celular: 'max-width: 767px'
}

export const colors = {
  dark: '#000001',
  white: '#eee',
  yellow: '#fabc3f',
  orange: '#e85c0d',
  red: '#c7253e',
  redDark: '#821131'
}

export const theme: DefaultTheme = {
  colors: {
    inProgress: '#ffdb00',
    active: '#eb5b00',
    completed: '#e4003a',
    redDark: '#c7253e'
  }
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    font-family: 'Inter', sans-serif;
    list-style: none;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  body {
    padding-bottom: 80px;
    background-color: ${colors.yellow};
  }
`
