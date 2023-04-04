import styled, { css } from "styled-components";

export const LinkBar = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 2rem;

  flex-direction: column;

  a {
    justify-content: center;
    color: ${(props) => props.theme.colors["Fonte-F1"]};
    :hover {
      color: ${(props) => props.theme.colors.amarelo};
      transition: 0.6s;
    }

    &.active {
      border-bottom: 1px solid ${(props) => props.theme.colors["Fonte-F1"]};
    }
  }
`;
export const LinkBarContent = styled.div`
  background-color: ${({ theme }) => theme.colors["bg-Menu"]};
  margin-top: 5rem;
  color: ${({ theme }) => theme.colors["Fonte-F1"]};
  font-size: 1.7rem;
`;

export const ThemeBar = styled.div`
  margin-top: 5rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors["Background-N1"]};
  background-color: ${(props) => props.theme.colors["Background-Theme"]};
  :hover {
    border: 2px solid ${({ theme }) => theme.colors.azul};
    transition: 0.6s;
  }

  button{
    background-color:transparent;
    border:none;
    width: 2.7rem;
    height:2.7rem;
  }

  svg {
    color: ${(props) => props.theme.colors["Fonte-F1"]}; 
    }
`;


export const Nav = styled.div`
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  display: none;

  @media (max-width: 1050px) {
    display: block;
  }


`;

export const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 18rem;
  height: 100vh;
  background-color: ${({theme})=> theme.colors["bg-Menu"]};
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
`;

export const NavIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;

  svg {
    cursor: pointer;
  }
`;

export const SidebarWrap = styled.div``;
