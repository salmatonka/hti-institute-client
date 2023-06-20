import React from 'react';
import './About.css';
import { ImGooglePlus } from 'react-icons/im';
import { FaPinterest } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const About = () => {
    return (
        <div>
            <div className="about-container ">
                <div className="hero about-hero" >
                    <img className='' src="https://www.bdhti.com/images/about.jpg" alt="" />
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">About us</h1>
                            <p className="mb-5">Home / <span>About us</span>
                            </p>

                        </div>
                    </div>
                </div>
                {/* about-platforms */}
                <div className="about-platforms grid lg:grid-cols-2 sm:grid-cols-2 gap-8 px-24 py-24">
                    <div className="about-title ">
                        <h3>Our Platform's main goal</h3>
                        <div className="about-text">
                            <p className='pb-4 '>
                                HTi Computer Education has started her journey on December 7, 2017. In this journey, we have achieved many a handful of successes and well-wishers along the way.“HTi Computer Education’s” mission is to find a solution for the unemployment in our country through practical computer training, so as to play a significant role to empower women and youths in the society.Giving every men and women the practical IT education, they need for improvement in their daily life.</p>

                            <p><strong style={{ color: 'black' }}>Prof. Nazir Ahammed Chowdhury Ronju</strong>
                                <br />
                                <strong style={{ color: 'black' }}>Senior Consultant</strong> (HTi Computer Education)
                                <br />
                                Former Director (incharge) NICVD Dhaka.
                                <br />
                                Prof of Cardiology (Rtd.) NICVD Dhaka,
                                <br />
                                Life Member Bangladesh Cardiac Society
                                <br />
                                Bangladesh Society of Interventional Cardiology
                                <br />
                                Registered Graduate Dhaka University
                                <br />
                                FREEDOM FIGHTER
                            </p>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src="https://www.bdhti.com/images/consultant.jpg" alt="" />
                    </div>
                </div>

                {/* Our Vision */}

                <div className="about-platforms grid lg:grid-cols-2 sm:grid-cols-2 gap-8 px-24 py-18">
                    <div className="about-image">
                        <img src="https://www.bdhti.com/images/bteb.jpg" alt="" />
                    </div>
                    <div className="about-title ">
                        <h3 className='pt-28'> Our Vision</h3>
                        <p className='pt-16'>“HTi Computer Education’s” vision is to play a key role to digitalize the country through computer training. Generating more working hands with respect to the market demand. Last of all ensuring every men and women that we come across become computer efficient.</p>
                    </div>
                </div>

                {/* Meet our Team */}

                <div className='px-24 my-20'>
                    <h1 className="mb-20 text-5xl font-bold text-center">Meet our Team</h1>
                    <div className="meet-team grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 ">
                        <div className="meet-grid">
                            <div className=" w-54 ">
                                <figure><img src="https://www.bdhti.com/hadmin/upload/chairman-sir.jpg" alt="Shoes" /></figure>
                                <div className="meet-body">
                                    <h2 className="meet-title"><a href="hadmin/upload/chairman-sir.jpg" title='Tahsin Ahmed Chowdhury'>Tahsin Ahmed Chowdhury</a>
                                    </h2>
                                    <p>
                                        Founder & Chairperson</p>
                                    
                                </div>
                                <div className='meet-social mt-6'>
                                <ul className='meet-icons flex pl-24'>
                                            <li><a href="#"><ImGooglePlus /></a></li>
                                            <li ><a href="#"><FaPinterest className='mx-8' /></a></li>
                                            <li><a href="#"><FaFacebookF className='mr-8' /></a></li>
                                            <li><a href="#"><FaTwitter  /></a></li>
                                        </ul>
                                </div>
                            </div>

                        </div>
                        <div className="meet-grid">
                            <div className=" w-54 ">
                                <figure><img src="https://www.bdhti.com/hadmin/upload/zia-sir.jpg" alt="Shoes" /></figure>
                                <div className="meet-body">
                                    <h2 className="meet-title"><a href="hadmin/upload/chairman-sir.jpg" title='Tahsin Ahmed Chowdhury'>Md. Zia Uddin
</a>
                                    </h2>
                                    <p>
                                  
HR & Accounts</p>
                                    
                                </div>
                                <div className='meet-social mt-6'>
                                <ul className='meet-icons flex pl-24'>
                                            <li><a href="#"><ImGooglePlus /></a></li>
                                            <li ><a href="#"><FaPinterest className='mx-8' /></a></li>
                                            <li><a href="#"><FaFacebookF className='mr-8' /></a></li>
                                            <li><a href="#"><FaTwitter  /></a></li>
                                        </ul>
                                </div>
                            </div>

                        </div>
                        <div className="meet-grid">
                            <div className=" w-54 ">
                                <figure><img src="https://www.bdhti.com/hadmin/upload/nayeem.jpg" alt="Shoes" /></figure>
                                <div className="meet-body">
                                    <h2 className="meet-title"><a href="hadmin/upload/chairman-sir.jpg" title='Tahsin Ahmed Chowdhury'>Md.Nayeem Hossain</a>
                                    </h2>
                                    <p>Trainer</p>
                                    
                                </div>
                                <div className='meet-social mt-6'>
                                <ul className='meet-icons flex pl-24'>
                                            <li><a href="#"><ImGooglePlus /></a></li>
                                            <li ><a href="#"><FaPinterest className='mx-8' /></a></li>
                                            <li><a href="#"><FaFacebookF className='mr-8' /></a></li>
                                            <li><a href="#"><FaTwitter  /></a></li>
                                        </ul>
                                </div>
                            </div>

                        </div>
                        <div className="meet-grid">
                            <div className=" w-54 ">
                                <figure><img src="https://www.bdhti.com/hadmin/upload/mithu.jpg" alt="Shoes" /></figure>
                                <div className="meet-body">
                                    <h2 className="meet-title"><a href="hadmin/upload/chairman-sir.jpg" title='Tahsin Ahmed Chowdhury'>Mithun Hasan</a>
                                    </h2>
                                    <p>Office Assistant</p>
                                    
                                </div>
                                <div className='meet-social mt-6'>
                                <ul className='meet-icons flex pl-24'>
                                            <li><a href="#"><ImGooglePlus /></a></li>
                                            <li ><a href="#"><FaPinterest className='mx-8' /></a></li>
                                            <li><a href="#"><FaFacebookF className='mr-8' /></a></li>
                                            <li><a href="#"><FaTwitter  /></a></li>
                                        </ul>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>




            </div>
        </div>
    );
};

export default About;