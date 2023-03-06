import styled, { ThemeConsumer } from "styled-components";

export const FotterContainer = styled.footer`
 background-color:red;
 position:fixed;

 bottom: 0;

 width: 100%;
 display: flex;
 justify-content:center;
 height: 3.5rem;
 align-items:center;



 color: ${({theme}) => theme.colors["Fonte-F2"]};

 background-color: ${({theme}) => theme.colors["header/Fotter"]};

a{
    color: inherit;
}

 pre{
    font-weight: bold;
   
 }
`