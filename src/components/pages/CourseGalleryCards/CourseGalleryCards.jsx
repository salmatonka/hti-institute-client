import React from 'react';
import './CourseGalleryCards.css';
const CourseGalleryCards = ({courseGallery}) => {
    return (
        //     <div className='px-4 py-12 '>
    //     <img className='border-b-4 border-orange-600' src={courseGallery.img} alt="" />
    // </div>
 

  <div className="course-gallery lg:py-8">
  <div className="course-gallery-img ">
     <img src={courseGallery.img} alt="" />
  </div>
  <div style={{backgroundColor:''}} className="course-gallery-text">

  <div className="course-gallery-body  border-b-4 border-orange-600">
        <div className="course-gallery-tag ">
          <div className="course-gallery-ongoing ">
            <h2 >
              <a href="#">ONGOING</a></h2>
          </div>
          <div className="course-gallery-price">
            BDT: <span>{courseGallery.price}</span>
          </div>
        </div>

        <div className="course-gallery-title">
        <h3><a href="module/gd-101">{courseGallery.name}</a></h3>
        
        </div>
        <br />
        <br />
        <br />
        <div className="course-gallery-month">
          <span>Course Duration: {courseGallery.month}</span>
        </div>
        
      </div>



  
  </div>
</div>

    );
};

export default CourseGalleryCards;