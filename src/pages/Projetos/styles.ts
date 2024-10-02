import styled from "styled-components";

export const ProjetosContainer = styled.div`
  margin-bottom: 6rem;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 1450px;
  margin: 0 auto;

  flex-wrap: wrap;

  gap: 0 12rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  color: #ffb70d;

  font-weight: bold;

  max-width: 1350px;
  margin: 3rem auto 1rem auto;
  padding: 0.5rem;

  @media (max-width: 1423px) {
    max-width: 580px;
    padding-left: 2rem;
  }
`;

//exportando os botões do /Home/styles
