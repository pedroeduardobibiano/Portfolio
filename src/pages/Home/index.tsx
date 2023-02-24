import { HomeContent, HomeContainer, ImgContent, TextContent, TextTitle } from "./styles";

import Photo from '../../assets/Icons/Eu.webp'

export function Home() {
    return (

        <HomeContainer>
            <TextTitle>{`Olá`}</TextTitle>
            <HomeContent>

                <TextContent>
                    <pre>{`
    var presentation= [
        {
            Name: “Pedro Eduardo Bibiano”,
            
            Course: “Computer Science”
            
            Skills:[“JavaScript”, “ReactJS”, ”TypeScript”]
            
            Profession: “front-end developer”
        }
    ]
    
    `}
                    </pre>
                </TextContent>
                <ImgContent>
                    <img src={Photo} alt="" />
                </ImgContent>
            </HomeContent>
        </HomeContainer>

    )
}