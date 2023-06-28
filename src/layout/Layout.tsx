import Head from "next/head";
import { Header } from "@/components/Header";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import { List } from "@/components/Cart/List";
import { ButtonCategotyes } from "@/ui/ButtonCategotyes";
import { RenderImgCategory } from "@/components/Categories/RenderImgCategory";
import NavBar from "@/components/NavBar";
import { NavBarModel } from "@/components/NavBarModel";
import Title from "antd/es/skeleton/Title";
import { CardTitle } from "@/ui/CartStyle";
import styled from "styled-components";
import { Context, CustomContext } from "@/contrex/TasksProvider";
import SliderCategory from "@/components/Categories/SliderCategory";

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
  category,
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
