import { ButtonsContainer, ButtonsMain, Description, HomeContainer, LeftSide, NameTitle, RightSide, Title, Titles } from "./styles";

import programador from '../../assets/Icons/programador.png'
import {GithubLogo} from 'phosphor-react'
import {LinkedinLogo} from 'phosphor-react'

export function Home() {
    return (

        <HomeContainer>
            <RightSide>
                <Titles>
                    <Title>OLÁ, EU SOU</Title>
                    <NameTitle>PEDRO EDUARDO</NameTitle>
                    <Description>DESENVOLVEDOR BACK-END</Description>
                </Titles>

                <ButtonsMain>
                    <ButtonsContainer variant="amarelo">
                        
                        <a href="https://www.linkedin.com/in/pedro-eduardo-bibiano/" target="blank_"><LinkedinLogo size={23}/> LinkedIn</a>
                    </ButtonsContainer>

                    <ButtonsContainer variant="azul">
                       
                        <a href="https://github.com/pedroeduardobibiano" target="blank_"><GithubLogo size={23}/> Gihub</a>
                    </ButtonsContainer>
                </ButtonsMain>

            </RightSide>
            <LeftSide>
                <img src={programador} alt="" />
            </LeftSide>
        </HomeContainer>

    )
}