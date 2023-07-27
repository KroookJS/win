import { TitleHot } from "@/layout/Layout";
import { TitleIconBlock } from "@/pages";
import { TChildren } from "@/types/Product";
import { WrapperTopChart } from "@/ui/Wrraper";
import React, { FC } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import styled from "styled-components";

const NewWrapperTopChart = styled.main`
  /* background-color: rgb(253 253 253 / 88%); */
  background-color: rgb(159 136 100 / 74%);
  border: 2px solid #ffc38436;
  padding: 20px 10px;
  border-radius: 40px;

  max-width: 97%;
  margin: 15px auto;
  filter: drop-shadow(2px 4px 6px black);
  color: white;

  @media (max-width: 1000px) {
    display: none;
  }
  /*   @media (min-width: 1000px) {
    display: none;
  } */
`;

const HelpedDiv = styled.div`
  height: 303px;
  background: white;

  position: absolute;
  top: 208px;
  left: 0;
  z-index: 0;
  filter: blur(258px);

  @media (min-width: 769px) {
    top: -58px;
  }
`;

export const CategortiesImgList: FC<TChildren> = ({ children }) => {
  return (
    <NewWrapperTopChart>
      <HelpedDiv />
      <TitleIconBlock style={{ marginBottom: 10 }}>
        <BiCategoryAlt />
        <TitleHot>Top 5 one for the week</TitleHot>
      </TitleIconBlock>
      <WrapperTopChart>{children}</WrapperTopChart>
    </NewWrapperTopChart>
  );
};
