import React from 'react';

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
                            <a style={{color: '#ffffff', fontSize: '12px', fontWeight: 600}} href="index.php">Home /</a> <span style={{color: '#ff8a00', fontSize: '12px', fontWeight: 600}}>Course</span>
                            </p>

                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Courses;