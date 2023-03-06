import { LayoutContainer } from "./styles";
import { Outlet } from 'react-router-dom'
import { Header } from "../components/Header";
import { Fotter } from "../components/Fotter";


interface PropsTheme {
    HandleChangeTheme: () => void
    theme: string
}

export function LayoutDefault({ HandleChangeTheme, theme }: PropsTheme) {

    return (
        <LayoutContainer>
            <Header HandleChangeTheme={HandleChangeTheme} theme={theme}/>
            <Outlet />
            <Fotter/>
        </LayoutContainer>
    )
}