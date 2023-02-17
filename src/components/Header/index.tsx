import { ButtonContainer, HeaderContainer, HeaderGrade, LinkContainer } from "./styles";


interface PropsTheme {
    HandleChangeTheme: () => void
}


export function Header({ HandleChangeTheme }: PropsTheme) {
    return (
        <HeaderContainer>
            <HeaderGrade>
            Técnologias
            <ButtonContainer>
                <LinkContainer>Inicio</LinkContainer>
                <LinkContainer>Sobre mim</LinkContainer>
                <LinkContainer>Projetos</LinkContainer>
                <LinkContainer>Contato</LinkContainer>
            </ButtonContainer>
            <button onClick={() => HandleChangeTheme()}>Mudar</button>
            </HeaderGrade>
        </HeaderContainer>

    )
}