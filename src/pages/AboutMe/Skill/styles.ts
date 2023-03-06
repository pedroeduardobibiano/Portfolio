import styled from "styled-components";

export const HabilitsContent = styled.div`
    width: 100%;
    background-color: ${({theme})=> theme.colors["header/Fotter"]};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;


    height: 11rem;
    margin-top: 1rem;

`

export const ButtonContent = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 6rem;
    margin-top: 1rem;

    
`;

export const ButtonContainer = styled.div`
   display:flex;
   gap: 1rem;
   align-items:center;
   justify-content:center;


    button{
        border: none;
        width: 5rem;
        height: 4rem;
        border-radius: 50%;
        display:flex ;
        align-items:center;
        justify-content:center;
        

        &:hover{
            background-color: rgba(247, 247, 249, 0.2);
         transition: 01s;
        }
    }
`;

export const TextContent = styled.div`
div{
    display: inline-block;
      margin: 0 0.5rem;
      
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
      
      
    }
background-color:#fff;


    
`;


export const TitleNoPointer = styled.div`
 font-size: 1.5rem;
 margin: 0.5rem 1rem;
 
 font-weight: normal;
 font-size: 1.3rem;

 
`



export const TitleGlob = styled.div`
    padding:  1rem 3rem;
    font-size: 1.8rem;
    font-family: roboto mono;

    font-weight: bold;
`;
export const TecContent = styled.div`
    
    `;
export const TextsContent = styled.div`
    padding: 0.5rem 1rem;
    
    background-color: rgba(247, 247, 249, 0.2);
    margin: 0.7rem;

    font-size: 0.7rem;

    display: block;
      
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
      border-radius: 8px;

      
`;

export const SkillContent = styled.div`
`


export const ContentButton = styled.div`
    display:flex;
    justify-content:space-around;

    width: 700px;

    align-items:center;
    

    button{
        border: none;
        width: 5rem;
        height: 4rem;
        border-radius: 50%;
        display:flex ;
        align-items:center;
        justify-content:center;
    

        &:hover{
            background-color: rgba(247, 247, 249, 0.2);
         transition: 01s;
         img{
            width: 3.3rem;
        }
        }
    }
`;

export const Title = styled.h1`
    display: block;
      
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
      

      
    
`

export const SubTitle = styled.div`
    display: block;
    
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
      


      font-size: 0.9rem;
      font-weight: normal;

      h3{
        font-weight:normal;
        margin-top: 0.2rem;
      }

      h1{
        font-family: roboto mono;
        font-size: 1.8rem;
      }
      
`