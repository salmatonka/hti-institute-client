import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shares/Navbar/Navbar';
import Footer from '../components/shares/Footer/Footer';
import TopBar from '../components/shares/TopBar/TopBar';

const Main = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;