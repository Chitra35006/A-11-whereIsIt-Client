import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
      <div className="card border-l-4 border-red-800 bg-[linear-gradient(25deg,#fdba74_5%,_white_30%,_white_70%,#f4f4f5_100%)]  w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="font-semibold text-2xl text-center text-red-800 mt-5">Login Your Account</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn  border-red-800 border text-red-800 hover:text-white hover:bg-gradient-to-r from-red-500 via-red-600 to-red-900">Login</button>
          </div>
        </form>
        <p className="text-center text-gray-600 font-semibold">Don't Have a account? <Link className="text-red-800" to="/signUp">Register</Link> </p>
      </div>
    </div>
    );
};

export default SignIn;