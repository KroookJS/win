import ComponentIsLoading from "@/components/isLoadingComponents/ComponentIsLoading";



import { CustomContext } from "@/contrex/TasksProvider";
import { useActivePage } from "@/hooks/useActivePage";
import { useCast,} from "@/hooks/useShortsAndPostsQuery";
import { Layout } from "@/layout/Layout";

import React, { useContext, useEffect } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { TopChart } from "@/components/Categories/TopChart";
import { ListFavorite } from "@/components/GetItem/ListFavorite";

import { BlockVideo, PText, TitleHotNew } from "./styled";

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
