import { WrapperArticleNewCategory } from "@/ui/Wrraper";
import { CardImage, CardImageCategpry } from "@/ui/CartStyle";
import styled from "styled-components";
import Link from "next/link";

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

export const ImgMyTestKategory = ({
  image,
  title,
  href,
}: {
  href: string;
  image: string;
  title: string;
}) => {
  return (
    <Link href={`/${href}`}>
      <WrapperArticleNewCategory>
        <CardImageCategpry alt={image} src={image} />
        <TitleCategory>{title}</TitleCategory>
      </WrapperArticleNewCategory>
    </Link>
  );
};
