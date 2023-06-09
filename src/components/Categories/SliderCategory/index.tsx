import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/grid";
import "swiper/css/pagination"; 

/* import "swiper/css/pagination"; */
// import required modules
import { Grid, Pagination } from "swiper";
import { catigoryImage } from "@/utils/catigoryImg";
import { TItemSlider } from "@/types/Slider";
import Link from "next/link";
import { ImgMyTestKategory } from "../ImgMyTestKategory";

export default function SliderCategory() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 15,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
