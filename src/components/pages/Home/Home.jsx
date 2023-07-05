import React from 'react';
import ChooseCourse from '../ChooseCourse/ChooseCourse';
import ChooseEventsNews from '../ChooseEventsNews/ChooseEventsNews';
import VideoSection from '../VideoSection/VideoSection';
import Milestones from '../Milestones/Milestones';

import HomeBanner from '../HomeBanner/HomeBanner';
import CorporatePartnerCards from '../CorporatePartner/CorporatePartnerCards';


const Home = () => {
    return (
        <div>
            <HomeBanner />
            <ChooseEventsNews />
           <ChooseCourse />
           <Milestones />
           {/* <VideoSection /> */}
           <CorporatePartnerCards />
        </div>
    );
};

export default Home;