import { useState } from "react"
import { ThemeProvider } from "styled-components"

import { BrowserRouter } from 'react-router-dom'

import { defaultTheme, defaultThemeDark } from './styles/theme/default'
import { Router } from "./Router"
import { GlobalStyle } from "./styles/theme/global"


interface PropsTheme {
  HandleChangeTheme: () => void
  theme: string
}


export function App() {

  const [theme, setTheme] = useState('light')

  function HandleChangeTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }


  return (
    <ThemeProvider theme={theme === 'light' ? defaultTheme : defaultThemeDark}>
      <BrowserRouter>
        <GlobalStyle />
        <Router HandleChangeTheme={HandleChangeTheme} theme={theme}/>
      </BrowserRouter>
    </ThemeProvider>
  )
}