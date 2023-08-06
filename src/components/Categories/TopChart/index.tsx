import React, { useEffect, useState } from "react";

import { CategortiesImgList } from "./TopList";

import { TopVideosItem } from "../TopVideosItem";
import { IPost } from "@/types/Post";
import { getTopViews } from "@/api/products";

import TestIsLoading from "@/components/TestIsLoading";
import { useShortsQuery } from "@/hooks/useShortsAndPostsQuery";

const TopChartMemo = () => {
  const { data: topPost, isLoading } = useShortsQuery(getTopViews, "getTop");
  const arr = [...Array(4)].map((_, i) => <TestIsLoading key={i} />);
  return (
    <CategortiesImgList>
      {topPost
        ? topPost.map((top: IPost, idex: number) => {
            return (
              <TopVideosItem
                index={idex + 1}
                image={top.privUrl}
                title={top.title}
                href={top._id}
              />
            );
          })
        : arr}
    </CategortiesImgList>
  );
};

export const TopChart = React.memo(TopChartMemo);
