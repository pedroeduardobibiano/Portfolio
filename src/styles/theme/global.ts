import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body{
        background-color: ${(props) => props.theme.colors["Background-N1"]};
        color: ${(props) => props.theme.colors["Fonte-F1"]} ;
        -webkit-font-smoothing: antialiased;
    }
  
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`; 