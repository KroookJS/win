import { WrapperArticleNewCategory } from "@/ui/Wrraper";
import { CardImage, CardImageCategpry } from "@/ui/CartStyle";
import styled from "styled-components";

const TitleCategory = styled.h3`
  font-size: 22px;
  font-weight: 500;
  background: #00000063;
  width: 100%;
  color: #fffdfd;
  position: absolute;
  bottom: 0;
  text-align: center;
  /* border-bottom: 1px solid; */
  border-radius: 0 0 20px 20px;
`;

export const ImgMyTestKategory = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <WrapperArticleNewCategory>
      <CardImageCategpry alt={image} src={image} />
      <TitleCategory>{title}</TitleCategory>
    </WrapperArticleNewCategory>
  );
};
