import React from 'react';
import ChooseCourse from '../ChooseCourse/ChooseCourse';
import ChooseEventsNews from '../ChooseEventsNews/ChooseEventsNews';
import VideoSection from '../VideoSection/VideoSection';
import Milestones from '../Milestones/Milestones';
import CorporatePartner from '../CorporatePartner/CorporatePartner';
import HomeBanner from '../HomeBanner/HomeBanner';


const Home = () => {
    return (
        <div>
            <HomeBanner />
            <ChooseEventsNews />
           {/* <ChooseCourse /> */}
           <Milestones />
           {/* <VideoSection /> */}
           <CorporatePartner />
        </div>
    );
};

export default Home;