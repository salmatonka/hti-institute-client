import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div style={{backgroundColor:'#FFFFFF',width:'100%'}} class="">
      <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-14">
        <div class="nav-container relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <img src="https://www.bdhti.com/images/logo.png" alt="" />
            <div className='logo-text '>
            <span >
              HTi IT Institute
            </span>
            </div>
          </a>
          <ul class="nav-link flex items-center hidden space-x-8 lg:flex">
            <li  >
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className ={({isActive})=> isActive? 'active': undefined }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                aria-label="About us"
                title="About us"
                className ={({isActive})=> isActive? 'active': undefined }
              >
               About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                aria-label="Our Courses"
                title="Our Courses"
                className ={({isActive})=> isActive? 'active': undefined }
              >
               Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/event"
                aria-label="Gallery"
                title="Gallery"
                className ={({isActive})=> isActive? 'active': undefined }
              >
              Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                aria-label="Contact us"
                title="Contact us"
                className ={({isActive})=> isActive? 'active': undefined }
              >
             Contact
              </NavLink>
            </li>
            <li>
              <a
                href="/"
                aria-label="Sign up"
                title="Sign up"
              >
                < BiSearch/>
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="">
                        HTi IT Institute
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          aria-label=" Home"
                          title=" Home"
                          className ={({isActive})=> isActive? 'active': undefined }
                        >
                           Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Our Courses"
                          title="Our Courses"
                          className ={({isActive})=> isActive? 'active': undefined }
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/event"
                          aria-label="Gallery"
                          title="Gallery"
                          className ={({isActive})=> isActive? 'active': undefined }
                        >
                         Gallery
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          aria-label="Contact us"
                          title="Contact us"
                          className ={({isActive})=> isActive? 'active': undefined }
                        >
                          Contact
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="/"
                          class=" "
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          <BiSearch />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Navbar;