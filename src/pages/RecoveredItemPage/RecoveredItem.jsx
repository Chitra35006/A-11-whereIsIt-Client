import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Recovertable from './Recovertable';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import axios from 'axios';

const RecoveredItem = () => {
    const { user } = useAuth();
    const [rItems, setRitems] = useState([]);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // if (user?.email) {
        //     fetch(`https://a-11-where-is-it-server.vercel.app/recoverItem?email=${user.email}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             // Ensure data is always an array
        //             setRitems(Array.isArray(data) ? data : []);
        //         })
        //         .catch(err => {
        //             console.error('Error fetching recovered items:', err);
        //             setRitems([]);  // Fallback to empty array on error
        //         });
        // }

        axiosSecure.get(`/recoverItem?email=${user.email}`)
        .then(res => setRitems(res.data))
        
    }, [user?.email]);

    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>Recovered Items</title>
            </Helmet>
            
            <h1 className='mt-6 md:w-3/12 md:my-2 text-center font-semibold text-lg bg-blue-950 text-white rounded-sm p-2'>
                All Recovered Item List
            </h1>
            
            <div>
                <table className="table">
                    <thead>
                        <tr className="text-orange-500">
                            <th></th>
                            <th>Title</th>
                            <th>Recovered Location</th>
                            <th>HandOver Date</th>
                            <th>Receiver Info</th>
                            <th>Your Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rItems.length > 0 ? (
                            rItems.map((rItem, index) => (
                                <Recovertable
                                    key={rItem._id}
                                    idx={index}
                                    rItem={rItem}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center p-4">
                                    No Recovered Item Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecoveredItem;
