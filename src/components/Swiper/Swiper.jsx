import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "swiper";

import "swiper/swiper-bundle.css";
import "./styles.css";
import { Box } from "@mui/material";
import { ClassNames } from "@emotion/react";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

function Swip() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);

  const slides = [];
  for (let i = 9; i < 14; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/1500/500`}
          style={{ listStyle: "none", objectFit: "cover", width: "100%" }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 9; i < 14; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumbs-${i}`} tag="li" style={{ listStyle: "none"}}>
        <img src={`https://picsum.photos/id/${i + 1}//163/100`} alt={`Slide ${i}`} />
      </SwiperSlide>
    );
  }

  // const slides2 = [];
  // for (let i = 9; i < 14; i += 1) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`} tag="li">
  //       <img
  //         src={`https://picsum.photos/id/${i + 1}/500/300`}
  //         style={{ listStyle: "none" }}
  //         alt={`Slide ${i}`}
  //       />
  //     </SwiperSlide>
  //   );
  // }

  return (
    <Box class="swipe">
      <Swiper
        tag="section"
        wrapperTag="ul"
        controller={{ control: controlledSwiper }}
        id="main"
        rewind={true}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay
        modules={[Thumbs]}
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to:", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {slides}
      </Swiper>
      <Swiper
        id="thumbs"
        spaceBetween={2}
        slidesPerView={5}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>
    </Box>
  );
}

export default Swip;
