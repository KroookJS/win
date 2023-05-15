import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    max-width: var(--width-mx);
    margin: 0 auto;
    padding: 2rem 1rem;
  }
`;

export const WrapperArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  heigth: 100px;
  padding: 0.6rem;
  overflow: hidden;
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: ease-in 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;