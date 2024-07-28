import { ReactNode, useState } from "react";
import {
  TitleGlob,
  TextsContent,
  HabilitsContent,
  SkillContent,
  SubTitle,
  Title,
  TecContent,
  ContentButton,
  TitleNoPointer,
} from "./styles";

import bd from "../../../assets/Icons/banco-img.png";
import java from "../../../assets/Icons/java-img.svg";
import spring from "../../../assets/Icons/spring.svg";
import git from "../../../assets/Icons/git-img.svg";

import "animate.css";

export const data = [
  {},
  {
    id: 1,
    TecnologiaJava: "Java",
    textoJava:
      "Java é uma linguagem de programação orientada a objetos e uma plataforma de computação que permite a criação de software robusto, seguro e portável.",
  },
  {
    id: 2,
    TecnologiaSpring: "Spring Boot",
    textoSpring:
      "Spring Boot é um framework baseado no Spring, que facilita a criação de aplicações Java standalone e prontas para produção.",
  },
  {
    id: 3,
    TecnologiaBd: "Banco de dados",
    textoBd:
      "Um banco de dados é um sistema organizado para armazenar, gerenciar e recuperar informações de forma eficiente. Ele é usado para manter dados estruturados, facilitando o acesso, a manipulação e a atualização dessas informações.",
  },
  {
    id: 4,
    TecnologiaGit: "GitHub",
    textoGit:
      "GitHub é uma plataforma de hospedagem de código-fonte e controle de versão que permite a colaboração entre desenvolvedores. Ele é baseado no sistema de controle de versão Git e fornece ferramentas para gerenciar projetos de software.",
  },
 
];

export function Skill() {
  const [task, setTask] = useState<ReactNode>();

  function handleClickJava() {
    const textFillJava = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaJava}</h1>
          <h3>{search.textoJava}</h3>
        </SubTitle>
      );
    });
    setTask(textFillJava);
  }

  function handleClickSpring() {
    const textFillSpring = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaSpring}</h1>
          <h3>{search.textoSpring}</h3>
        </SubTitle>
      );
    });
    setTask(textFillSpring);
  }

  function handleClickDB() {
    const textFillDB = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaBd}</h1>
          <h3>{search.textoBd}</h3>
        </SubTitle>
      );
    });
    setTask(textFillDB);
  }

  function handleClickGit() {
    const textFillGit = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaGit}</h1>
          <h3>{search.textoGit}</h3>
        </SubTitle>
      );
    });
    setTask(textFillGit);
  }



  return (
    <HabilitsContent>
      <SkillContent>
        <TitleGlob>Habilidade</TitleGlob>
        <TecContent>
          <ContentButton>
            <button onClick={handleClickJava} >
              <img src={java} alt="" />
            </button>

            <button onClick={handleClickSpring} >
              <img src={spring} alt="" />
            </button>

            <button onClick={handleClickDB} >
              <img src={bd} alt="" />
            </button>

            <button onClick={handleClickGit} >
              <img src={git} alt="" />
            </button>

          </ContentButton>
        </TecContent>
      </SkillContent>
      <TextsContent>
        <Title>
          {task == undefined || task == "" ? (
            <TitleNoPointer>{`clique em alguma Habilidade ao lado para ter uma descrição`}</TitleNoPointer>
          ) : (
            ""
          )}
        </Title>
        <SubTitle>{task}</SubTitle>
      </TextsContent>
    </HabilitsContent>
  );
}
