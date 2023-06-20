import React from 'react';
import './ChooseEventsNews.css';
const ChooseEventsNews = () => {
    
    return (
        <div  style={{ width: '100%', paddingTop: '89px', paddingBottom: '100px' ,paddingLeft:'20px'}}>
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:px-12  sm:pl-4 md:pl-10">
                <div className='sm:ml-4'>
                    <h2 style={{ fontSize: '30px', fontWeight: '600', color: '#44425A' }}>Why Choose Us?</h2>

                    
     
     <div className="dark:text-gray-100">
	<div className="flex flex-col justify-center  md:pt-14">
		<div className="space-y-4">
			<details   style={{ backgroundColor: '#f2f1f8',
    color: '#44425a'}} className="w-full" open="">
				<summary className=" px-4 py-3 focus:outline-none focus-visible:ring-violet-400">Advantage ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> <li>After successfully completing the course, you will get the opportunity to do internship with one of our affiliated company, will depend on your grades with us.</li>
    <li>There is always a 50% or 30% discount offer running depending on the month throughout the year, in all professional courses.</li>
    <li>You will have the opportunity to get Make-up class during your course term if you miss any class, but have to submit an application with valid reasoning.</li>
                 </p>
			</details>
			<details  style={{ backgroundColor: '#f2f1f8',
    color: '#44425a'}} className="w-full " open="">
				<summary className="px-4 py-3 focus:outline-none focus-visible:ring-violet-400">Trainers ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><li>
All our resident trainers are very sincere about their trainees and conducts the classes accordingly.
</li>
    <li>All of our trainers are certified, from reputable IT institutes.
.</li>
    <li>Sometimes we do workshops for a day or two for the advancement of our students and usually in these workshops we invite faculty members from different reputable universities or institutes</li>
                </p>
			</details>
			<details  style={{ backgroundColor: '#f2f1f8',
    color: '#44425a'}} className="w-full " open="">
				<summary className="px-4 py-3 focus:outline-none focus-visible:ring-violet-400">Extra Care ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><li>
You will get 24/7 training and career support by our professional trainer by joining our Alumna Facebook group during off hours and by phone during office hours.
</li>
    <li>We provide all kinds of guideline and consultancy, related to your course or your career, during our office hour.</li> 
               
</p>
			</details>
			<details  style={{ backgroundColor: '#f2f1f8',
    color: '#44425a'}} className="w-full ">
				<summary className="px-4 py-3 focus:outline-none focus-visible:ring-violet-400">Low Coasting ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><li>
Although our training courses cost lower that the other standard institutes, our students stay satisfied when they see our curriculum and the syllabus for their related course, as we follow the BTEB’s (Bangladesh Technical Education Board)’s syllabus that they provided on their webpage. Our trainers try to follow it from A to Z.</li></p>
			</details>
		</div>
	</div>
</div>


                       

                </div>

                {/* Upcoming Events */}

                <div className='sm:pl-6'>
                    <h2 style={{ fontSize: '30px', fontWeight: '600', color: '#44425A' }}>Upcoming Events</h2>

                    <div
                        style={{ paddingTop: '58px' }}>
                        <div style={{ marginBottom: '14px' }} >
                            <div className='mb-5'>
                                <div className='event-container'>
                                    <div className="event-date">

                                        <div className="event-day">26</div>
                                        <div className="event-month">January</div>
                                    </div>
                                    <div className="event-body">
                                        <div className="event-title"><a href="#">Seminar</a></div>
                                        <div className="event-subTitle">Location:E-haque Coaching Center</div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-5'>
                                <div className='event-container'>
                                    <div className="event-date">

                                        <div className="event-day">26</div>
                                        <div className="event-month">January</div>
                                    </div>
                                    <div className="event-bod">
                                        <div className="event-title"><a href="#">Seminar</a></div>
                                        <div className="event-subTitle">Location:E-haque Coaching Center</div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className='event-container'>
                                    <div className="event-date">

                                        <div className="event-day">26</div>
                                        <div className="event-month">January</div>
                                    </div>
                                    <div className="event-bod">
                                        <div className="event-title"><a href="#">Seminar</a></div>
                                        <div className="event-subTitle">Location:E-haque Coaching Center</div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                {/* Latest News */}


                <div className='sm:pl-6'>
                    <h2 style={{ fontSize: '30px', fontWeight: '600', color: '#44425A' }}>Latest News</h2>

                    <div
                        style={{ paddingTop: '58px' }}>
                        <div style={{ marginBottom: '14px' }} >
                            <div className='mb-16'>
                                <div className='news-container flex'>
                                    <div className="news-date">

                                        <div className="news-day">HTi</div>

                                    </div>
                                    <div className="news-post-body">
                                        <div className="news-post-date">2020-02-10</div>
                                        <div className="news-post-title"><a href="registration.php">
                                            Women Scholarship</a></div>
                                        <div className="news-post-subTitle">
                                            Package of 3 Courses (Only for Women)</div>
                                    </div>
                                </div>
                            </div>

                            <div className=''>
                                <div className='news-container flex'>
                                    <div className="news-date">

                                        <div className="news-day">HTi</div>

                                    </div>
                                    <div className="news-post-body">
                                        <div className="news-post-date">2020-12-11</div>
                                        <div className="news-post-title"><a href="registration.php">
                                            Combined Course
                                        </a></div>
                                        <div className="news-post-subTitle">


                                            Package Of 3 Courses</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseEventsNews;