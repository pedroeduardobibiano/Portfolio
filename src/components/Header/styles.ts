import styled from "styled-components";

export const HeaderContainer = styled.header`
        display: flex;
        flex-direction: row;
        background-color: ${(props) => props.theme.colors["Background-N1"]};
        max-width: 100%;
        height: 4rem;

        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;

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
    padding: 1rem 0.8rem;
    cursor: pointer;


    font-size: 1.1rem;
    border-bottom: 1px solid transparent;

 

    a{
        padding: 1rem 3rem;
        justify-content:center ;
        color: ${(props) => props.theme.colors["Fonte-F1"]};

        &.active {
            border-bottom: 1px solid ${(props) => props.theme.colors["Fonte-F1"]};
        }
        

    }
    &:hover{
    border-bottom: 1px solid ${(props) => props.theme.colors["Fonte-F1"]};
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease-in;
    transition-delay: 0s;
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