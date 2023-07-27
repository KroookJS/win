import ComponentIsLoading from "@/components/isLoadingComponents/ComponentIsLoading";

import GetItem from "@/components/GetItem";

import { CustomContext } from "@/contrex/TasksProvider";
import { useActivePage } from "@/hooks/useActivePage";
import { useCast, useFavoriteQuery } from "@/hooks/useShortsAndPostsQuery";
import { Layout } from "@/layout/Layout";

import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import styled from "styled-components";
import { TopChart } from "@/components/Categories/TopChart";
import { ListFavorite } from "@/components/GetItem/ListFavorite";
import { IPost } from "@/types/Post";

const TitleHotNew = styled.h3`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin: 10px;
`;

const BlockVideo = styled.div`
  width: 100%;

  height: 81vh;
  text-align: center;
  margin: 20px auto 0;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #222222;
  border-radius: 35px 35px 0 0;
  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

const PText = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function Favorite() {
  const isActivePage = useActivePage();
  

  const { likeArr, copy, getFavoriteFromLs } = useContext(CustomContext);


  const { data: favorite } = useCast(likeArr.join(","), "getfavorite");
  

  useEffect(() => {
    getFavoriteFromLs();
  }, []);

  return isActivePage ? (
    <Layout>
      <TopChart />
      <TitleHotNew>Your saved videos</TitleHotNew>
      {favorite ? (
        <ListFavorite favorite={favorite} />
      ) : (
        <BlockVideo>
          <PText>
            Add a video to your favorites to start watching here{" "}
            <MdOutlineFavoriteBorder
              style={{ color: "var(--colors-btn)", fontSize: 50 }}
            />
          </PText>
        </BlockVideo>
      )}
    </Layout>
  ) : (
    <ComponentIsLoading />
  );
}
