import {
  HeaderContainer,
  HeaderGrade,
  LinkBox,
  LinkContainer,
} from "./styles";

import { NavLink } from "react-router-dom";


import { Sun, Moon } from "phosphor-react";
import { MenuBar } from "./menuBar";

interface PropsTheme {
  HandleChangeTheme: () => void;
  theme: string;
}

export function Header({ HandleChangeTheme, theme}: PropsTheme) {
  
  return (
    <HeaderContainer>
      <HeaderGrade>
        <LinkBox>
          <LinkContainer>
            <NavLink to={"/"}>Inicio</NavLink>
          </LinkContainer>

          <LinkContainer>
            <NavLink to="/AboutMe">Sobre mim</NavLink>
          </LinkContainer>

          <LinkContainer>
            <NavLink to="/Projeto">Projetos</NavLink>
          </LinkContainer>
        </LinkBox>
        {theme == "light" && (
          <button
            onClick={() => HandleChangeTheme()}
            title="Alternar modo Claro"
          >
            {" "}
            <Moon size={25} weight="fill" />
          </button>
        )}

        {theme == "dark" && (
          <button
            onClick={() => HandleChangeTheme()}
            title="Alternar modo Escuro"
          >
            {" "}
            <Sun size={25} weight="fill" />
          </button>
        )}
      </HeaderGrade>

      <MenuBar
        HandleChangeTheme={HandleChangeTheme}
        theme={theme}
      />
    </HeaderContainer>
  );
}
