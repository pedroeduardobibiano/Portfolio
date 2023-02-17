import styled from "styled-components";

export const HeaderContainer = styled.header`
        display: flex;
        flex-direction: row;
        background-color: ${(props) => props.theme.colors["Background-N2"]};
        max-width: 100%;
        height: 3rem;
`;

export const ButtonContainer = styled.div`

        display: flex;
`;



export const HeaderGrade = styled.div`
        width: 100%;
        display: flex;
        justify-content:space-around;
        align-items: center;
`;

export const LinkContainer = styled.div`
    padding: 1rem 3rem;
    cursor: pointer;

    :hover{
        border-bottom: 1px solid ${(props)=> props.theme.colors["Background-N3"]};
    }
`