import React from 'react';
import Header from '../components/header/header';
import SideMenu from '../components/SideMenu/sidemenu';
import Dashboard from './dashboard/dashboard';

const Home = () => {
    return (
        <div>
            <SideMenu />

            <Header />

            <Dashboard />

        </div>
    );
}

export default Home;