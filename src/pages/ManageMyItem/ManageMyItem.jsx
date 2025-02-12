import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import UseTheme from '../../hooks/UseTheme';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Loading'; // Import Loading component

const ManageMyItem = () => {
    const { user } = useAuth();
    const { theme } = UseTheme();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPost = () => {
        if (user?.email) {
            fetch(`http://localhost:5000/myPosts?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setPosts(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching posts:', err);
                    setLoading(false);
                });
        }
    };

    useEffect(() => {
        fetchPost();
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myPosts/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Post has been deleted.",
                                icon: "success",
                            });
                            fetchPost();
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to delete the post.",
                                icon: "error",
                            });
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting post:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong.",
                            icon: "error",
                        });
                    });
            }
        });
    };

    return (
        <div className={`mx-auto w-11/12 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <Helmet>
                <title>My Added Items</title>
            </Helmet>

            <h1 className={`mt-6 md:w-3/12 md:my-2 text-center font-semibold text-lg rounded-sm p-2 
                ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-950 text-white'}`}>
                My Added Posts <span className="text-orange-400">{posts.length}</span>
            </h1>

            {loading ? (
                <Loading /> // Show loading spinner while fetching data
            ) : (
                <div className="overflow-x-auto">
                    <table className={`table w-full ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
                        <thead>
                            <tr className={`${theme === 'dark' ? 'bg-gray-700 text-orange-400' : 'text-orange-500'}`}>
                                <th></th>
                                <th>Title</th>
                                <th>Post Type</th>
                                <th>Uploaded Date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center p-4">No Post Found</td>
                                </tr>
                            ) : (
                                posts.map((post, index) => {
                                    const postColor = post.post === "Lost" ? "text-red-700" : "text-green-700";

                                    return (
                                        <tr key={post._id} className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                            <td className={`${theme === 'dark' ? 'text-white' : 'text-blue-950'} font-bold`}>
                                                {index + 1}
                                            </td>
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
                                            <td className={`font-bold ${postColor}`}>{post.post}</td>
                                            <td>{post.date}</td>
                                            <td>
                                                <div className="flex gap-4">
                                                    <button className={`px-4 py-2 rounded font-bold 
                                                        ${theme === 'dark' ? 'bg-orange-500 text-white' : 'bg-orange-300 text-blue-950'}`}>
                                                        <Link to={`/posting/${post._id}`}>UPDATE</Link>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(post._id)}
                                                        className={`font-bold px-4 py-2 rounded bg-gradient-to-r 
                                                            ${theme === 'dark' ? 'from-red-600 to-red-800 text-white hover:text-red-300' : 'from-red-300 to-rose-400 text-red-900 hover:text-rose-500'}`}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageMyItem;