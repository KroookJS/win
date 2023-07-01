import { getFavorite } from "@/api/products";


import GetItem from "@/components/GetItem";
import { Header } from "@/components/Header";
import { NavBarModel } from "@/components/NavBarModel";
import { CustomContext } from "@/contrex/TasksProvider";
import { IPost } from "@/types/Post";

import React, { useContext, useEffect, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import styled from "styled-components";

const TitleHotNew = styled.h3`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin: 10px;
`;

const BlockVideo = styled.div`
  width: 100%;

  height: 184vw;
  text-align: center;
  margin: 20px auto 0;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #222222;
  border-radius: 35px 35px 0 0;
`;

export default function Favorite() {
  const [favorite, setFavorite] = useState<IPost[]>();

  const { likeArr} = useContext(CustomContext);
  useEffect(() => {
    const newId = likeArr.join(",");
    if (likeArr.length !== 0) {
      const resFavorite = async () => {
        return await getFavorite(newId).then((res) => setFavorite(res));
      };
      resFavorite();
    }
  }, []);
  return (
    <>
      <Header />
      <TitleHotNew>Your saved videos</TitleHotNew>
      {favorite ? (
        <GetItem post={favorite} cartType={true} />
      ) : (
        <BlockVideo>
          <p>
            Add a video to your favorites to start watching here{" "}
            <MdOutlineFavoriteBorder style={{ color: "var(--colors-btn)", fontSize: 50 }} />
          </p>
        </BlockVideo>
      )}

      <NavBarModel />
    </>
  );
}
