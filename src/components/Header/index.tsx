import { HeaderContainer, HeaderGrade, IconContainer, LinkBox, LinkContainer } from "./styles";


import { NavLink } from 'react-router-dom'

import git from '../../assets/Icons/github.gif'
import javascript from '../../assets/Icons/javascript.gif'
import react from '../../assets/Icons/react.svg'
import typescript from '../../assets/Icons/typescript.svg'

import { Sun, Moon } from 'phosphor-react'

interface PropsTheme {
    HandleChangeTheme: () => void
    theme: string
}


export function Header({ HandleChangeTheme, theme }: PropsTheme) {
    return (
        <HeaderContainer>
            <HeaderGrade>
                <IconContainer>
                    <img src={git} alt="" />
                    <img src={javascript} alt="" />
                    <img src={react} alt="" />
                    <img src={typescript} alt="" />
                </IconContainer>
                <LinkBox>


                    <LinkContainer>
                        <NavLink to={"/"}>
                            Inicio
                        </NavLink>
                    </LinkContainer>

                    <LinkContainer>
                        <NavLink to="/AboutMe">
                            Sobre mim
                        </NavLink>
                    </LinkContainer>

                    <LinkContainer>
                        <NavLink to="/Projeto">
                            Projetos
                        </NavLink>
                    </LinkContainer>





                </LinkBox>
                {theme == 'light' && <button onClick={() => HandleChangeTheme()} title="Alternar modo Escuro"> <Moon size={25} weight="fill" /></button>}

                {theme == 'dark' && <button onClick={() => HandleChangeTheme()} title="Alternar modo Claro"> <Sun size={25} weight="fill" /></button>}


            </HeaderGrade>
        </HeaderContainer>

    )
}