import {
  AboutMeContainer,
  ContentMain,
  ImgContent,
  TitleContent,
} from "./styles";

import Imagem from "../../assets/Icons/Eu.png";
import { Skill } from "./Skill";
import { PaperPlaneTilt } from "phosphor-react";

import Curriculo from "../../assets/docs/CV.pdf";

export function AboutMe() {
  return (
    <ContentMain> 
      <AboutMeContainer>
        <TitleContent>
          <h1>Pedro Eduardo</h1>
          <h4>Desenvolvedor back-end</h4>
          <p>
            {" "}
            Desenvolvedor back-end, com conhecimento abrangente na área e uma sólida base de projetos
            já implementados e hospedados.
          </p>
          <a href={Curriculo} target="_blank">
            <button>
              <PaperPlaneTilt size={23} /> Curriculo
            </button>
          </a>
        </TitleContent>
        <ImgContent>
          <img src={Imagem} alt="" />
        </ImgContent>
      </AboutMeContainer>

      <Skill />
    </ContentMain>
  );
}
