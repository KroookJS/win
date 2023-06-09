import { getFavorite } from "@/api/products";
import { List } from "@/components/Cart/List";
import CartColumnProfile from "@/components/CartColumnProfile";
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
      <TitleHotNew>Ваши сохраненки</TitleHotNew>
      {favorite ? (
        <GetItem post={favorite} cartType={true} />
      ) : (
        <p>Favorite page</p>
      )}
      {/* <CartColumnProfile publicate={favorite} title='Favorite publicate'/> */}
      <div style={{ maxWidth: 250 }}></div>
      <NavBarModel />
    </>
  );
}
