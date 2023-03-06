import styled from "styled-components";

export const ContentMain = styled.div`
 max-width: 1420px;
 margin: 0 auto; 
`


export const AboutMeContainer = styled.div`
       
        max-width: 1420px;
         height: 100%;

         margin-top: 3.5rem;


         display:grid;

         grid-template-columns: repeat(2, 1fr);

         background-color: ${({ theme }) => theme.colors["header/Fotter"]};

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
        max-width: 24rem;
        text-align: justify;

        font-size:1rem;
        font-weight: normal;
    }

    button{
        margin-top: 1.125rem;
        margin-bottom: 1.125rem;
        background-color:red;
        border:none;
        width: 10rem;
        height: 2.3rem;
        background-color: ${({theme}) => theme.colors["Background-N1"]};
        color: ${({theme}) => theme.colors["Fonte-F2"]};
        border-radius: 6px;

        font-size: 1.2rem;
        border: 2px solid ${({theme}) => theme.colors["Fonte-F1"]};
    }
`

export const ImgContent = styled.div`

`
