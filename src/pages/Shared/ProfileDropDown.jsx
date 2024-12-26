import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProfileDropDown = ({user}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // To toggle dropdown visibility

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="profile-dropdown">
      <div className="relative group">
  {/* Profile Image */}
 
  <motion.img
      src={user?.photoURL || "default-avatar.png"}
      alt="Profile"
      className="w-14 h-14 border-2 object-cover"
      style={{
        borderRadius: '50%', // Circular border radius
      }}
      animate={{
        rotate: [0, 15, -15, 0], // Rotate the image back and forth
        opacity: [1, 0.7, 1], // Fade in and out effect
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut', // Smooth easing for the animation
      }}
      onClick={toggleDropdown}
    />
  {/* Tooltip that shows username on hover */}
  <div className="absolute bottom-2 right-3/4 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    {user?.displayName || "Guest"} {/* Fallback to "Guest" */}
  </div>
</div>

{isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-indigo-200 opacity-60 text-black shadow-lg rounded-lg w-48 p-2">
          <ul className='font-semibold space-y-3 flex flex-col justify-center items-center'>
            <li>
              <Link to="/addAItems" className="font-bold text-indigo-900 px-4 py-2 hover:bg-indigo-900 hover:text-white md:text-base text-[12px]">Add Lost & Found Item</Link>
            </li>
            <li>
              <Link to="/recoveredItems" className="font-bold text-indigo-900 px-4 py-2 hover:bg-indigo-900 hover:text-white md:text-base text-[12px]">All Recovered Item</Link>
            </li>
            <li>
              <Link to="/manageMyItems" className="font-bold text-indigo-900 px-4 py-2 hover:bg-indigo-900 hover:text-white md:text-base text-[12px]">Manage My Item</Link>
            </li>
          </ul>
        </div>
        
        )}
    </div>
    );
};

export default ProfileDropDown;