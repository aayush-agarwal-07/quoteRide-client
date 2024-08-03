import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const TopComments = () => {
  return (
    <>
      <div className="h-[20vh] sm:h-[40vh] bg-[#e5ded8] font-sans">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full h-full"
        >
          <SwiperSlide className="flex items-center justify-center text-lg bg-white]">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-lg bg-white">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-lg bg-white">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-lg bg-white">
            Slide 4
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-lg bg-white">
            Slide 5
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-lg bg-white">
            Slide 6
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-lg bg-white">
            Slide 7
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-lg bg-white">
            Slide 8
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-lg bg-white">
            Slide 9
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default TopComments;
