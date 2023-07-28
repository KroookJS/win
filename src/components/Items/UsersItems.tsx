import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const CardDesk = styled.p`
  margin: 7px 0 0 9px;
  font-size: 20px;
  font-weight: 400;
  color: #ffffffc2;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardDeskPost = styled(CardDesk)`
  color: blanchedalmond;
`;

const NewCart = styled.div`
  padding: 0.5rem;

  gap: 10px;

  border: 1px solid #96671c;
  border-radius: 20px;
`;
const AvaNameBlock = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartAvar = styled.img`
  z-index: 1;
  border: 1.5px solid var(--colors-btn);
  border-radius: 50px;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const UsersItems = ({
  userAvatar,
  user,
  userName,
  postsCount,
  isInfoBlock,
}: {
  userAvatar?: string;
  user?: string;
  userName?: string;
  postsCount?: number;
  isInfoBlock?: boolean;
}) => {
  let styleBlock = isInfoBlock ? { padding: "10px 0" } : {};

  return (
    <NewCart style={styleBlock}>
      <Link href={`/profile/${user}`}>
        <AvaNameBlock>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <CartAvar
              src={
                userAvatar
                  ? "http://37.1.219.168:4444" + userAvatar
                  : "https://static4.tgstat.ru/channels/_0/19/198d4555a01171d3b94bb61a37ba9aaf.jpg"
              }
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CardDesk style={{ margin: 0 }}>
                {userName ? userName : "@Tele_Porn"}
              </CardDesk>
              <CardDeskPost style={{ margin: 0 }}>
                {postsCount ? postsCount : 69} Posts
              </CardDeskPost>
            </div>
          </div>
        </AvaNameBlock>
      </Link>
    </NewCart>
  );
};
