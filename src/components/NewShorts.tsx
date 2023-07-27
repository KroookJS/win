import { ContainerStoris } from "@/ui/container";
import { useRouter } from "next/router";
import React, { ReactDOM, useRef } from "react";
import styled from "styled-components";
import SceletonShorts from "./isLoadingComponents/SceletonShorts";
import { getAllShorts } from "@/api/shorts";
import { IShorts } from "@/types/Shorts";
import { useShortsQuery } from "@/hooks/useShortsAndPostsQuery";

const SortsImg = styled.video`
  width: 30%;
  height: 197px;
  object-fit: cover;
  border-radius: 20px;
  border: 2px solid #ffa31a;
  &:nth-child(1) {
    margin-left: 359px;
  }
  @media (min-width: 479px) {
    &:nth-child(1) {
      margin-left: 115px;
    }
  }

  /*  @media (min-width: 557px) {
    &:nth-child(1) {
      margin-left: 0px;
    }
  } */

  @media (min-width: 767px) {
    height: 229px;
  }

  @media (min-width: 1040px) {
    height: 249px;
    border-radius: 20px;
    &:nth-child(1) {
      margin-left: 20px;
    }
  }
`;

const SortsNewImg = styled.img`
  width: 30%;
  height: 197px;
  object-fit: cover;
  border-radius: 20px;
  border: 2px solid #ffa31a;
  &:nth-child(1) {
    margin-left: 359px;
  }
  @media (min-width: 479px) {
    &:nth-child(1) {
      margin-left: 115px;
    }
  }

  /*  @media (min-width: 557px) {
    &:nth-child(1) {
      margin-left: 80px;
    }
  } */

  @media (min-width: 767px) {
    height: 229px;
  }

  @media (min-width: 1040px) {
    height: 249px;
    border-radius: 20px;
    &:nth-child(1) {
      margin-left: 20px;
    }
  }
`;

export const NewShorts = () => {
  const router = useRouter();

  const windowWidth = useRef(window.innerWidth);

  const { data: shorts, isLoading } = useShortsQuery(getAllShorts, "getShorts");

  const arr =
    windowWidth.current < 450
      ? [...Array(3)].map((_, i) => <SceletonShorts key={i} />)
      : [...Array(6)].map((_, i) => <SceletonShorts key={i} isHeight={true} />);


  return (
    <>
      <ContainerStoris>
        {!isLoading && shorts
          ? shorts.map((short: IShorts) => {
              if (short.type === "video") {
                return (
                  <SortsImg
                    key={short._id}
                    src={`http://localhost:4444${short.url}`}
                    onClick={() => router.push(`/stories`)}
                  />
                );
              } else {
                return (
                  <SortsNewImg
                    key={short._id}
                    src={`http://localhost:4444${short.url}`}
                    onClick={() => router.push(`/stories`)}
                  />
                );
              }
            })
          : arr}
      </ContainerStoris>
    </>
  );
};
