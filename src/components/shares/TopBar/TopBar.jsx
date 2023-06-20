import React from 'react';
import './TopBar.css';
const TopBar = () => {
    return (
        <div className='top-bar ' 
        style={{ backgroundColor:'#2C2B31', color:'#918EA0', fontSize: '14px' }}>
        <div className='top-bar2 flex justify-between container py-4'>
           <div className='top-bar3 lg:px-24 md:px-10'>
              <ul className='flex justify-between md:text-sm'>
               <li className='lg:mr-14 md:mr-4'>HAVE ANY QUESTIONS?  </li>
               <li className='lg:mr-14 md:mr-4 '>01932-084486, 01879-215823</li>
               <li>info@bdhti.com</li>
              </ul>
           </div>
           <div className='btn-nav md:w-25 md:mr-4'>
              <a href='registration' target='_blank'>APPLY NOW</a>
           </div>
        </div>
       </div>
    );
};

export default TopBar;