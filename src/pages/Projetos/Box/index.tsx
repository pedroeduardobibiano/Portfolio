import { ButtonsContainer, ButtonsMain } from "../../Home/styles";
import {
  ButtonsContainerPr,
  ButtonsMainPr,
  ContentBoxes,
  Imagens,
  ProjetosContainer,
} from "./styles";

import { Link, GithubLogo } from "phosphor-react";

import { Boxes } from "./styles";

interface Projects {
  id: number;
  img: string;
  titulo: string;
  descrição: string;
  Tecnologia: string;
  LinkGit: string;
  LinkProject: string;
}

interface ProjectsProps {
  project: Projects;
}

export function BoxCard({ project }: ProjectsProps) {
  return (
    <ProjetosContainer>
      <ContentBoxes>
        <Boxes>
          <Imagens>
            <img src={`/screenshot/${project.img}`} />
          </Imagens>
          <h3>{project.titulo}</h3>
          <p>{project.descrição}</p>
          <span>Tenologias usadas neste projeto: {project.Tecnologia}</span>

          <ButtonsMainPr>
            <ButtonsContainerPr variant="amarelo">
              <a href={project.LinkProject} target="_blank">
                <Link size={21} />
                Vizualizar
              </a>
            </ButtonsContainerPr>

            <ButtonsContainerPr variant="azul">
              <a href={project.LinkGit} target="_blank">
                <GithubLogo size={21} />
                Link do Git
              </a>
            </ButtonsContainerPr>
          </ButtonsMainPr>
        </Boxes>
      </ContentBoxes>
    </ProjetosContainer>
  );
}
