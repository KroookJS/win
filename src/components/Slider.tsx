import React from "react";
/* import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Container } from "../ui/container";
import { imgeSlider } from "@/utils/sliderArr"; */

import Link from "next/link";

/* import { TItemSlider } from "@/types/Slider";
import { LinkStyle } from "@/ui/Button"; */
import styled from "styled-components";

import Stories from "react-insta-stories";
import { useRouter } from "next/router";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CloseSlider = styled.h4`
  font-size: 30px;
  position: absolute;
  right: 10px;
  top: 15px;
  z-index: 1;
`;

const StorisWrapper = styled.main`
  max-width: 600px;
  margin: 0 auto;
  position: relative;

  @media (min-width: 425px) {
    max-width: 425px;
  }
`;

const ContanerClose = styled.div`
  position: absolute;
  right: 10px;
  top: 20px;
  z-index: 1002;
`;
const styleIconClose = {
  fontSize: "30px",
  zIndex: 1002,
};

export default function Slider({ myStories }: { myStories: any }) {
  const router = useRouter();

  return (
    <>
      <StorisWrapper>
        <Link href="/">
          <ContanerClose>
            <AiOutlineCloseCircle style={styleIconClose} />
          </ContanerClose>
        </Link>
        {/*  <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Keyboard]}
          pagination={{ clickable: true }}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          className="mySwiper"
        >
          {imgeSlider &&
            imgeSlider.map((img: TItemSlider) => {
              return (
                <SwiperSlide
                  style={{ background: "black", position: "relative" }}
                  key={img.id}
                >
                  <Link href={img.href} style={LinkStyle}>
                    <img alt={img.title} src={img.image} />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper> */}

        <Stories
          stories={myStories}
          defaultInterval={3500}
          width={"100%"}
          height={"101vh"}
          onAllStoriesEnd={() => router.push("/")}
        />
      </StorisWrapper>
    </>
  );
}
