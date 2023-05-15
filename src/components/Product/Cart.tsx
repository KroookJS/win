import { TItemProduct } from "@/types/Product";
import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.article`
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

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 203px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-middle);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const CardDesk = styled.p`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-me);
  color: gray;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const CardPrice = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);

  color: #51af74d1;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  width: 100%;
  border: 2px solid #0000001b;
  border-radius: var(--radii);
  /* background: #0069ffe0; */
  background: #005bff;
  transition: ease-in 0.2s;
  color: white;
  font-size: var(--fs-normal);
  font-weight: var(--fw-bold);

  &:hover {
    background: #27b11973;
    border: 2px solid #27b11974;
  }
`;

export const Cart: FC<TItemProduct> = ({
  title,
  thumbnail,
  description,
  price,
}) => {
  return (
    <Wrapper>
      <CardImage alt={title} src={thumbnail} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDesk>{description}</CardDesk>
        <CardPrice>Price now {price} $</CardPrice>
        <Button>{price} $</Button>
      </CardBody>
    </Wrapper>
  );
};
