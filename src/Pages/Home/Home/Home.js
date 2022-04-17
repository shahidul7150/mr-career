import React from 'react';
import Clients from '../../Clients/Clients';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Clients></Clients>
        </div>
    );
};

export default Home;