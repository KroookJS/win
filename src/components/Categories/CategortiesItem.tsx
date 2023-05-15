import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  heigth: 100px;
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  transition: ease-in 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 20px;
  font-weight: var(--fw-middle);
`;



export const CategortiesItem = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <CardBody>
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </Wrapper>
  );
};
