import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const HomeBanner = () => {
    return (
        <div>
             <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://www.bdhti.com/hadmin/upload/slider-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.bdhti.com/hadmin/upload/slider-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.bdhti.com/hadmin/upload/slider-1.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
        </div>
    );
};

export default HomeBanner;