import { CardImage } from "@/ui/CartStyle";
import { WrapperArticleRecomendation } from "@/ui/Wrraper";
import React, { FC, useContext, useState } from "react";
import styled from "styled-components";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

import Link from "next/link";
import { IPost } from "@/types/Post";
import { CustomContext } from "@/contrex/TasksProvider";

const CardTitle = styled.h3`
  margin: 3px 0 0 0;
  font-weight: var(--fw-middle);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #000;
  padding: 7px 14px 4px 7px;
  border: 1px solid;
  background: white;
  border-radius: 20px 0px 34px 20px;
`;

const CardDesk = styled.p`
  margin: 7px 0 0 0;
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

const CartAvar = styled.img`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 39px;
  height: 39px;
  object-fit: cover;
`;

const CartBlock = styled.div`
  padding: 0.5rem 0.6rem;
  display: flex;
  justify-content: space-between;
  gap: 7px;
`;

const CartBlockDirection = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid #28272b; */
`;

const CartBlockDisplay = styled(CartBlockDirection)`
  flex-direction: unset;
`;

const PlayBnt = styled.button`
  width: 79px;
  padding: 0.5rem 0.6rem;
  border: none;
  border-radius: 7px;
  color: var(--colors-bg-cart);
  color: var(--colors-bg-cart);

  background-image: linear-gradient(90deg, #cfecd0, #ffc5ca);
  color: #715f5f;
  font-weight: 600;
`;

const CartHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;
const CartHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 0;
`;

const CartHeaderName = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;

  gap: 10px;
`;

const IconBox = styled.div`
  padding: 8px;
  background: #3030308f;
  border-radius: 7px;
  display: flex;
`;

type TCartPost = {
  post: IPost;
};
export const CartPost: FC<IPost> = ({
  _id,
  title,
  videoUrl,
  text,
  privUrl,
  category,
  tags,
  viewsCount,
  user,
}) => {
  const { likeArr, handelLike, handelDizLike } = useContext(CustomContext);
  const [isLike, setIsLike] = useState(false);

  const styleIcon = {
    fontSize: "30px",
    color: "grey",
  };

  return (
    <WrapperArticleRecomendation>
      <CartHeader>
        <CartHeaderContainer>
          <CartHeaderName>
            <Link href="/profile">
              <CartAvar src="https://yobte.ru/uploads/posts/2019-11/devushki-v-krasnom-plate-155-foto-82.jpg" />
              <CardDesk>Maly Fox</CardDesk>
            </Link>
          </CartHeaderName>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <PlayBnt>97%</PlayBnt>
            <IconBox>
              <BiDotsHorizontalRounded style={{ color: "grey" }} />
            </IconBox>
          </div>
        </CartHeaderContainer>
      </CartHeader>
      <Link href={`details/${_id}`}>
        <CardImage alt={title} src={`http://45.12.239.183${privUrl}`} />
      </Link>
      <CartBlock>
        <CartBlockDirection>
          <CardTitle>{title}</CardTitle>
          <CardDesk>{text}</CardDesk>
        </CartBlockDirection>

        <CartBlockDisplay style={styleIcon}>
          {isLike ? (
            <MdFavorite
              onClick={() => handelDizLike(_id, setIsLike)}
              style={{ color: "red" }}
            />
          ) : (
            <MdOutlineFavoriteBorder
              onClick={() => handelLike(_id, setIsLike)}
            />
          )}
        </CartBlockDisplay>
      </CartBlock>
    </WrapperArticleRecomendation>
  );
};
