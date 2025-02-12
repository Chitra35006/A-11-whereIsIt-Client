import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/search.png'
import { motion, MotionConfig } from "motion/react"
import { easeOut } from 'motion';
import useAuth from '../../hooks/useAuth';
import ProfileDropDown from './ProfileDropDown';
import './NavBar.css'
import { FaSun, FaMoon } from "react-icons/fa";
import UseTheme from '../../hooks/UseTheme';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = UseTheme();

    const{user,logOut} = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    const links =<>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active-link ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-950'}`
            : `inactive-link ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-950'}`
        }
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active-link ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-950'}`
            : `inactive-link ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-950'}`
        }
        to="/allItems"
      >
        Lost & Found Item
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `active-link ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-950'}`
            : `inactive-link ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-950'}`
        }
        to="/aboutUs"
      >
        About Us
      </NavLink>
    </li>
  </>
    return (
        <div className={`navbar shadow-md fixed top-0 left-0 right-0 z-50 w-full px-4 ${theme === "dark"?"bg-gray-950" :  "bg-[#f7eff3]"}`}>
        {/* Navbar Start */}
        <div className="navbar-start">
          
  
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="btn btn-ghost">
              {isOpen ? (
                // Close Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              )}
            </button>
            
          </div>
          <a className="btn btn-ghost flex items-center text-2xl">
            <img className="w-10 hidden lg:block" src={logo} alt="Logo" />
            <motion.h1 
            animate={{ x: 50 }}
            transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
            className="ml-2 md:text-2xl text-lg text-red-800 hidden lg:block">Where
            <motion.span 
            animate={{ color: ['#be185d','#ecff33', '#16a34a', '#ff6133','#ea580c'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-fuchsia-500">IsIt</motion.span></motion.h1>
            
            </a>

        </div>
  
        {/* Navbar Center - Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 font-medium text-lg">{links}</ul>
        </div>
  
        {/* Navbar End */}
        <div className="navbar-end">
         { user && user?.email?(
           <>
           <ProfileDropDown user={user}></ProfileDropDown>
          
           <button onClick={logOut} className="btn ml-2 text-white hover:text-yellow-200  bg-gradient-to-r from-red-500 via-red-600 to-red-900 border-none">Logout</button>
           </>
         ):
         (
          
<Link to="/signIn">
  <button className={`btn border-red-800 border hover:border-none 
      text-red-800 hover:text-white 
      hover:bg-gradient-to-r from-red-500 via-red-600 to-red-900 
      ${theme === 'dark' ? 'bg-gray-800 text-white border-white' : 'bg-white text-red-800 border-red-800'}`}>
    Login
  </button>
</Link>
          
         )

         }
          <button onClick={toggleTheme} className="btn btn-ghost ml-2 hover:border-red-600  border-gray-600 rounded-lg">
    {theme === "dark" ? <FaSun className={` ${theme === "dark"? "text-gray-300": "text-black"}`} /> : <FaMoon/>}
  </button>
        </div>
  
        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full lg:hidden">
            <ul className="menu p-4 text-[10px]  text-red-800 font-bold bg-red-100   rounded-lg shadow-md">{links}</ul>
          </div>
        )}
      </div>
    );
};

export default NavBar;