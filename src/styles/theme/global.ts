import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;

   
    }
    body{
        background-color: ${(props) => props.theme.colors["Background-N2"]};
        color: ${(props) => props.theme.colors["Fonte-F1"]} ;
        
        font-family: Roboto, 'Courier New', Courier, monospace;
    
    }
  
    button, textarea, input, button,pre{
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, 'Courier New', Courier, monospace;
    }


    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`; 