import React from 'react';
import Banner from '../Banner';
import Unity from '../Unity';
import Description from '../Description';
import { Helmet } from 'react-helmet-async';
import LatestItem from '../Shared/LatestItem';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
           <Banner></Banner> 
           <LatestItem></LatestItem>
           <Unity></Unity>
           <Description></Description>
        </div>
    );
};

export default Home;