import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.colors["Background-Theme"]};
    margin: 0 auto;
    max-width: 1420px;
    height: 100%;
    margin-top: 3.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    height: 70vh;

    border-radius: 70px 250px 70px 250px;

   
`;

export const TextContent = styled.div`
  pre{
    font-family:Anonymous Pro, 'Courier New', Courier, monospace;
    font-size: 1.35rem;
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
   padding-top: 3rem;
    `;

    export const TextTitle = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;

        padding-top: 2rem ;

        font-family: Lato;
        font-size: 4rem;
`;