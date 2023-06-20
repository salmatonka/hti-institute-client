import React from 'react';
import './Footer.css';
import { ImGooglePlus } from 'react-icons/im';
import { FaPinterest } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const Footer = () => {

  return (
    <footer className="footer px-24 py-28 bg-base-200  text-base-content">
      <div >
        <img className='pl-6' src="https://www.bdhti.com/images/logo.png" alt="" />
        <h4 style={{ color: "#44425a", fontSize: '18px' }}>HTi Ti Institute</h4>
        <p style={{
          fontSize: '14px',
          lineHeight: '2.14',
          fontWeight: '500',
          color: '#6c6a74'
        }}>(A centre of practical education)</p>
        <div className='footer-social'>
          <ul style={{ display: 'flex'}}>
            <li><a href="#"><ImGooglePlus /></a></li>
            <li ><a href="#"><FaPinterest /></a></li>
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
          </ul>


        </div>
        <p className='copy-right' >Copyright ©2023 All rights reserved  by
        </p>
        <a
          style={{ color: '#007bff',paddingLeft:'60px' }}
          href="https://bdhti.com" target='_blank'>HTi Team.</a> 
      </div>
      <div>
        <span style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#44425a'
        }} className="footer-title ">Quick menu</span>
        <a className="quick-text link link-hover">Home</a>
        <a className="quick-text link link-hover">About us</a>
        <a className="quick-text link link-hover">Testimonials</a>
        <a className="quick-text link link-hover">Services</a>
        <a className="quick-text link link-hover">Contact</a>
        <a className="quick-text link link-hover">Facts</a>

      </div>
      <div>
        <span style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#44425a'
        }} className="footer-title ">Useful Links</span>
        <a className="quick-text link link-hover"></a>
        <a className="quick-text link link-hover">Courses</a>
        <a className="quick-text link link-hover">Events</a>
        <a className="quick-text link link-hover">Event</a>
        <a className="quick-text quick-text link link-hover">Teachers</a>
        <a className="quick-text link link-hover">Links</a>
        <a className="quick-text link link-hover">FAQ</a>
      </div>
      <div>
        <span style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#44425a'
        }} className="footer-title">Contact Us</span>
        <a className="link link-hover contact-title ">Address:</a>
        <p className='contact-text'>Room no #12,13 , <br />
          (1st Floor )145,Airport road <br />
          supermarket,monipuripara, <br />
          Tejgaon,Dhaka-1215, <br /> Bangladesh</p>
        <a className="contact-title  link link-hover">Phone:</a>
        <p className='contact-text'>01932-084486, 01879-215823</p>
        <a className="contact-title link link-hover">Email:</a>
        <p className=''>info@bdhti.com</p>

      </div>
    </footer>
  );
};

export default Footer;