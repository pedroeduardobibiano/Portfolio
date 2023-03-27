import styled from "styled-components";

export const HomeContainer = styled.div`

max-width: 1420px;

height: 70vh;
margin: 4rem auto;

display:flex;

justify-content:space-around;
letter-spacing: 0.1rem;

overflow:hidden;
`


export const RightSide = styled.div`
  flex: 1;
  display:flex;
  flex-direction:column;
  
  padding-left:6rem;

  padding-top: 7rem;

  line-height: 4rem;

  animation: slideInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.5s; /* don't forget to set a duration! */
  flex: 1;
`
export const LeftSide = styled.div`
flex: 1;
animation: slideInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.5s; /* don't forget to set a duration! */
  flex: 1;

`


export const Titles = styled.div`
  width: 25.3rem;

`

export const Title = styled.div`
font-size: 1.6rem;
`
export const NameTitle = styled.div`
color: #FFB70D;
font-weight: 500;


font-size: 3rem;
border-right: 3px solid pink;

animation: cursor  1.2s steps(40) infinite normal , typing 4s 1s normal steps(40) both;

white-space: nowrap;
overflow: hidden;



@keyframes cursor{
    from{
      border-right-color: white;
    }
    to{
      border-right-color: transparent;
    }
}

@keyframes typing{
  from{
      width: 0;
    }
    to{
      width: 40rem;
      max-width: 25.3rem;
    }
}
`
export const Description = styled.div`
font-size: 1.6rem;
`
export const ButtonsMain = styled.div`
margin-top: 2rem;
  display:flex;
  width: 22rem;
  gap: 3rem;
  height: 3rem;
   
  justify-content: flex;
  align-items: center ;
  justify-content: center;


  `

interface PropsVariant {
  variant: 'azul' | 'amarelo'
}
export const ButtonsContainer = styled.div<PropsVariant>`

svg{
display:flex;
margin-left: 0.8rem;
}

a {
    color: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

img{
  width: 22px;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  color: red;

}

:hover{
  background-color:${({theme}) => theme.colors["hover-bg"]};
  transition: 0.8s;
}


display:flex;
align-items:center;
justify-content: center;
 
  width: 12rem;
  height: 3.2rem;

  border: none;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors["Fonte-F1"]};


  border: 2px solid ;
  border-color: ${(props) => props.variant === "amarelo" ? props.theme.colors.amarelo : props.theme.colors.azul}
  
  `
