import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { LayoutDefault } from './layout/Layout'


interface PropsTheme {
    HandleChangeTheme: ()=> void
  }
  

export function Router({HandleChangeTheme}:PropsTheme){
    return(
        <Routes>
            <Route path='/' element={<LayoutDefault  HandleChangeTheme={HandleChangeTheme}/>}>
                <Route path='/' element={<Home/>}/>
            </Route>
        </Routes>
    )
}