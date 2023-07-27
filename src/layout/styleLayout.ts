import styled from "styled-components";

export const GridFaunder = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;
export const GridOne = styled.div`
  @media (min-width: 1000px) {
    grid-area: 1 / 1 / 6 / 2;
  }
`;
export const GridOTwo = styled.div`
  @media (min-width: 1000px) {
    grid-area: 1 / 2 / 6 / 6;
    padding-top: 15px;
  }
`;