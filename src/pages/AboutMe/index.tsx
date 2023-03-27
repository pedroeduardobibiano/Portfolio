import { AboutMeContainer, ContentMain, ImgContent, TitleContent } from "./styles";

import Imagem from '../../assets/Icons/Eu.png'
import { Skill } from "./Skill";
import {PaperPlaneTilt} from 'phosphor-react'

import Curriculo from '../../assets/docs/Curriculo-2023.pdf'

export function AboutMe() {
    return (
        <ContentMain>
            <AboutMeContainer>
                <TitleContent>
                    <h1>Pedro Eduardo</h1>
                    <h4>Desenvolvedor front-end</h4>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, consequuntur atque. Molestiae reprehenderit blanditiis itaque porro modi, amet aspernatur, eveniet veritatis esse eius reiciendis dicta sequi impedit culpa debitis atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque doloribus commodi debitis tempore, omnis adipisci nam? Cumque, alias fuga tenetur accusantium perspiciatis distinctio similique numquam, quidem blanditiis tempore repudiandae.
                    </p>
                    <a href={Curriculo} target="_blank"><button><PaperPlaneTilt size={23}/>  Curriculo</button></a>

                </TitleContent>
                <ImgContent><img src={Imagem} alt=""  /></ImgContent>
            </AboutMeContainer>

            <Skill />
        </ContentMain>
    )
}