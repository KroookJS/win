import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const CardDesk = styled.p`
  margin: 7px 0 0 9px;
  font-size: var(--fs-md);
  font-weight: var(--fw-me);
  color: gray;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CartHeaderName = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;

  gap: 10px;
`;
const AvaNameBlock = styled(CartHeaderName)`
  padding: 0;
  filter: drop-shadow(-2px 0px 8px #fff);
`;

const CartAvar = styled.img`
  z-index: 1;
  border: 1.5px solid var(--colors-btn);
  border-radius: 50px;
  width: 39px;
  height: 39px;
  object-fit: cover;
`;

export const AvatarBlock = ({
  userAvatar,
  user,
  userName,
  isInfoBlock,
}: {
  userAvatar?: string;
  user?: string;
  userName?: string;
  isInfoBlock?: boolean;
}) => {
  let styleBlock = isInfoBlock ? { padding: "10px 0" } : {};

  return (
    <CartHeaderName style={styleBlock}>
      <Link href={`/profile/${user}`}>
        <AvaNameBlock>
          <CartAvar
            src={
              userAvatar
                ? "http://37.1.219.168:4444" + userAvatar
                : "https://static4.tgstat.ru/channels/_0/19/198d4555a01171d3b94bb61a37ba9aaf.jpg"
            }
          />
          <CardDesk style={{ margin: 0 }}>
            {userName ? userName : "@Tele_Porn"}
          </CardDesk>
        </AvaNameBlock>
      </Link>
    </CartHeaderName>
  );
};
