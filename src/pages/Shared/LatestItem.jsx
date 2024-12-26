import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

const LatestItem = () => {
  const singlePostData = useLoaderData(); // Assuming this is an array of posts

  const limitText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="w-11/12 my-10 mx-auto">
      <h1 className="border border-gray-300 md:text-2xl text-xl text-center bg-gray-200 p-2 text-red-800  font-medium md:w-3/12 w-6/12 mb-6">
        Latest Post
      </h1>
      <div className="grid bg-gray-50 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {singlePostData.map((post) => (
          <div
            key={post._id}
            className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white"
          >
            {/* Title Section */}
            <div className="p-4 border-b">
              <h2 className="md:text-lg text-[13px] font-semibold bg-gray-200 p-2 text-indigo-950 truncate">
                {post.title}
              </h2>
            </div>
            {/* Image Section */}
            <div className="relative w-full border border-gray-300 rounded-md p-4 h-48">
              <img
                src={post.photo}
                alt={post.title}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            {/* Info Section */}
            <div className="p-4 flex flex-col space-y-2">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1 text-red-600" />
                  <span className="text-gray-600 font-medium">{post.date}</span>
                </div>
                <div className="flex items-center p-2 rounded-xl border border-blue-500  bg-blue-50">
                  <FaClipboardList className="mr-1 text-blue-600" />
                  <span className="text-gray-600 font-medium">{post.post}</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                {limitText(post.description, 100)}
              </p>
            </div>
            {/* Button Section */}
            <div className="p-4 flex justify-end items-center">
              <Link
                className="focus:outline-none hover:outline-none focus:ring-0"
                to={`/allPostViewDetails/${post._id}`}
                tabIndex={-1} // Prevents focus on Link
              >
                <button
                  type="button"
                  className="w-full px-3 focus:outline-none focus:ring-0 hover:outline-none md:text-lg text-base bg-indigo-950 hover:bg-gradient-to-r from-orange-500 via-red-600 to-red-900 text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2"
                >
                  <AiOutlineEye size={18} />
                  <span>View Details</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn text-xl mx-auto w-4/12 md:w-3/12 text-blue-950 font-semibold">
          <Link to="/allItems">See All</Link>
        </button>
      </div>
    </div>
  );
};

export default LatestItem;
