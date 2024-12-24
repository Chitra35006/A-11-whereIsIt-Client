import React from 'react';
import NavBar from '../pages/Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import { HelmetProvider } from 'react-helmet-async';

const MainLayout = () => {
    return (
       <HelmetProvider>
         <div className='font-inter flex flex-col min-h-screen overflow-hidden'>
         <header className="">
         <NavBar></NavBar>
        </header>

        <main className="flex-grow p-6 mt-7 mb-7 sm:mt-16 sm:mb-16 md:mt-20 md:mb-20 lg:mt-24 lg:mb-24 overflow-auto">
        <Outlet></Outlet>
        </main>

        <footer className="bg-gray-900 p-4 w-full mt-auto text-center text-white">
        <Footer></Footer>
        </footer>

        </div>
       </HelmetProvider>
    );
};

export default MainLayout;