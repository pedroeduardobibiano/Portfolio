import { X, List, Moon, Sun } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LinkBar,
  LinkBarContent,
  Nav,
  NavIcon,
  SidebarNav,
  ThemeBar,
} from "./styles";

interface PropsTheme {
  HandleChangeTheme: () => void;
  theme: string;
}

export function MenuBar({ HandleChangeTheme, theme }: PropsTheme) {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  function hideSidebara() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <Nav>
        <NavIcon onClick={showSidebar}>
          <List />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <NavIcon onClick={showSidebar}>
          <X />
        </NavIcon>
        <LinkBar>
          <LinkBarContent onClick={hideSidebara}>
            <NavLink to={"/"}>Inicio</NavLink>
          </LinkBarContent>

          <LinkBarContent onClick={hideSidebara}>
            <NavLink to="/AboutMe">Sobre mim</NavLink>
          </LinkBarContent>

          <LinkBarContent onClick={hideSidebara}>
            <NavLink to="/Projeto">Projetos</NavLink>
          </LinkBarContent>
          <ThemeBar>
            {theme == "light" && (
              <button
                onClick={() => HandleChangeTheme()}
                title="Alternar modo Claro"
              >
                {" "}
                <Moon size={26} weight="fill" />
              </button>
            )}

            {theme == "dark" && (
              <button
                onClick={() => HandleChangeTheme()}
                title="Alternar modo Escuro"
              >
                {" "}
                <Sun size={26} weight="fill" />
              </button>
            )}
          </ThemeBar>
        </LinkBar>
      </SidebarNav>
    </>
  );
}
