import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ProfileDropDown = ({user}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // To toggle dropdown visibility

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="profile-dropdown">
      <div className="relative group">
  {/* Profile Image */}
  <img
    src={user?.photoURL || "default-avatar.png"}
    alt="Profile"
    className="w-14 h-14 border border-red-800 rounded-full object-cover"
    onClick={toggleDropdown}
  />
  
  {/* Tooltip that shows username on hover */}
  <div className="absolute bottom-2 left-2/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    {user?.displayName || "Guest"} {/* Fallback to "Guest" */}
  </div>
</div>

{isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-red-100 opacity-60 text-black shadow-lg rounded-lg w-48 p-2">
            <ul className='font-semibold space-y-2'>
              <li>
                <Link to="/addAItems" className=" font-bold text-red-800  px-4 py-2 hover:bg-red-700 hover:text-white md:text-base text-[12px] ">Add Lost & Found Item</Link>
              </li>
              <li>
                <Link to="/recoveredItems" className=" font-bold text-red-800 px-4 py-2 hover:bg-red-700 hover:text-white md:text-base text-[12px] ">All Recovered Item</Link>
              </li>
              <li>
                <Link to="/manageMyItems" className=" font-bold text-red-800 px-4 py-2 hover:bg-red-700 hover:text-white md:text-base text-[12px] ">Manage My Item</Link>
              </li>
            </ul>
          </div>
        )}
    </div>
    );
};

export default ProfileDropDown;