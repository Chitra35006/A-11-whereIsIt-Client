import React, { useEffect, useState } from 'react';
import AllLostFoundCard from './AllLostFoundCard';
import { Helmet } from 'react-helmet-async';

const LostFoundAllItem = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/addPost')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setFilteredPosts(data);  // Initialize filtered list
            });
    }, []);

    // Handle search input change
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(value) || 
            post.location.toLowerCase().includes(value)  // Filter by location
        );
        setFilteredPosts(filtered);
    };

    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>All Lost & Found Item</title>
            </Helmet>
            
            <h1 className='mt-6 md:w-3/12 md:my-2 text-center font-semibold text-lg bg-blue-950 text-white rounded-sm p-2'>
                All Lost & Found Items
            </h1>

            <div className='my-4 flex justify-center items-center'>
                <input 
                    type="text" 
                    placeholder="Search by title or location..." 
                    value={searchTerm} 
                    onChange={handleSearch}
                    className='p-2 w-6/12 mx-auto border rounded-md'
                />
            </div>

            <div className='grid bg-gray-50 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    filteredPosts.length > 0 ? (
                        filteredPosts.map(post => (
                            <AllLostFoundCard
                                key={post._id}
                                post1={post}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center">No items found</p>
                    )
                }
            </div>
        </div>
    );
};

export default LostFoundAllItem;
