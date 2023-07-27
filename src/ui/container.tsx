import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-height: 250px;
  max-width: var(--width-mx);
  margin: 10px auto;

  padding: 0 0.7rem;
  @media (min-width: 1024px) {
    padding: 0 1rem;
  }
`;

export const ContainerStoris = styled.main`
  max-height: 250px;
  max-width: var(--width-mx);
  margin: 10px auto;

  padding: 0 0.7rem;

  flex-wrap: none;

  display: flex;
  justify-content: center;
  gap: 17px;

  overflow-x: auto;
  filter: drop-shadow(-2px 4px 11px grey);
  @media (min-width: 1024px) {
    padding: 0 1rem;
  }
`;

export const ContainerHeader = styled(Container)`
  max-width: var(--width-mx-project);
`;
