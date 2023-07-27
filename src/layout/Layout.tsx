import Head from "next/head";
import { Header } from "@/components/Header";
import React, { useState } from "react";

import { NavBarModel } from "@/components/NavBarModel";

import styled from "styled-components";
import { GridFaunder, GridOTwo, GridOne } from "./styleLayout";
import NavBar from "@/components/NavBar";

type LayoutProps = {
  title?: string;
  category?: string;
  description?: string;
  model?: string;
  keywords?: string;
  isShorts?: boolean;
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
  description,
  model,
  keywords,
  isShorts,
}) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
        <meta name="msapplication-config" content="none" />
        <meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <title>
          {title
            ? `${title} - TelePorn.com`
            : "Porn Videos Online For Free -Milf Porno, Porn Movies, XXX - TelePorn"}
        </title>

        <meta
          name="description"
          content={
            description
              ? `watch ${title ? title : " hard sex incest"} - ${
                  model ? model : "Milf Porn"
                } - TelePorn.com, the best hardcore porn site. PornHub It is the source of the widest selection of porn in the world.`
              : `TelePorn is the leader in the world of free porn. Choose from millions of hard videos that download super fast and in excellent quality, including VR videos. The biggest adult website on the internet is only getting better. Maximum porn stars, maximum amateur porn. It's fast, it's free, it's TelePorn!`
          }
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={
            keywords
              ? keywords + "milf porn, sister porn - teleporn"
              : `porn, sex, porn, porn videos, porn online, watch porn, online for free, sex, erotica, free porn milf porn - sister porn - teleporn`
          }
        />
        {description && (
          <>
            <meta
              name="adsbytrafficjunkycontext"
              data-hb-guid="AE02151F-505B-4095-AFF9-34CB9CDDB658"
              data-custom-param="&amp;noc=0"
              data-platform="pc"
              data-site="teleporn"
              data-site-id="2"
              data-context-tag="real-public-sex,risky-public-fuck,risky,sex-at-work,roleplay,pov,amateur,deepthroat,public-blowjob,rough-sex,public-flashing,public-toilet,hard-fuck,mirror-fuck,eva-soda,extreme-public-sex"
              data-context-category="HD-Porn,Brunettes,Gonzo,Hard-sex,Beauties,Amateur,Verified-Amateur,Role-Playing Games HD-Porn,Brunettes,Gonzo,Hard-sex,Beauties,Amateur,Verified-Amateur,Role-Playing Games"
              data-context-page-type="video"
              data-refresh-times="2"
              data-refresh-delay="240"
              data-domain-rewrite="rt.teleporn.com/_xa"
            />
            <meta property="og:type" content="video.movie" />
            <meta
              property="og:title"
              content={
                title
                  ? `${title} - TelePorn.com`
                  : "Porn Videos Online For Free -Milf Porno, Porn Movies, XXX - TelePorn"
              }
            />
            <meta
              property="og:description"
              content={
                description
                  ? `watch ${title ? title : " hard sex incest"} - ${
                      model ? model : "Milf Porn"
                    } - TelePorn.com, the best hardcore porn site. PornHub It is the source of the widest selection of porn in the world.`
                  : `TelePorn is the leader in the world of free porn. Choose from millions of hard videos that download super fast and in excellent quality, including VR videos. The biggest adult website on the internet is only getting better. Maximum porn stars, maximum amateur porn. It's fast, it's free, it's TelePorn!`
              }
            />
          </>
        )}
      </Head>
      <>
        {!isShorts && <Header />}

        <GridFaunder>
          <GridOne>
            <NavBar />
          </GridOne>

          <GridOTwo>{children}</GridOTwo>
        </GridFaunder>

        {!isShorts && <NavBarModel count={count} />}

        <footer style={{ padding: 40 }}></footer>
      </>
    </>
  );
};
