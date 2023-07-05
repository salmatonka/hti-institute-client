import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './ChooseCourse.css';

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";

const CorporatePartner = ({corporate }) => {
console.log(corporate )
    return (
        <div>
            <div className="px-24" >
  <div>
 
  </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={corporate.img} alt="php" /></figure>
        {/* <div className="card-body">
          <div className="card-tag">
            <div>
              <h2 >
                <a href="#">ONGOING</a></h2>
            </div>
            <div className="card-price">
              BDT: <span>14000</span>
            </div>
          </div>

          <div className="card-title">
          <h3><a href="module/wd-202">Web Development with PHP</a></h3>
          </div>
          <br />
          <br />
          <br />
          <div className="card-course">
            <span>Course Duration: 3Months</span>
          </div>
        </div> */}
      </div>
    </div>
    </SwiperSlide>
        
        
       
      </Swiper>
    </div>
        </div>
    );
};

export default CorporatePartner;