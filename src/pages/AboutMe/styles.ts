import styled from "styled-components";

export const ContentMain = styled.div`
 max-width: 1420px;
 margin: 0 auto; 
`


export const AboutMeContainer = styled.div`
       
        max-width: 1420px;
         height: 100%;

         margin-top: 5rem;


         display:grid;

         grid-template-columns: repeat(2, 1fr);

         background-color: ${({ theme }) => theme.colors["Background-Theme"]};

         border-radius: 15px;

`

export const TitleContent = styled.div`
    flex-direction:column;
    line-height: 1.7rem;
    
    padding-top:3rem;

    font-size: 1.5rem;

    padding-left: 20rem;
h4{
    margin-top: 2rem;
    font-family: Roboto Mono;
    font-size: 1rem;
}

    p{
        margin-top: 1rem;
        max-width: 20rem;
        text-align: start;

        font-size:1rem;
        font-weight: normal;
    }
`

export const ImgContent = styled.div`

`
