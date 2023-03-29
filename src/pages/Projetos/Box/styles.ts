import styled from "styled-components";

export const ProjetosContainer = styled.div`
  max-width: 1450px;
  margin: 0 auto 4rem auto;

  @media (max-width: 440px) {
    margin: 0;
  }
`;

export const ContentBoxes = styled.div`
  max-width: 1450px;
  height: 100%;

  padding: 2rem 0;

  font-family: "Inter", sans-serif;
  letter-spacing: 1px;
`;

export const Boxes = styled.div`
  max-width: 37rem;
  height: 39rem;

  h3 {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2.5rem;
    font-weight: normal;

    font-size: 1.3rem;

    animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3s; /* don't forget to set a duration! */

    @media (max-width: 440px) {
      font-size: 1.1rem;

    }
  }

  p {
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: normal;
    padding-top: 2rem;
    padding-bottom: 2rem;

    font-weight: 400;
    color: ${({ theme }) => theme.colors["Fonte-F1"]};

    animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3s; /* don't forget to set a duration! */
  
    @media (max-width: 440px) {
      font-size: 0.8rem;
      width: 20rem;

    }
  }

  span {
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: normal;
    font-size: 0.92rem;

    font-weight: 400;

    color: #ffb70d;

    animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3s; /* don't forget to set a duration! */
  
  
    @media (max-width: 440px) {
      font-size: 0.8rem;
      width: 20rem;

    }
  }
`;

export const Imagens = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  box-shadow: rgba(112, 181, 232, 0.1) -5px 5px,
    rgba(112, 181, 232, 0.08) -10px 10px, rgba(112, 181, 232, 0.06) -15px 15px;
  cursor: pointer;
  transition: 1s;
  animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */

  &:hover {
    box-shadow: rgba(255, 183, 13, 0.1) -5px 5px,
      rgba(255, 183, 13, 0.08) -10px 10px, rgba(255, 183, 13, 0.06) -15px 15px,
      rgba(255, 183, 13, 0.04) -20px 20px;
    transition: 1s;
    transform: scale(1.02);
  }
  border-radius: 5px;
  img {
    width: 100%;
    height: 12rem;
    border-radius: 5px;
    opacity: 0.85;
  }

  @media (max-width: 450px) {
    margin-left: 3rem;
    margin-right: 6rem;
    width: 15rem;
    height: 8rem;
    img {
      width: 100%;
      height: 8rem;
      border-radius: 5px;
      opacity: 0.85;
    }
  }
`;

export const ButtonsMainPr = styled.div`

  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  height: 3rem;

  justify-content: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 525px;
  margin: 2rem auto;

  cursor: pointer;

  animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 3s; /* don't forget to set a duration! */

  @media (max-width: 1376px) {
    padding-right: 2rem;
    padding-left: 2rem;
    margin: 2rem 0rem 0rem 0rem;
  }

  @media (max-width: 440px) {
      flex-direction:column;
      height: 8rem;
      align-items: flex-start;
    }
`;

interface PropsVariant {
  variant: "azul" | "amarelo";
}
export const ButtonsContainerPr = styled.div<PropsVariant>`
  width: 10rem;
  svg {
    display: flex;
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

  gap: 0.3rem;

  :hover {
    background-color: ${({ theme }) => theme.colors["hover-bg"]};
    transition: 0.8s;
  }

  width: 10rem;
  height: 3.2rem;

  border: none;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors["Fonte-F1"]};

  border: 2px solid;
  border-color: ${(props) =>
    props.variant === "amarelo"
      ? props.theme.colors.amarelo
      : props.theme.colors.azul};
`;
