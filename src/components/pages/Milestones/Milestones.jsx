import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Autoplay,  Pagination } from "swiper";
import './Milestones.css';
const Milestones = () => {
    return (
      //   <div>
      // <img
      //   src="https://www.bdhti.com/images/milestones.jpg"
      //   className="absolute inset-0 object-cover w-full h-full"
      //   alt=""
      // />
        
      //   </div>
      <div className="milestone">
      {/* <div className="milestone-icons">
              <img src="https://www.bdhti.com/images/milestones.jpg" alt="" />
              <div className="milestone-text">
              <h3>17</h3>
              <p>Total Courses</p>
              </div>
            </div> */}
          {/* <div className="milestones">
            <div className="milestone-container">
            <img src="https://www.bdhti.com/images/milestones.jpg" alt="" />

            <div className="milestone-groups">
              <div className="milestone-icons">
                <img src="https://www.bdhti.com/images/milestone_1.svg" alt="" />
                </div>
               <div className="milestone-text ">
               <div data-end-value='17'> 17</div>
              <div>Total Courses</div>
               </div>
            </div>
            </div>
          </div> */}

{/* <div className="hero milestone-container" >
                    <img className='' src="https://www.bdhti.com/images/about.jpg" alt="" />
                    <div className="bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                        <section className=" ">
	<div className="grid sm:grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-4">
		<div className="">
    <img style={{width:'81px', height:'81px'}} src="https://www.bdhti.com/images/milestone_1.svg" alt="" />
			<p className="milestone-counter">17</p>
			<p  className="counter-text">Total Courses</p>
		</div>
		<div className="">
    <img style={{width:'81px', height:'81px'}}  src="https://www.bdhti.com/images/milestone_2.svg" alt="" />
			<p className="milestone-counter">527</p>
			<p className="counter-text">Students</p>
		</div>
		<div className="">
    <img style={{width:'81px', height:'81px'}}  src="https://www.bdhti.com/images/milestone_3.svg" alt="" />
			<p className="milestone-counter">10</p>
			<p className="counter-text">Teachers</p>
		</div>
		<div className="">
    <img style={{width:'81px', height:'81px'}}  src="https://www.bdhti.com/images/milestone_4.svg" alt="" />
			<p className="milestone-counter">9</p>
			<p className="counter-text">UpComing Course</p>
		</div>
		
	</div>
</section>

                        </div>
                    </div>
                </div> */}


                
      </div>
      
    );
};

export default Milestones;