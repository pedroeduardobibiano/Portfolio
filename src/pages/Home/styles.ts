import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.colors["Background-N3"]};
    margin: 0 auto;
    max-width: 1420px;
    margin-top: 5rem;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    height: 70vh;

    border-radius: 70px 250px 70px 250px;

   
`;

export const TextContent = styled.div`
  pre{
    font-family:Anonymous Pro, 'Courier New', Courier, monospace;
    font-size: 1.1rem;
    font-weight: bold;

    color: ${({ theme }) => theme.colors["Fonte-F2"]};
  }

  display:flex;
  align-items:center;

`;
export const ImgContent = styled.div`
    img{
        width:300px;
    }
`;

export const HomeContent = styled.div`
 display:grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 10rem;
   padding-top: 8rem;
    `;