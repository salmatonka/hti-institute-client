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
          <h2 style={{fontSize: '36px',
    fontWeight: 700,
    color: '#44425a',
    textAlign: 'center',
    marginTop:'60px',
    marginBottom: '60px',}}>Our Corporate Partner</h2>
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
      <div className="">
        <img src='https://www.bdhti.com/hadmin/upload/bteb.jpg' alt="php" />
      </div>
    </div>
    </SwiperSlide>
        <SwiperSlide>
        <div>
      <div className="">
        <img src='https://www.bdhti.com/hadmin/upload/BU.jpg' alt="php" />
      </div>
    </div>
    </SwiperSlide>
        <SwiperSlide>
        <div>
      <div className="">
        <img src='https://www.bdhti.com/hadmin/upload/kgsc.jpg' alt="php" />
      </div>
    </div>
    </SwiperSlide>
        <SwiperSlide>
        <div>
      <div className="">
        <img src='https://www.bdhti.com/hadmin/upload/lalmatia.jpg' alt="php" />
      </div>
    </div>
    </SwiperSlide>
        <SwiperSlide>
        <div>
      <div className="">
        <img src='https://www.bdhti.com/hadmin/upload/queens-school.jpg' alt="php" />
      </div>
    </div>
    </SwiperSlide>
        <SwiperSlide>
        <div>
      <div className="">
        <img src='https://www.bdhti.com/hadmin/upload/shadow.jpg' alt="php" />
      </div>
    </div>
    </SwiperSlide>
        <SwiperSlide>
        <div>
      <div className="">
        <img src='https://www.bdhti.com/hadmin/upload/asa.jpg' alt="php" />
      </div>
    </div>
    </SwiperSlide>
        <SwiperSlide>
        <div>
      <div className="">
        <img src='https://www.bdhti.com/hadmin/upload/bangabondhu.jpg' alt="php" />
      </div>
    </div>
    </SwiperSlide>
      
      </Swiper>
    </div>
        </div>
    );
};

export default CorporatePartner;