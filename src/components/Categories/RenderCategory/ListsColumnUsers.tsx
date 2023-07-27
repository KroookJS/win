import { TChildren } from "@/types/Product";
import { WrapperSliderRecomendation, WrapperUsers } from "@/ui/Wrraper";
import React, { FC } from "react";

import styled from "styled-components";

const NewWrapperTopChart = styled.main`
  background-color: rgb(255 248 238 / 12%);
  border: 2px solid #ffc38436;
  padding: 20px 10px;
  border-radius: 40px;

  max-width: 97%;
  margin: 15px auto;
  filter: drop-shadow(2px 4px 6px black);
`;

export const ListsColumnUsers: FC<TChildren> = ({ children }) => {
  return <WrapperUsers>{children}</WrapperUsers>;
};
