import Head from "next/head";
import { Header } from "@/components/Header";
import React, { useState } from "react";

import { NavBarModel } from "@/components/NavBarModel";

import styled from "styled-components";


type LayoutProps = {
  title?: string;
  category?: string;
};

export const TitleHot = styled.h2`
  font-size: 20px;
  font-weight: 500;
  /* padding: 1px 13px 2px; */

  /* @media (min-width: 1040px) {
    padding-left: 35px;
  } */
`;
export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  children,
}) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>
        <Header />

        {/* <TitleHot>Top Hot Week</TitleHot>

        <RenderImgCategory /> */}

        <NavBarModel count={count} />

        {children}
        <footer style={{ padding: 40 }}></footer>
      </>
    </>
  );
};
