import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Recovertable from './Recovertable';
import useAuth from '../../hooks/useAuth';

const RecoveredItem = () => {
    const {user} = useAuth();
    const[rItems,setRitems]= useState([])
        useEffect(()=>{
            fetch(`http://localhost:5000/recoverItem?email=${user.email}`)
        .then(res => res.json())
        .then(data => setRitems(data))
        })
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet><title>Recovered Items</title></Helmet>
            <h1 className='mt-6 md:w-3/12 md:my-2 text-center font-semibold text-lg bg-blue-950 text-white rounded-sm p-2'>All Recovered Item List</h1>
            <div>
            <table className="table">
          {/* head */}
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
            {
                rItems.length === 0 ? (<p>
                    No Recover Item Found
                </p>):(
                    rItems.map((rItem,index)=><Recovertable
                    key={rItem._id}
                    idx={index}
                    rItem={rItem}
                    ></Recovertable>)
                )
            }
          </tbody>
          </table>
            </div>
            
        </div>
    );
};

export default RecoveredItem;