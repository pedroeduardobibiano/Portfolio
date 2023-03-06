import { ButtonsContainer, ButtonsMain, Description, HomeContainer, LeftSide, NameTitle, RightSide, Title, Titles } from "./styles";

import programador from '../../assets/Icons/programador.png'
import linkedin from '../../assets//Icons/linkedin.png'
import git from '../../assets//Icons/github.png'

export function Home() {
    return (

        <HomeContainer>
            <RightSide>
                <Titles>
                    <Title>OLÁ, EU SOU</Title>
                    <NameTitle>PEDRO EDUARDO</NameTitle>
                    <Description>DESENVOLVEDOR FRONT-END</Description>
                </Titles>

                <ButtonsMain>
                    <ButtonsContainer variant="amarelo">
                        <img src={linkedin} alt="" />
                        <a href="https://www.linkedin.com/in/pedro-eduardo-bibiano/" target="blank_">LinkedIn</a>
                    </ButtonsContainer>

                    <ButtonsContainer variant="azul">
                        <img src={git} alt="" />
                        <a href="https://github.com/pedroeduardobibiano" target="blank_">Gihub</a>
                    </ButtonsContainer>
                </ButtonsMain>

            </RightSide>
            <LeftSide>
                <img src={programador} alt="" />
            </LeftSide>
        </HomeContainer>

    )
}