import React from 'react';
import './Contact.css';
import { FaAngleRight } from 'react-icons/fa';
const Contact = () => {
    return (
        <div>
            <div>
                <div className="hero about-hero" >
                    <img className='' src="https://www.bdhti.com/images/about.jpg" alt="" />
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Contact</h1>
                            <p className="mb-5"><a style={{color: '#ffffff', fontSize: '12px', fontWeight: 600}} href="index.php">Home /</a> <span style={{color: '#ff8a00', fontSize: '12px', fontWeight: 600}}>Contact</span>
                            </p>

                        </div>
                    </div>
                </div>

                <div className="contact px-20 py-20">
                    <div className="contact-container grid lg:grid-cols-2 sm:grid-cols-1">
                        <div className="contact-left  grid lg:grid-cols-2 sm:grid-cols-1">
                            <div className="contact-text">
                                <img src="https://www.bdhti.com/images/logo.png" alt="" />
                                <p className='pt-10'>HTi IT Institute Training is a rapidly-growing strategic business solutions provider incorporated in Bangladesh with a dedicated offshore facility in Bangladesh. Established in 2017 as a company offering Software training services.</p>

                            </div>
                            <div className="contact-text">
                                <div>
                                    <span style={{
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        color: '#44425a'
                                    }} className="footer-title ">Contact Us </span>
                                    <br />
                                    <br />


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
                            </div>
                        </div>




                        <div className="contact-right">
                            2
                        </div>


                        {/* form section */}
                        <div className="contact-form py-20">
                            <form action="">
                                <div>
                                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                                        <div className="pb-4">
                                            <input id="name" 
                                            name="name" 
                                            type="text" placeholder="Name" className="contact-input" />
                                           
                                        </div>
                                        <div className="pb-4">
                                            <input id="number" 
                                            name="number" 
                                            type="text" placeholder="Mobile Number" className="contact-input" />
                                           
                                        </div>
                                        
                                    </div>
                                    <div className="pb-4">
                                            <input id="email" 
                                            name='email'
                                            type="email" placeholder="email" className="contact-input" required />
                                        </div>
                                        <div className="pb-4">
                                            <input id="subject" type="subject" placeholder="Subject" className="contact-input" required />
                                        </div>
                                        <div className="pb-6">
                                            
                                            <textarea id="bio" placeholder="Message" type="text" className="contact-textarea"></textarea>
                                        </div>


                                        <button className='contact-btn'>
                                            <span className=''>Send message </span><span className='contact-icons ' ><FaAngleRight className='contact-arrow '  /></span>
                                           
                                            
                                        </button> 
                                </div>
                            </form>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;