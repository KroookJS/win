import { WrapperArticleNewCategory } from "@/ui/Wrraper";
import { CardImage, CardImageCategpry } from "@/ui/CartStyle";
import styled from "styled-components";
import Link from "next/link";
import React, { useContext } from "react";
import { CustomContext } from "@/contrex/TasksProvider";

import { BiCategoryAlt } from "react-icons/bi";
import { TitleHot } from "@/layout/Layout";

const TitleCategory = styled.h3`
  font-size: 17px;
  font-weight: 300;
  background: #00000063;
  width: 100%;
  color: #fffdfd;
  position: absolute;
  bottom: 0;
  text-align: center;
  /* border-bottom: 1px solid; */
  border-radius: 0 0 20px 20px;
  padding: 7px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const NewTitleCategory = styled.h3`
  font-size: 16px;
  font-weight: 500;
  background: #010101a3;
  width: 100%;
  color: var(--colors-btn);
  position: absolute;
  bottom: 0;
  text-align: center;

  padding: 7px;

  /* display: -webkit-box;
  -webkit-line-clamp: 1; */
`;

const ImgMyTestKategoryMem = ({
  image,
  title,
  href,
  isCategory = false,
}: {
  href: string;
  image: string;
  title: string;
  isCategory?: boolean;
}) => {
  const { setCategoryText } = useContext(CustomContext);
  return (
    <Link href={isCategory ? `category/${href}` : `model/${href}`}>
      <WrapperArticleNewCategory onClick={() => setCategoryText(title)}>
        <CardImageCategpry alt={image} src={image} />
        {!isCategory ? (
          <TitleCategory>{title}</TitleCategory>
        ) : (
          <NewTitleCategory>{title}</NewTitleCategory>
        )}
      </WrapperArticleNewCategory>
    </Link>
  );
};

export const ImgMyTestKategory = React.memo(ImgMyTestKategoryMem)