import { WrapperArticleRecomendation } from "@/ui/Wrraper";
import React, { FC, useContext, useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

import Link from "next/link";
import { IPost } from "@/types/Post";
import { CustomContext } from "@/contrex/TasksProvider";
import { AvatarBlock, CardDesk } from "./AvatarBlock";

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
  background: var(--colors-btn);
  border-radius: 20px 0px 34px 20px;
`;

const BlockVideoCart = styled.div`
  position: relative;

  height: 100%;

  img {
    position: relative;
    z-index: 1;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 0;
    width: 105%;
    height: auto;
  }

  &:hover {
    video {
      z-index: 2;
      opacity: 1;
    }
  }
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

  /* background-image: linear-gradient(90deg, #cfecd0, #ffc5ca); */
  color: #000;
  background: var(--colors-btn);
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

const IconBox = styled.div`
  padding: 8px;
  background: #3030308f;
  border-radius: 7px;
  display: flex;
`;

const CartPostMemo: FC<IPost> = ({
  userAvatar,
  _id,
  title,
  privVideoUrl,
  text,
  privUrl,
  userName,
  user,
}) => {
  const { likeArr, setLikeArr, handelDizLike, handelLike } =
    useContext(CustomContext);

  const [isLike, setIsLike] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const playerRef = useRef<any>(null);

  const styleIcon = {
    fontSize: "30px",
    color: "grey",
  };

  useEffect(() => {
    if (isTouch) {
      setTimeout(() => {
        setIsTouch(false);
      }, 10000);
    }
  }, [isTouch]);

  const onChangeTauch = () => {
    if (isTouch) {
      setIsTouch(false);
    }
    setIsTouch(true);
  };

  const numberReitingRandom = Math.ceil(Math.random() * (99 - 69) + 69);

  return (
    <WrapperArticleRecomendation>
      <CartHeader>
        <CartHeaderContainer>
          <AvatarBlock
            userAvatar={userAvatar}
            userName={userName}
            user={user}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <PlayBnt>{numberReitingRandom}%</PlayBnt>
            <IconBox>
              <BiDotsHorizontalRounded style={{ color: "var(--colors-btn)" }} />
            </IconBox>
          </div>
        </CartHeaderContainer>
      </CartHeader>
      <Link href={`/details/${_id}`}>
        <BlockVideoCart ref={playerRef}>
          <img
            style={{ maxHeight: 202 }}
            onTouchStart={onChangeTauch}
            alt={title}
            className="kaif"
            src={`http://37.1.219.168:4444${privUrl}`}
          />
          <video
            style={{ maxHeight: 202, background: "black" }}
            loop
            muted
            autoPlay
            className={isTouch ? "active" : ""}
            src={`http://37.1.219.168:4444${privVideoUrl}`}
          />
        </BlockVideoCart>
      </Link>
      <CartBlock>
        <CartBlockDirection>
          <CardTitle>{title}</CardTitle>
          <CardDesk>{text}</CardDesk>
        </CartBlockDirection>

        <CartBlockDisplay style={styleIcon}>
          {isLike ? (
            <MdFavorite
              /* onClick={() => handelDizLike(_id, setIsLike)} */
              style={{ color: "orange" }}
            />
          ) : (
            <MdOutlineFavoriteBorder
              onClick={() => handelLike(_id, setIsLike)}
              style={{ color: "var(--colors-btn)" }}
            />
          )}
        </CartBlockDisplay>
      </CartBlock>
    </WrapperArticleRecomendation>
  );
};

export const CartPost = React.memo(CartPostMemo);
