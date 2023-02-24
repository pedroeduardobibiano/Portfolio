import  { AllHTMLAttributes, ReactNode, useState } from "react";
import { ButtonContainer, ButtonContent, HabilitsContent, TextContent } from "./styles";

import javascript from '../../../assets/Icons/javascript.svg'
import html from '../../../assets/Icons/html.svg'
import css from '../../../assets/Icons/css.svg'
import typescript from '../../../assets/Icons/typescript.svg'
import react from '../../../assets/Icons/react.svg'

export const data = [
    {
        id: 1,
        TecnologiaHTML: 'HTML',
        textoHTML: 'html blablabla',
    },
    {
        id: 2,
        TecnologiaCSS: 'CSS',
        textoCSS: 'css blabla bla',
    },
    {
        id: 3,
        TecnologiaJavaScript: 'JavaScript',
        textoJavaScript: 'java bla bla ',
    },
    {
        id: 4,
        TecnologiaReactJS: 'ReactJS',
        textoReactJS: 'React bla bla ',
    },
    {
        id: 5,
        TecnologiaTypeScript: 'TypeScript',
        textoTypeScript: 'Type bla bla ',
    },
]


export interface Tecnologies {
    id: number,
    TecnologiaHTML: string,
    TecnologiaCSS: string,
    TecnologiaJavaScript: string,
    TecnologiaReactJS: string,
    TecnologiaTypeScript: string,
    textoHTML: string;
    textoCSS: string;
    textoJavaScript: string;
    textoReactJS: string;
    textoTypeScript: string;
}

interface PropsTech {
    tech: Tecnologies
}



export function Skill() {

    const [task, setTask] = useState<PropsTech[] | ReactNode>([])

    function handleClickHtml() {
        const textFillHtml = data.map((search) => {
            return (
                <>
                    <h1>{search.TecnologiaHTML}</h1>
                    <h3>{search.textoHTML}</h3>
                </>
            )
        })
        setTask(textFillHtml)
    }

    function handleClickCss() {
        const textFillCss = data.map((search) => {
            return (
                <>
                    <h1>{search.TecnologiaCSS}</h1>
                    <h3>{search.textoCSS}</h3>
                </>
            )
        })
        setTask(textFillCss)
    }

    function handleClickJS() {
        const textFillJS = data.map((search) => {
            return (
                <>
                    <h1>{search.TecnologiaJavaScript}</h1>
                    <h3>{search.textoJavaScript}</h3>

                </>
            )
        })
        setTask(textFillJS)
    }

    function handleClickReact() {
        const textFillReact = data.map((search) => {
            return (
                <>
                    <h1>{search.TecnologiaReactJS}</h1>
                    <h3>{search.textoReactJS}</h3>
                </>
            )
        })
        setTask(textFillReact)
    }

    function handleClickJTS() {
        const textFillTS = data.map((search) => {
            return (
                <>
                    <h1>{search.TecnologiaTypeScript}</h1>
                    <h3>{search.textoTypeScript}</h3>

                </>)
        })
        setTask(textFillTS)
    }




    return (
        <HabilitsContent>

            <ButtonContent>

                <ButtonContainer>
                    <button onClick={handleClickHtml}>
                        <img src={html} alt="" />
                    </button>

                    <button onClick={handleClickCss}>
                        <img src={css} alt="" />
                    </button>

                    <button onClick={handleClickJS}>
                        <img src={javascript} alt="" />
                    </button>

                    <button onClick={handleClickReact}>
                        <img src={react} alt="" />
                    </button>

                    <button onClick={handleClickJTS}>
                        <img src={typescript} alt="" />
                    </button>



                </ButtonContainer>




            </ButtonContent>

            <TextContent>
                {task === undefined? "Selecione uma técnologia" : ""}
                <span>{task}</span>
            </TextContent>


        </HabilitsContent>
    )
}