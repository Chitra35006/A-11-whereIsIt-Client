import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const ManageMyItem = () => {
    const{user} = useAuth();
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myPosts?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[user.email])

    
    return (
        <div className='mx-auto w-11/12'>
            <Helmet><title>My Added Items</title></Helmet>
            <h1 className='mt-6 md:w-3/12 md:my-2 text-center font-semibold text-lg bg-blue-950 text-white rounded-sm p-2'>My Added Posts <span className='text-orange-400'>{posts.length}</span> </h1>
            <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-orange-500'>
                            <th>
                            </th>
                            <th>Title</th>
                            <th>Post Type</th>
                            <th>Uploaded Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
  posts.length === 0 ? (
    <p>No Post Found</p>
  ) : (
    posts.map((post, index) => {
      const postColor = post.post === "Lost" ? "text-red-700" : "text-green-700";

      return (
        <tr key={post._id}>
          <td className='text-blue-950 font-bold'>{index + 1}</td>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img src={post.photo} alt="Avatar" />
                </div>
              </div>
              <div>
                <div className="font-bold">{post.title}</div>
                <div className="text-sm opacity-50">{post.location}</div>
              </div>
            </div>
          </td>
          {/* Apply conditional color */}
          <td className={`font-bold ${postColor}`}>
            {post.post}
          </td>
          <td>{post.date}</td>
          <td>
            <div className="flex gap-4">
              <button className="bg-orange-300 text-blue-950 font-bold px-4 py-2 rounded">
                <Link to={`/update/${post._id}`}>UPDATE</Link>
              </button>
              <button className="font-bold bg-gradient-to-r from-red-300 to-rose-400 text-red-900 hover:text-rose-500 px-4 py-2 rounded">
                X
              </button>
            </div>
          </td>
        </tr>
      );
    })
  )
}

                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageMyItem;