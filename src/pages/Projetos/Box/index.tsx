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
  tecnologia: string;
  linkGit: string;
  linkProject: string;
}

interface ProjectsProps {
  project: Projects;
}

export function BoxCard({ project }: ProjectsProps) {
  return (
    <ProjetosContainer>
      <ContentBoxes>
        <Boxes>
          <a href={project.linkProject} target="_blank">
          <Imagens >
            <img src={`/screenshot/${project.img}`} />
          </Imagens>
          </a>
          <h3>{project.titulo}</h3>
          <p>{project.descrição}</p>
          <span>Tenologias usadas neste projeto: {project.tecnologia}</span>

          <ButtonsMainPr>
            <ButtonsContainerPr variant="amarelo">
              <a href={project.linkProject} target="_blank">
                <Link size={21} />
                Vizualizar
              </a>
            </ButtonsContainerPr>

            <ButtonsContainerPr variant="azul">
              <a href={project.linkGit} target="_blank">
                <GithubLogo size={21} />
                Repositório
              </a>
            </ButtonsContainerPr>
          </ButtonsMainPr>
        </Boxes>
      </ContentBoxes>
    </ProjetosContainer>
  );
}
