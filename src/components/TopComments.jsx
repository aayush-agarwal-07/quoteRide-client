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
      <h1 className="italic text-3xl text-center mb-3 dark:invert">
        Top Comments on Youtube!!!
      </h1>
      <div className="h-[20vh] sm:h-[38vh] bg-[#e5ded8] font-sans">
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
          <SwiperSlide className="flex flex-col items-start justify-start text-lg bg-white p-[5vh]">
            <div className="w-[4vw] h-[4vw] bg-red-200 rounded-full flex items-center justify-center text-3xl dark:text-black mb-2">
              A
            </div>
            <h3 className="text-2xl mb-2 dark:invert">
              @abhishekbhadouria1691
            </h3>
            <p className="dark:text-black">
              You are becoming commendable day by day buddy. I feel it is just
              stuffed with a lot of optimism, confidence, hope and of course
              that fun element is the game changer 🔥🙌💯. Keep it up bro 🤜🤛
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start  justify-start text-lg bg-white p-[5vh]">
            <div className="w-[4vw] h-[4vw] bg-red-200 rounded-full flex items-center justify-center text-3xl dark:text-black mb-2">
              S
            </div>
            <h3 className="text-2xl mb-2 dark:invert">@StoryKalakar</h3>
            <p className="dark:text-black">
              Truly justifying the title of quote rider ... an adventurous ride
              of the life... Perspectives, delivery and takeaways top notch. All
              the best for future Endeavours ❤️
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start  justify-start  text-lg bg-white p-[5vh]">
            <div className="w-[4vw] h-[4vw] bg-red-200 rounded-full flex items-center justify-center text-3xl dark:text-black mb-2">
              J
            </div>
            <h3 className="text-2xl mb-2 dark:invert">@jitendrasaraswat1692</h3>
            <p className="dark:text-black">
              Great to see progress and effort to made during this vedio. and
              it's hard to discribe every point but we'll collabed . keep it up
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start  justify-start  text-lg bg-white p-[5vh]">
            <div className="w-[4vw] h-[4vw] bg-red-200 rounded-full flex items-center justify-center text-3xl dark:text-black mb-2">
              S
            </div>
            <h3 className="text-2xl mb-2 dark:invert">@shubhamma6918</h3>
            <p className="dark:text-black">
              bhaisaab mast se bhi upper hai ye , Keep growing Buddy
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start  justify-start  text-lg bg-white p-[5vh]">
            <div className="w-[4vw] h-[4vw] bg-red-200 rounded-full flex items-center justify-center text-3xl dark:text-black mb-2">
              B
            </div>
            <h3 className="text-2xl mb-2 dark:invert">@barely__editing </h3>
            <p className="dark:text-black">
              The way you explained the word ADVENTURE is great🔥
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start  justify-start  text-lg bg-white p-[5vh]">
            <div className="w-[4vw] h-[4vw] bg-red-200 rounded-full flex items-center justify-center text-3xl dark:text-black mb-2">
              K
            </div>
            <h3 className="text-2xl mb-2 dark:invert">@khushichaurasia7599</h3>
            <p className="dark:text-black">
              Goood work sir ...🤗🤗🤗👍👍keep it up ...☺️♥️
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-start  justify-start  text-lg bg-white p-[5vh]">
            <div className="w-[4vw] h-[4vw] bg-red-200 rounded-full flex items-center justify-center text-3xl dark:text-black mb-2">
              A
            </div>
            <h3 className="text-2xl mb-2 dark:invert">@avishkagupta05 </h3>
            <p className="dark:text-black">
              Video bji mazedaar aur bindaas h bhai🔥🔥👍🏻
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default TopComments;
