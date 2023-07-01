import { ContainerStoris } from "@/ui/container";
import { myStories } from "@/utils/shorts";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

  @media (min-width: 557px) {
    &:nth-child(1) {
      margin-left: 0px;
    }
  }

  @media (min-width: 767px) {
    height: 229px;
  }

  @media (min-width: 1040px) {
    height: 249px;
    border-radius: 20px;
    &:nth-child(1) {
      margin-left: 0px;
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

  @media (min-width: 557px) {
    &:nth-child(1) {
      margin-left: 0px;
    }
  }

  @media (min-width: 767px) {
    height: 229px;
  }

  @media (min-width: 1040px) {
    height: 249px;
    border-radius: 20px;
    &:nth-child(1) {
      margin-left: 0px;
    }
  }
`;

export const NewShorts = () => {
  const router = useRouter();
  const [myShorts, setMyShorts] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4444/shorts")
      .then((res) => setMyShorts(res.data));
  }, []);

  return (
    <div>
      <ContainerStoris>
        {myShorts.map((el: any, index: number) => {
          if (el.type === "video") {
            return (
              <SortsImg
                key={index}
                src={`http://localhost:4444${el.url}`}
                onClick={() => router.push(`/stories`)}
              />
            );
          } else {
            return (
              <SortsNewImg
                key={index}
                src={`http://localhost:4444${el.url}`}
                onClick={() => router.push(`/stories`)}
              />
            );
          }
        })}
      </ContainerStoris>
    </div>
  );
};
