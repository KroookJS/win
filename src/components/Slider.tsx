import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Container } from "../ui/container";
import { imgeSlider } from "@/utils/sliderArr";

import Link from "next/link";

import { TItemSlider } from "@/types/Slider";
import { LinkStyle } from "@/ui/Button";

export default function Slider() {
  return (
    <>
      <Container>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          pagination={{ clickable: true }}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {imgeSlider &&
            imgeSlider.map((img: TItemSlider) => {
              return (
                <SwiperSlide key={img.id}>
                  <Link href={img.href} style={LinkStyle}>
                    <img alt={img.title} src={img.image} />
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </>
  );
}
