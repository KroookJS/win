import { TitleHot } from "@/layout/Layout";

import React, { FC } from "react";
import { AiOutlineFire } from "react-icons/ai";
import styled from "styled-components";

export const TitleIconBlock = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 13px 2px;
  @media (min-width: 1040px) {
    /* padding-left: 35px; */
    display: block;
    text-align: center;
  }
`;

type TProps = {
    title: string
}
const TitleCompMemo:FC<TProps> = ({ title }) => {
  return <>
    <TitleIconBlock>
                <AiOutlineFire />
                <TitleHot> {title}</TitleHot>
            </TitleIconBlock>
  </>;
}

export const TitleComp = React.memo(TitleCompMemo);
