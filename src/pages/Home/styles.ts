import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.colors["Background-N1"]};
    margin: 0 auto;
    max-width: 1420px;
    margin-top: 5rem;
    box-shadow: rgba(173, 181, 189, 0.1) -5px 5px, rgba(173, 181, 189, 0.1) -10px 10px, rgba(173, 181, 189, 0.1) -15px 15px, rgba(173, 181, 189, 0.1) -20px 20px, rgba(173, 181, 189, 0.01) -25px 25px;
    height: 70vh;

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