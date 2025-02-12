import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Recovertable from './Recovertable';
import useAuth from '../../hooks/useAuth';
import UseTheme from '../../hooks/UseTheme';

const RecoveredItem = () => {
    const { user } = useAuth();
    const { theme } = UseTheme();
    const [rItems, setRitems] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/recoverItem?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setRitems(Array.isArray(data) ? data : []);
                })
                .catch(err => {
                    console.error('Error fetching recovered items:', err);
                    setRitems([]);
                });
        }
    }, [user?.email]);

    return (
        <div className={`w-11/12 mx-auto min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <Helmet>
                <title>Recovered Items</title>
            </Helmet>

            <h1 className={`mt-6 md:w-3/12 md:my-2 text-center font-semibold text-lg rounded-sm p-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-950 text-white'}`}>
                All Recovered Item List
            </h1>

            <div className="overflow-x-auto">
                <table className={`table w-full ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
                    <thead>
                        <tr className={`${theme === 'dark' ? 'bg-gray-700 text-orange-400' : 'text-orange-500'}`}>
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
