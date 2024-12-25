import React, { useEffect, useState } from 'react';
import AllLostFoundCard from './AllLostFoundCard';
import { Helmet } from 'react-helmet-async';

const LostFoundAllItem = () => {

    const[posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addPost')
        .then(res => res.json())
        .then(data => setPosts(data))
    })
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet><title>All Lost & Found Item</title></Helmet>
            <h1 className='mt-6 md:w-3/12 md:my-2 text-center font-semibold text-lg bg-blue-950 text-white rounded-sm p-2'>All Lost & Found Items</h1>
            <div className='grid bg-gray-50 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    posts.map(post =><AllLostFoundCard
                    key={post._id}
                    post1={post}
                    ></AllLostFoundCard>)
                }
            </div>
        </div>
    );
};

export default LostFoundAllItem;