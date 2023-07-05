import React from 'react';
import CourseGalleryCards from '../CourseGalleryCards/CourseGalleryCards';


const CourseGalleries = () => {
    const courseGalleries = [
        {
          id: 1,
          name:'Office Application (Basic)',
          price:'1000',
          month: '1 Month',
          img: 'https://www.bdhti.com/hadmin/upload/ms_office.jpg'
        },
        {
          id: 2,
          name:'Advanced Office Package Application',
          price:'15000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/ad_ms_office.jpg'
        },
        {
          id: 3,
          name:'Professional Office Application',
          price:'12000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/p_ms_office.jpg'
        },
        {
          id: 4,
          name:'Graphic Design',
          price:'2000',
          month: '1 Month',
          img: 'https://www.bdhti.com/hadmin/upload/graphics_design.jpg'
        },
        {
          id: 5,
          name:'Professional Graphic Design',
          price:'15000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/pf_graphics.jpg'
        },
        {
          id: 6,
          name:'Professional Web Design',
          price:'12000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/web_design.jpg'
        },
        {
          id: 7,
          name:'Web Development with PHP',
          price:'14000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/web_development.jpg'
        },
        {
          id: 8,
          name:'Web Design & Development',
          price:'15000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/wdd.jpg'
        },
        {
          id: 9,
          name:'PHP Laravel Framework',
          price:'1000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/laravel.jpg'
        },
        {
          id: 10,
          name:'C#.Net Programming',
          price:'15000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/c.net.jpg'
        },
        {
          id: 11,
          name:'ASP.Net Programming',
          price:'15000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/asp.net.jpg'
        },
        {
          id: 12,
          name:'Android App Development',
          price:'15000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/android.jpg'
        },
        {
          id: 13,
          name:'Digital Marketing',
          price:'10000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/digital_marketing.jpg'
        },
        {
          id: 14,
          name:'3D Modelling & Animations',
          price:'17000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/3d_modeling.jpg'
        },
        {
          id: 15,
          name:'Hardware Maintanance & Troubleshooting',
          price:'10000',
          month: '3 Months',
          img: 'https://www.bdhti.com/hadmin/upload/hardware.jpg'
        },
        
    
      ]
    return (
        <div>

      

      {/* gallery map */}

      <div>

        {/* <h2 style={{ color: '#44425a', fontWeight: 700, fontSize: '36px' }} className='text-center pt-20'>Photo Gallery</h2> */}

        <div className="gallery-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-8 lg:px-20 lg:py-16 sm:py-6">
          {
            courseGalleries.map(courseGallery => <CourseGalleryCards
              key={courseGallery.id}
              courseGallery={courseGallery}
            />)
          }
        </div>
      </div>

    </div>
    );
};

export default CourseGalleries;