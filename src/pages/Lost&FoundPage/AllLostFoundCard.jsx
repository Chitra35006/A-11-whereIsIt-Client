import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import UseTheme from '../../hooks/UseTheme';

const AllLostFoundCard = ({post1}) => {
  const {theme} = UseTheme();
    const {post,
       _id,
        photo,
        title,
        location,
        name,
        email,
        category,
        description,
        date} = post1;
        const buttonColor = post1.post === "Lost" ? "text-red-700 " : "text-green-700";
    return (
        <div className={`w-11/12 mx-auto max-w-sm mt-2 
 rounded-lg overflow-hidden border shadow-md flex flex-col ${theme === "dark"?"bg-slate-950 border-slate-700":"bg-indigo-50 border-indigo-200"}`}>
      <div className="flex items-center p-4 border-b">
        <img
          src={photo}
          alt="Post"
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-950"
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
      <div className="p-4 border-t flex justify-end">
        <button
          className="md:text-base text-[10px] flex items-center space-x-1 hover:text-indigo-950 text-red-600 font-medium"
        > 
          <AiOutlineEye size={18} />
          <Link to={`/allPostViewDetails/${_id}`}>
          <span>See More</span></Link>
        </button>
      </div>
    </div>
    );
};

export default AllLostFoundCard;