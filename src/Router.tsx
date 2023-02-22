import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { LayoutDefault } from './layout/Layout'
import { AboutMe } from './pages/AboutMe'
import { Projetos } from './pages/Projetos'


interface PropsTheme {
    HandleChangeTheme: ()=> void
    theme: string
  }
  

export function Router({HandleChangeTheme, theme}:PropsTheme){
    return(
        <Routes>
            <Route path='/' element={<LayoutDefault  HandleChangeTheme={HandleChangeTheme} theme={theme}/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/AboutMe' element={<AboutMe/>}/>
                <Route path='/Projeto' element={<Projetos/>}/>
            </Route>
        </Routes>
    )
}