import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/less";
import "swiper/less/pagination";

import "./TestSwiper.less";

// import required modules
import { Pagination } from "swiper/modules";

const TestSwiper = function TestSwiper() {
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  const handleSwiperInit = (swiperInstance) => {
    setSwiper(swiperInstance);
  };

  const handleSlideChange = () => {
    console.log("Slide changed");
  };

  return (
    <div className="box">
      <Swiper
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
    </div>
  );
};

export default TestSwiper;
