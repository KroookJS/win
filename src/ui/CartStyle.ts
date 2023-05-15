import styled from "styled-components";

export const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

export const CardTitle = styled.h3`
  margin: 0;
  text-align: center;
  font-size: var(--fs-bg);
  font-weight: var(--fw-middle);
`;


export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 203px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;