import { TItemProduct } from "@/types/Product";
import { ButtonBy } from "@/ui/Button";
import { CardBody, CardImage } from "@/ui/CartStyle";
import { WrapperArticle } from "@/ui/Wrraper";
import React, { FC } from "react";
import styled from "styled-components";

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


export const Cart: FC<TItemProduct> = ({
  title,
  thumbnail,
  description,
  price,
}) => {
  return (
    <WrapperArticle>
      <CardImage alt={title} src={thumbnail} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDesk>{description}</CardDesk>
        <CardPrice>Price now {price} $</CardPrice>
        <ButtonBy>{price} $</ButtonBy>
      </CardBody>
    </WrapperArticle>
  );
};
