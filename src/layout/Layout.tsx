import { LayoutContainer } from "./styles";
import { Outlet } from 'react-router-dom'
import { Header } from "../components/Header";


interface PropsTheme {
    HandleChangeTheme: () => void
}

export function LayoutDefault({ HandleChangeTheme }: PropsTheme) {

    return (
        <LayoutContainer>
            <Header HandleChangeTheme={HandleChangeTheme} />
            <Outlet />
        </LayoutContainer>
    )
}