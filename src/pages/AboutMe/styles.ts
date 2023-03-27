import styled from "styled-components";

export const ContentMain = styled.div`
  max-width: 1420px;
  margin: 0 auto;
`;

export const AboutMeContainer = styled.div`
  max-width: 1420px;
  height: 100%;

  margin-top: 3.5rem;

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  border-radius: 15px;
`;

export const TitleContent = styled.div`
  flex-direction: column;
  line-height: 1.7rem;

  padding-top: 3rem;

  font-size: 1.5rem;

  h4 {
    margin-top: 2rem;
    font-family: Roboto Mono;
    font-size: 1rem;
  }

  p {
    margin-top: 1rem;
    max-width: 38rem;
    text-align: justify;

    font-size: 1rem;
    font-weight: normal;
  }

  button {
    margin-top: 4.125rem;
    margin-bottom: 1.125rem;
    border: none;
    width: 12rem;
    height: 3.3rem;
    background-color:transparent;
    color: ${({ theme }) => theme.colors["Fonte-F2"]};
    border-radius: 6px;

    font-size: 1.2rem;
    border: 2px solid ${({ theme }) => theme.colors["hover-bg"]};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.4rem;

    svg {
      margin-right: 1rem;
    }
    :hover {
        background-color: ${({theme}) => theme.colors["hover-bg"]};
        transition: 0.8s;
    }
  }
`;

export const ImgContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    border-color: black;

    width: 36rem;
    height:34rem;
    margin-left: 3rem;
    max-width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme})=> theme.colors["header/Fotter"]};
  
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
