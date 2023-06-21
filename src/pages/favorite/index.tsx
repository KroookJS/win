import { getFavorite } from "@/api/products";
import { List } from "@/components/Cart/List";

import GetItem from "@/components/GetItem";
import { Header } from "@/components/Header";
import { NavBarModel } from "@/components/NavBarModel";
import { CustomContext } from "@/contrex/TasksProvider";
import { Layout } from "@/layout/Layout";
import { IPost } from "@/types/Post";

import { TProducts } from "@/types/Product";
import { CardTitle } from "@/ui/CartStyle";
import React, { useContext, useEffect, useState } from "react";
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

  const { likeArr, handelLike } = useContext(CustomContext);
  console.log(likeArr);
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
      <TitleHotNew>您保存的文件</TitleHotNew>
      {favorite ? (
        <GetItem post={favorite} cartType={true} />
      ) : (
        <BlockVideo>
          <p>添加一个视频到您的收藏夹开始观看这里</p>
        </BlockVideo>
      )}

      <NavBarModel />
    </>
  );
}
