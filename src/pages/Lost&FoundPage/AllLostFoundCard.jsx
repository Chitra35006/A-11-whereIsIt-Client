import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import UseTheme from '../../hooks/UseTheme';

const AllLostFoundCard = ({ post1 }) => {
  const { theme } = UseTheme();
  const { post, _id, photo, title, location, name, description } = post1;

  // Set the button color based on post type
  const buttonColor = post === "Lost" ? "text-red-700" : "text-green-700";

  // Set the border color based on the post type
  const borderClass = post === "Lost" ? "border-red-800 border-l-4" : "border-indigo-900 border-l-4";

  // Truncate description to 45 characters
  const truncatedDescription = description.length > 50 ? description.slice(0, 50) + '...' : description;

  return (
    <div
      className={`w-11/12 mx-auto max-w-sm mt-2 rounded-lg overflow-hidden shadow-md flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg ${theme === "dark" ? "bg-slate-950" : "bg-indigo-50"} ${borderClass}`}
    >
      <div className="flex items-center p-4 border-b">
        <img
          src={photo}
          alt="Post"
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-950 transition-transform duration-300 hover:scale-110"
        />
        <div className="ml-4">
          <h2 className="md:text-lg text-base font-semibold">{title}</h2>
          <p className={`text-sm font-bold text-gray-500 ${buttonColor}`}>{post}</p>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BsPersonCircle className="text-gray-600" size={18} />
          <p className="md:text-sm text-[10px]">{name}</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-red-500" size={16} />
          <p className="md:text-sm text-[10px]">{location}</p>
        </div>
      </div>

      {/* Add truncated description here */}
      <div className="p-4">
        <p className={`text-xs ${theme === "dark"?"text-gray-300":"text-gray-700"}`}>{truncatedDescription}</p>
      </div>

      <div className={`p-4 border-t flex justify-end rounded-br-[20px] ${theme === "dark" ? "bg-black" : "bg-indigo-950 "}`}>
        <button
          className="md:text-base text-[10px] flex items-center space-x-1 hover:text-white text-red-300 font-medium transition-colors duration-300 hover:scale-105"
        >
          <AiOutlineEye size={18} />
          <Link to={`/allPostViewDetails/${_id}`}>
            <span>See More</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AllLostFoundCard;
