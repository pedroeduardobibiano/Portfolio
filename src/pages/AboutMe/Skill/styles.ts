import styled from "styled-components";

export const HabilitsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 15rem;
  border-radius: 10px;
  margin-top: 5rem;
  margin-bottom: 7rem;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors["header/Fotter"]};

  @media (max-width: 1200px) {
    height: 100%;
    padding-bottom: 1rem;
    padding-right: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
   // media 650pxpx
   @media (max-width: 650px) {
    height: 100%;
  }
  // End media 650px

  // media 570px
  @media (max-width: 570px) {
    height: 100%;
  }
  // End media 570px
`;

export const ButtonContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 6rem;
  margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  
 
`;

export const TextContent = styled.div`
  div {
    display: inline-block;
    margin: 0 0.5rem;

    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }
`;

export const TitleNoPointer = styled.div`
  font-size: 1.5rem;
  margin: 0.5rem 1rem;

  font-weight: normal;
  font-size: 1.3rem;
`;

export const TitleGlob = styled.div`
  font-size: 1.8rem;
  font-family: roboto mono;

  font-weight: bold;
  padding-top: 1.2rem;
  padding-left: 1.4rem;

  margin-bottom: 1rem;

    // media 650pxpx
    @media (max-width: 650px) {
      font-size: 1.5rem;

  }
  // End media 650px
`;
export const TecContent = styled.div``;
export const TextsContent = styled.div`
  padding: 0.5rem 1rem;

  background-color: rgba(247, 247, 249, 0.02);
  margin: 0.7rem;

  font-size: 0.7rem;

  display: block;

  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors["Background-N1"]};
`;

export const SkillContent = styled.div``;

export const ContentButton = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 1rem;
  width: 100%;



  // media 1200px
  @media (max-width: 1200px) {
    width: 550px;
  }
  // End media 1200px

  // media 650px
  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  // End media 650px

  // media 570px
  @media (max-width: 570px) {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    gap: 2rem;
  }
  // End media 570px

  button {
    width: 5rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;



    background-color: transparent;

    // media 1200px
    @media (max-width: 1200px) {
      width: 4.5rem;
      height: 3.5rem;
    }
    // End media 1200px

    &:hover {
      background-color: ${({ theme }) => theme.colors["hover-bg"]};
      transition: 0.8s;
      img {
        width: 3.3rem;
        
      }
    }
  }
`;

export const Title = styled.h1`
  display: block;

  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */

`;

export const SubTitle = styled.div`
  display: block;

  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */

  font-size: 0.9rem;
  font-weight: normal;

  line-height: 1.7rem;
  h3 {
    font-weight: normal;
    margin-top: 0.2rem;
  }

  h1 {
    font-family: roboto mono;
    font-size: 1.8rem;
    margin-bottom: 1.1rem;
    color: ${({theme}) => theme.colors.amarelo};

      // media 650pxpx
      @media (max-width: 650px) {
      font-size: 1.5rem;

  }
  }
`;
