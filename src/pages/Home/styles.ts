import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1420px;

  height: 70vh;
  margin: 4rem auto;

  display: flex;

  justify-content: space-around;
  letter-spacing: 0.1rem;

  overflow: hidden;


  // ------media 850px

  @media (max-width: 850px) {
    margin-top: 2rem; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 60vh;

    flex-direction:column;
  }
  // ------End media 850px

`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding-left: 6rem;

  padding-top: 7rem;

  line-height: 4rem;
  animation: slideInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.5s; /* don't forget to set a duration! */
  flex: 1;
  // media 850px

  @media (max-width: 850px) {
    padding-left: 1rem;
  }
  // End media 850px

    // ------media 470px

    @media (max-width: 470px) {
      padding-left: 8rem;

  }
  // ------End media 470px
`;
export const LeftSide = styled.div`
  flex: 1;
  animation: slideInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.5s; /* don't forget to set a duration! */
  flex: 1;

  // ------media 1200px

  @media (max-width: 1200px) {
    img {
      width: 30rem;
      padding: 2rem;
    }
  }

  // ------ End media 1200px

  // ------media 950px

  @media (max-width: 950px) {
    img {
      width: 24rem;
      padding: 2rem;
      margin-top: 2rem;
      margin: 1rem;
    }
  }
  // ------End media 950px

  //media max 850px

  @media (max-width: 850px) {
    img {
      display: none;
    }
  }
  // ------End media 850px
`;

export const Titles = styled.div`
  width: 25.3rem;
`;

export const Title = styled.div`
  font-size: 1.6rem;

  // ------media 1200px
  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }
  // ------End media 1200px

  // ------media 950px
  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
  // ------End media 950px

  // media 470px

  @media (max-width: 470px) {
    font-size: 0.9rem;
  }
  // End media 470px
`;

export const NameTitle = styled.div`
  color: #ffb70d;
  font-weight: 500;

  font-size: 3rem;
  border-right: 3px solid pink;

  animation: cursor 1.2s steps(40) infinite normal,
    typing 4s 1s normal steps(40) both;

  white-space: nowrap;
  overflow: hidden;

  @keyframes cursor {
    from {
      border-right-color: white;
    }
    to {
      border-right-color: transparent;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 40rem;
      max-width: 25.3rem;
    }
  }

  //media max 1200px

  @media (max-width: 1200px) {
    font-size: 2.4rem;

    animation: cursor 1.2s steps(30) infinite normal,
      typing 4s 1s normal steps(30) both;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 35rem;
        max-width: 20.5rem;
      }
    }
  }
  // End media max 1200px

  //media max 950px

  @media (max-width: 950px) {
    font-size: 2rem;

    animation: cursor 1.2s steps(30) infinite normal,
      typing 4s 1s normal steps(30) both;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 30rem;
        max-width: 17.5rem;
      }
    }
  }
  // End media max 950px

  //media max 850px

  @media (max-width: 850px) {
    font-size: 3rem;
    animation: cursor 1.2s steps(40) infinite normal,
      typing 4s 1s normal steps(40) both;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 40rem;
        max-width: 25.3rem;
      }
    }
  }
  // ------End media 850px


  //media max 470px

  @media (max-width: 470px) {
    font-size: 2.1rem;
    animation: cursor 1.2s steps(25) infinite normal,
      typing 3s 1s normal steps(25) both;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 20rem;
        max-width: 18rem;
      }
    }
  }
  // ------End media 470px
`;

export const Description = styled.div`
  font-size: 1.6rem;

  // ------media 1200px
  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }
  // ------End media 1200px

  // ------media 950px
  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
  // ------End media 950px

   // ------media 470px
   @media (max-width: 470px) {
    font-size: 0.9rem;
  }
  // ------End media 470px
`;
export const ButtonsMain = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 22rem;
  gap: 3rem;
  height: 3rem;

  justify-content: flex;
  align-items: center;
  justify-content: center;


  // ------media 470px
  @media (max-width: 470px) {
    margin-top: 2rem;
  display: flex;
  width: 18rem;
  gap: 1.5rem;
  height: 2rem;

  justify-content: flex;
  align-items: center;
  justify-content: center;
  }
  // ------End media 470px


`;

interface PropsVariant {
  variant: "azul" | "amarelo";
}
export const ButtonsContainer = styled.div<PropsVariant>`
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

  img {
    width: 22px;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    color: red;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors["hover-bg"]};
    transition: 0.8s;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  width: 12rem;
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
