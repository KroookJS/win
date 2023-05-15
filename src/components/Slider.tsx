import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Container } from "./container";
import { imgeSlider } from "@/utils/sliderArr";
import { TItemSlider } from "@/types/Product";

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
            imgeSlider.map((el: TItemSlider) => {
              return (
                <SwiperSlide key={el.id}>
                  <img alt={el.title} src={el.image} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </>
  );
}
