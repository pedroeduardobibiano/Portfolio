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

import javascript from "../../../assets/Icons/javascript.svg";
import html from "../../../assets/Icons/html.svg";
import css from "../../../assets/Icons/css.svg";
import typescript from "../../../assets/Icons/typescript.svg";
import react from "../../../assets/Icons/react.svg";
import Git from "../../../assets/Icons/Gitxp.svg";

import "animate.css";

export const data = [
  {
    id: 1,
    TecnologiaHTML: "HTML",
    textoHTML:
      "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.",
  },
  {
    id: 2,
    TecnologiaCSS: "CSS",
    textoCSS:
      "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>",
  },
  {
    id: 3,
    TecnologiaJavaScript: "JavaScript",
    textoJavaScript:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web ",
  },
  {
    id: 4,
    TecnologiaReactJS: "ReactJS",
    textoReactJS:
      "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web ",
  },
  {
    id: 5,
    TecnologiaTypeScript: "TypeScript",
    textoTypeScript:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. ",
  },
  {
    id: 6,
    TecnologiaGit: "GitHub",
    textoGit:
      "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",
  },
];

export function Skill() {
  const [task, setTask] = useState<ReactNode>();

  function handleClickHtml() {
    const textFillHtml = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaHTML}</h1>
          <h3>{search.textoHTML}</h3>
        </SubTitle>
      );
    });
    setTask(textFillHtml);
  }

  function handleClickCss() {
    const textFillCss = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaCSS}</h1>
          <h3>{search.textoCSS}</h3>
        </SubTitle>
      );
    });
    setTask(textFillCss);
  }

  function handleClickJS() {
    const textFillJS = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaJavaScript}</h1>
          <h3>{search.textoJavaScript}</h3>
        </SubTitle>
      );
    });
    setTask(textFillJS);
  }

  function handleClickReact() {
    const textFillReact = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaReactJS}</h1>
          <h3>{search.textoReactJS}</h3>
        </SubTitle>
      );
    });
    setTask(textFillReact);
  }

  function handleClickJTS() {
    const textFillTS = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaTypeScript}</h1>
          <h3>{search.textoTypeScript}</h3>
        </SubTitle>
      );
    });
    setTask(textFillTS);
  }

  function handleClickGit() {
    const textFillTS = data.map((search) => {
      return (
        <SubTitle>
          <h1>{search.TecnologiaGit}</h1>
          <h3>{search.textoGit}</h3>
        </SubTitle>
      );
    });
    setTask(textFillTS);
  }

  function HandleSetContent() {
    setTask("");
  }

  return (
    <HabilitsContent>
      <SkillContent>
        <TitleGlob>Habilidade</TitleGlob>
        <TecContent>
          <ContentButton>
            <button onClick={handleClickHtml} >
              <img src={html} alt="" />
            </button>

            <button onClick={handleClickCss} >
              <img src={css} alt="" />
            </button>

            <button onClick={handleClickJS} >
              <img src={javascript} alt="" />
            </button>

            <button
              onClick={handleClickReact}
              
            >
              <img src={react} alt="" />
            </button>

            <button onClick={handleClickJTS} >
              <img src={typescript} alt="" />
            </button>

            <button onClick={handleClickGit}>
              <img src={Git} alt="" />
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
