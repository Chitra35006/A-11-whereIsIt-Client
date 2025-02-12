import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import UseTheme from '../hooks/UseTheme';

const SignIn = () => {
   const { theme } = UseTheme();
   const { signInUser, setUser, signInWithGoogle } = useAuth();
   const [errorMessage, setErrorMessage] = useState(null);

   const location = useLocation();
   const navigate = useNavigate();

   const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then((result) => {
        console.log("User Info:", result.user);
      })
      .catch((err) => {
        console.error("Sign-in Error:", err.message);
      });
   }

   const handleSignIn = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      setErrorMessage('');

      signInUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        if (result.user?.uid) {
          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: `Welcome, ${user.email}!`,
            confirmButtonText: "OK",
          })
          .then(() => {
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
          });
        }
      })
      .catch((err) => {
        const errorCode = err.code;
        if (errorCode === "auth/invalid-credential") {
          setErrorMessage("The provided credentials are invalid. Please try again.");
        } else if (errorCode === "auth/wrong-password") {
          setErrorMessage("The password is incorrect. Please try again.");
        } else if (errorCode === "auth/user-not-found") {
          setErrorMessage("No user found with this email.");
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      });
   }

   return (
      <div className={`min-h-screen flex justify-center items-center ${theme === 'dark' ? 'dark' : ''}`}>
        <Helmet><title>Login Page</title></Helmet>
        <motion.div
  className={`card w-full max-w-lg shrink-0 shadow-2xl p-10 
    ${theme === 'dark' 
      ? 'bg-gradient-to-r from-slate-900 to-blue-900 text-white' 
      : 'bg-[linear-gradient(225deg,_#ffffff,_#d0e3f3,_#f8bfbb)]'
    }`}
  animate={{ borderColor: ["#7810c4", "#9bea71", "#f5c05e", "#e555d4", "#69dded"] }}
  transition={{ duration: 3, repeat: Infinity }}
  style={{ borderLeftWidth: '4px', borderRightWidth:'4px',borderStyle: 'solid' }}
>
          <h2 className={`font-semibold text-2xl text-center mt-5 ${theme=== "dark"? "text-slate-400":"text-red-800"}`}>Login Your Account</h2>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className={`input input-bordered ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className={`input input-bordered ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className={`btn border-red-800 border text-red-800 hover:text-white hover:bg-gradient-to-r from-red-500 via-red-600 to-red-900 ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`}>Login</button>
            </div>
            {errorMessage && <p className="p-2 mt-2 font-semibold bg-red-300 text-red-700">{errorMessage}</p>}
          </form>
          <button onClick={handleGoogleSignIn} type="button" className={`btn border-none text-indigo-300 bg-indigo-950 mb-4 hover:bg-indigo-200 hover:text-indigo-900 ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
            <FaGoogle /> Login With Google
          </button>
          <p className="text-center text-gray-600 font-semibold">
            Don't Have an account? <Link className={`${theme=== "dark"?"text-red-400":"text-red-800"}`} to="/signUp">Register</Link>
          </p>
        </motion.div>
      </div>
   );
};

export default SignIn;
