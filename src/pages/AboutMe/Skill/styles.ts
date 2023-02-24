import styled from "styled-components";

export const HabilitsContent = styled.div`
    width: 100%;
    background-color:green;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;

    background-color: ${({theme}) => theme.colors["Background-Theme"]};

    height: 9rem;
    margin-top: 1rem;
`

export const ButtonContent = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 6rem;
    margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
   display:flex;
   gap: 1rem;
   align-items:center;
   justify-content:center;


    button{
        border: none;
        background-color: rgba(247, 247, 249);
        width: 5rem;
        height: 4rem;
        border-radius: 50%;
        display:flex ;
        align-items:center;
        justify-content:center;
        

        &:hover{
            background-color: rgba(247, 247, 249, 0.2);
         transition: 01s;
        }
    }
`;

export const TextContent = styled.div`
    
`;