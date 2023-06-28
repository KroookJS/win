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

const stories = [
  {
    url: "http://45.12.73.121:4444/uploads/storis-1.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Kartaval",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/storis-2.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-3.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-4.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-5.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-6.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-7.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-8.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-9.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-10.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-11.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-12.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-13.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
  {
    url: "http://45.12.73.121:4444/uploads/shorts-14.mp4",
    type: "video",
    href: "/profile",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage:
        "https://xsliv.com/uploads/posts/2022-11/valya-karnaval-sliv-011.webp",
    },
  },
];

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

export default function Slider() {
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
          stories={stories}
          defaultInterval={3500}
          width={"100%"}
          height={"101vh"}
        />
      </StorisWrapper>
    </>
  );
}
