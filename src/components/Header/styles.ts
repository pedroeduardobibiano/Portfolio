import styled from "styled-components";

export const HeaderContainer = styled.header`
        display: flex;
        flex-direction: row;
        background-color: ${(props) => props.theme.colors["Background-N1"]};
        max-width: 100%;
        height: 4rem;
`;

export const LinkBox = styled.div`

        display: flex;
`;



export const HeaderGrade = styled.div`
        width: 100%;
        display: flex;
        justify-content:space-around;
        align-items: center;
        

        button{
            background-color: transparent;
            border: none;
            background-color:${(props) => props.theme.colors["Background-Theme"]};
            width: 2.3rem;
            height: 2.3rem;
            border-radius: 50%;
            display:flex;
                align-items:center;
                justify-content:center;
            svg{
                color: ${(props) => props.theme.colors["Fonte-F2"]};

            }
        }
`;

export const LinkContainer = styled.div`
    padding: 1rem 3rem;
    cursor: pointer;


    border-bottom: 1px solid transparent;

    :hover{
        border-bottom: 1px solid ${(props) => props.theme.colors["Fonte-F1"]};
    }
`


export const IconContainer = styled.div`
    margin-left: 5rem;
    gap: 1rem;
    display:flex;

    img {
        border-radius: 50%;
    }
`;