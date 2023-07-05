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
const ChooseCourse = () => {
  return (




    // <a href="#">ONGOING</a>
    // <img src="https://www.bdhti.com/hadmin/upload/web_development.jpg" alt="Shoes" />
    // <h3><a href="module/wd-202">Web Development with PHP</a></h3>





    <div className="px-24" >
      <div>
        <h2 style={{fontSize: '36px',
    fontWeight: 700,
    color: '#44425a',
    textAlign: 'center',
    
    marginBottom: '50px',}}>Choose your course</h2>
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
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/ms_office.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">

              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>1000
                    </span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Office Application (Basic)</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 1 Month</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/ad_ms_office.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>15000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Advanced Office Package Application</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/p_ms_office.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">

              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>12000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Professional Office Application</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/graphics_design.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>2000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Graphic Design</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 1 Month</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/pf_graphics.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>15000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Professional Graphic Design</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/web_design.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>12000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Professional Web Design</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/web_development.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>14000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Web Development with PHP</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/wdd.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>15000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Web Design & Development</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/laravel.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>1000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">PHP Laravel Framework</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/c.net.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>15000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">C#.Net Programming</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/asp.net.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>15000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">ASP.Net Programming</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/android.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>15000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Android App Development</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/digital_marketing.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>10000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Digital Marketing</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/3d_modeling.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>17000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">3D Modelling & Animations</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-gallery lg:py-8">
            <div className="course-gallery-img ">
              <img src='https://www.bdhti.com/hadmin/upload/hardware.jpg' alt="" />
            </div>
            <div style={{ backgroundColor: '' }} className="course-gallery-text">
              <div className="course-gallery-body  border-b-4 border-orange-600">
                <div className="course-gallery-tag ">
                  <div className="course-gallery-ongoing ">
                    <h2 >
                      <a href="#">ONGOING</a></h2>
                  </div>
                  <div className="course-gallery-price">
                    BDT: <span>10000</span>
                  </div>
                </div>

                <div className="course-gallery-title">
                  <h3><a href="module/gd-101">Hardware Maintanance & Troubleshooting</a></h3>

                </div>
                <br />
                <br />
                <br />
                <div className="course-gallery-month">
                  <span>Course Duration: 3 Months</span>
                </div>

              </div>




            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

  );
};

export default ChooseCourse;