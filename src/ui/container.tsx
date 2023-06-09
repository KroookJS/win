import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-height: 250px;
  max-width: var(--width-mx);
  margin: 0 auto;
  margin-top: 0.6rem;
  padding: 0 0.7rem;
  @media (min-width: 1024px) {
    padding: 0 1rem;
  }
`;

export const ContainerHeader = styled(Container)`
  max-width: var(--width-mx-project);
`;
