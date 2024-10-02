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

import java from "../../../assets/Icons/java-img.svg";
import spring from "../../../assets/Icons/spring.svg";
import postgres from "../../../assets/Icons/postgres.svg";
import mysql from "../../../assets/Icons/mysql.svg";
import aws from "../../../assets/Icons/aws.svg";
import docker from "../../../assets/Icons/docker.svg";
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
    TecnologiaPostgres: "PostgreSQL",
    textoPostgres:
      "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
  },
  {
    id: 4,
    TecnologiaMySQL: "MySQL",
    textoMySQL:
      "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.",
  },
  {
    id: 5,
    TecnologiaAWS: "AWS | Cloud",
    textoAWS:
      "Amazon Web Services, também conhecido como AWS, é uma plataforma de serviços de computação em nuvem oferecida pela Amazon.",
  },
  {
    id: 6,
    TecnologiaDocker: "Docker",
    textoDocker:
      "Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.",
  },

  {
    id: 6,
    TecnologiaGit: "Git",
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

  function handleClickPosgreSQL() {
    const textFillDB = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaPostgres}</h1>
          <h3>{search.textoPostgres}</h3>
        </SubTitle>
      );
    });
    setTask(textFillDB);
  }

  function handleClickMySQL() {
    const textFillDB = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaMySQL}</h1>
          <h3>{search.textoMySQL}</h3>
        </SubTitle>
      );
    });
    setTask(textFillDB);
  }

  function handleClickAWSCloud() {
    const textFillDB = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaAWS}</h1>
          <h3>{search.textoAWS}</h3>
        </SubTitle>
      );
    });
    setTask(textFillDB);
  }

  function handleClickDocker() {
    const textFillDB = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaDocker}</h1>
          <h3>{search.textoDocker}</h3>
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

            <button onClick={handleClickPosgreSQL} >
              <img src={postgres} alt="" />
            </button>

            <button onClick={handleClickMySQL} >
              <img src={mysql} alt="" />
            </button>

            <button onClick={handleClickAWSCloud} >
              <img src={aws} alt="" />
            </button>

             
            <button onClick={handleClickDocker} >
              <img src={docker} alt="" />
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
