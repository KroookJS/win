import React, { FC } from "react";
import { TopChart } from "./Categories/TopChart";
import { NewShorts } from "./NewShorts";
import styled from "styled-components";
import { TitleComp } from "./TitleComp";

const MainApp = styled.main`
  margin-top: 1px;

  /*   @media (min-width: 450px) {
    margin-top: 20px;
  }
  @media (min-width: 767px) {
    margin-top: 100px;
  }
  @media (min-width: 1024px) {
    margin-top: 150px;
  } */
`;
const TitleSearch = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  padding: 1px 13px 2px;
`;

type TProps = {
  search: string;
};

const TopTesMem: FC<TProps> = ({ search }) => {
  return !search ? (
    <>
      <TopChart />
      <NewShorts />
      <MainApp>
        <TitleComp title="Today's video" />
      </MainApp>
    </>
  ) : (
    <TitleSearch>According to your request"{search}" Found</TitleSearch>
  );
};

export const TopTes = React.memo(TopTesMem)