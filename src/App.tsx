import React from 'react'
import { ThemeProvider } from 'styled-components'
import { EstiloGlobal, theme } from './styles'
import RoutesPages from './routes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <EstiloGlobal />
        <RoutesPages />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
