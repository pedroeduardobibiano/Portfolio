import { useState } from "react";
import { ButtonContainer, ButtonContent, HabilitsContent } from "./styles";

import javascript from '../../../assets/Icons/javascript.svg'
import html from '../../../assets/Icons/html.svg'
import css from '../../../assets/Icons/css.svg'
import typescript from '../../../assets/Icons/typescript.svg'
import react from '../../../assets/Icons/react.svg'

export const data = [
    {
        id: 1,
        TecnologiaHTML: 'HTML',
        textoHtml: 'html blablabla',
    },
    {
        id: 2,
        TecnologiaCSS: 'CSS',
        textoCss: 'css blabla bla',
    },
    {
        id: 3,
        TecnologiaJava: 'JavaScript',
        textoJava: 'java bla bla ',
    },
    {
        id: 4,
        TecnologiaReact: 'ReactJS',
        textoReact: 'React bla bla ',
    },
    {
        id: 5,
        TecnologiaType: 'TypeScript',
        textoTS: 'Type bla bla ',
    },
]



export function Skill() {

    const [task, setTask] = useState<any>()

    function handleClickHTML() {
        const textFillHtml = data.map((search) => {
            return <h1>{search.textoHtml}</h1>
        })
        setTask(textFillHtml)
    }


    function handleClickCss() {
        const textFillCSS = data.map((search) => {
            return <h1>{search.textoCss}</h1>
        })
        setTask(textFillCSS)
    }

    function handleClickJS() {
        const textFillJs = data.map((search) => {
            return <h1>{search.textoJava}</h1>
        })
        setTask(textFillJs)
    }

    function handleClickReact() {
        const textFillReact = data.map((search) => {
            return <h1>{search.textoReact}</h1>
        })
        setTask(textFillReact)
    }

    function handleClickJTS() {
        const textFillJs = data.map((search) => {
            return <h1>{search.textoTS}</h1>
        })
        setTask(textFillJs)
    }

    return (
        <HabilitsContent>

            <ButtonContent>

                <ButtonContainer>
                    <button className="btn btn1" onClick={handleClickHTML}>
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

            <span>{task}</span>


        </HabilitsContent>
    )
}