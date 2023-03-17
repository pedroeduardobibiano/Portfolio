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




    body::-webkit-scrollbar {
  width: 15px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: rgba(112, 181, 232, 0.15);        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(255, 183, 13, 0.15);    /* color of the scroll thumb */
  border-radius: 8px;       /* roundness of the scroll thumb */
  border: 3px solid rgba(112, 181, 232, 0.15);  /* creates padding around scroll thumb */
}
 

`;
