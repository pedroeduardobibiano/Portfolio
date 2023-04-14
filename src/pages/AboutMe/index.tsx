import {
  AboutMeContainer,
  ContentMain,
  ImgContent,
  TitleContent,
} from "./styles";

import Imagem from "../../assets/Icons/Eu.png";
import { Skill } from "./Skill";
import { PaperPlaneTilt } from "phosphor-react";

import Curriculo from "../../assets/docs/Curriculo-2023-atualizado.pdf";

export function AboutMe() {
  return (
    <ContentMain> 
      <AboutMeContainer>
        <TitleContent>
          <h1>Pedro Eduardo</h1>
          <h4>Desenvolvedor front-end</h4>
          <p>
            {" "}
            Desenvolvedor de software, com experiencia de atuação em diversos
            projetos em ReactJs. Progressão de carreira fomentada em 2021.
            Possuo como principal foco desenvolvimento com Javascript,
            TypeScript, ReactJs, Bootstrap. Almejo a busca de conhecimento,
            estou sempre aberto para aprender novas tecnologias, sempre pronto
            para superar qualquer desafio!
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
