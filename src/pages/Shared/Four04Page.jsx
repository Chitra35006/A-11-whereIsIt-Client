import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const Four04Page = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-5xl font-bold text-center my-auto mx-auto text-green-500'>404!!!</h2>
            <p className='text-red-500'>This Page is not available</p>
            <div>
            <Link to='/' className="btn bg-orange-400 hover:bg-blue-600 hover:text-white font-bold text-blue-900 border-none"> <span><IoMdArrowRoundBack /></span> Home</Link>
            </div>
        </div>
    );
};

export default Four04Page;