"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./PriceGallery.css";

function PriceGallery({ room }) {
  return (
    <article>
      <div className="pricegallery">
        <Swiper
          style={{
            "--swiper-pagination-color": "#fbe7da",
            "--swiper-navigation-color": "#fbe7da",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-navigation-size": "40px",
          }}
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
          {room.pics.map((pic) => (
            <SwiperSlide key={pic}>
              <Image width={400} height={400} src={pic} alt="pic" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
}

export default PriceGallery;
