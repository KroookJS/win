import { TItemProduct } from "@/types/Product";
import { CardBody, CardImage } from "@/ui/CartStyle";
import { WrapperArticle, WrapperArticleRecomendation } from "@/ui/Wrraper";
import React, { FC } from "react";
import styled from "styled-components";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import Link from "next/link";
import { IPost } from "@/types/Post";
import ReactPlayer from "react-player";

const CardTitle = styled.h3`
  margin: 0;
  /* font-size: var(--fs-md); */
  font-weight: var(--fw-middle);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #fff;
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
  min-width: 79px;
  padding: 0.5rem 0.6rem;
  border: none;
  border-radius: 15px;
  color: var(--colors-bg-cart);
  color: var(--colors-bg-cart);
  background-image: var(--colors-line);
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

export const CartFavorite: FC<IPost> = ({
  title,
  videoUrl,
  text,
  category,
}) => {
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
            </Link>
            <CardDesk>Aly Fox</CardDesk>
          </CartHeaderName>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <PlayBnt>Open Full Post</PlayBnt>
          </div>
        </CartHeaderContainer>
      </CartHeader>
      <ReactPlayer
        height={232}
        width={"100vw"}
        controls={true}
        playsinline={true}
        url={`http://localhost:4444${videoUrl}`}
      />
      <CartBlock>
        <CartBlockDirection>
          <CardTitle>{title}</CardTitle>
        </CartBlockDirection>
        <CartBlockDisplay style={styleIcon}>
          <MdFavorite style={{ color: "red" }} />
        </CartBlockDisplay>
      </CartBlock>
    </WrapperArticleRecomendation>
  );
};
