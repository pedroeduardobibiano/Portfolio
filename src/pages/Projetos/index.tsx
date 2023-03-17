import { projects } from "../../data/projects";
import { BoxCard } from "./Box";
import { ProjectContent, ProjetosContainer, Title } from "./styles";

export function Projetos() {
  return (
    <ProjetosContainer>
      <Title>Projetos</Title>
    <ProjectContent>
      {projects.map((projects) => {
        return <BoxCard key={projects.id} project={projects}/>;
      })}
      </ProjectContent>
    </ProjetosContainer>
  );
}
