"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperGallery.css";

function SwiperGallery() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="swipergallery">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((i) => (
          <SwiperSlide key={i}>
            <Image
              src={`/sliders/dorm${i}.jpg`}
              width={1000}
              height={400}
              alt={`image${i}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperGallery;
