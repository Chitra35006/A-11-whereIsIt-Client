import React from 'react';
import Banner from '../Banner';
import Unity from '../Unity';
import Description from '../Description';
import { Helmet } from 'react-helmet-async';
import LatestItem from '../Shared/LatestItem';
import TotalItem from '../Shared/TotalItem';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
           <Banner></Banner> 
           <LatestItem></LatestItem>
           <Unity></Unity>
           <TotalItem></TotalItem>
           <Description></Description>
        </div>
    );
};

export default Home;