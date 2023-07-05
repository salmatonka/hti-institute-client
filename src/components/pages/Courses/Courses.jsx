import React from 'react';
import './Courses.css';
import CourseGalleries from '../CourseGalleries/CourseGalleries';
const Courses = () => {
    return (
        <div>
            <div>
                <div className="hero about-hero" >
                    <img className='' src="https://www.bdhti.com/images/about.jpg" alt="" />
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Courses</h1>
                            <p className="mb-5">
                                <a style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600 }} href="index.php">Home /</a> <span style={{ color: '#ff8a00', fontSize: '12px', fontWeight: 600 }}>Course</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

                {/* Web Research & Data Entry */}

            <div className="research-container">
            <h2 className="research-htag">Choose your course</h2>

                <div className="side-container grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:px-24 lg:pb-20 ">
                    <div className="left-side border-b-4 border-orange-600 ">
                        <div className="featured-container flex  justify-between ">
                            <div className='featured-tag  '>

                                <a href="#">ONGOING</a>
                            </div>
                            <div className="featured-price">
                                BDT: <span>1500</span>
                            </div>

                        </div>
                        <div className="featured-title">

                            <h3><a href="courses.html">Web Research & Data Entry</a></h3>
                           <div className="featured-text">
                           <p>
                                Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Donec vehicula efficitur nibh, in pretium nulla interdum lacus vehicula efficitur nibh..</p>
                           </div>

                            <br />
                            <br />

                        </div>
                        <div className="featured-course">
                        <span>Course Duration : 1 Month</span>
                        </div>
                    </div>
                    <div className="right-side featured-image border">
                        
                        <img src="https://www.bdhti.com/images/web_research.jpg" alt="" />
                        
                    </div>
                </div>
            </div>


{/* third section cards */}

<CourseGalleries />



        </div>

    );
};

export default Courses;