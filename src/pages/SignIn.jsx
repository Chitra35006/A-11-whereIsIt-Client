import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const SignIn = () => {
    const{signInUser,setUser,signInWithGoogle} = useAuth();
    const [errorMessage, setErrorMessage] = useState(null);

    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();

    const handleGoogleSignIn =()=>{
          
      signInWithGoogle()
      .then((result) => {
        console.log("User Info:", result.user);
        // navigate(location?.state?.from?.pathname || "/"); 
      })
      .catch((err) => {
        console.error("Sign-in Error:", err.message);
      });
    }

    const handleSignIn = e =>{
      e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user ={email,password};
        console.log(user)
        setErrorMessage('');

      //signInUser
      signInUser(email,password)
      .then(result =>{
        const user = result.user;
        setUser(user);
        if(result.user?.uid){
          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: `Welcome, ${user.email}!`,
            confirmButtonText: "OK",
          })
          .then(()=>{
            const from = location.state?.from?.pathname || "/";
              navigate(from, { replace: true });
          })
        }

        //Pop Up
        

      })
      .catch((err)=>{
        const errorCode = err.code;
        // const errorMessage = err.message;
        console.log('Error',err);
        if (errorCode === "auth/invalid-credential") {
          setErrorMessage("The provided credentials are invalid. Please try again.");
        }
        else if(errorCode ==="auth/wrong-password"){
          setErrorMessage("The password is incorrect. Please try again.");
        }
        else if(errorCode ==="auth/user-not-found"){
          setErrorMessage("The password is incorrect. Please try again");
        }
        else {
          setErrorMessage("An error occurred. Please try again.");
        }
      })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
          <Helmet><title>Login Page</title></Helmet>
      <div className="card border-l-4 border-red-800 bg-[linear-gradient(25deg,#06105A_1%,_white_30%,_white_70%,#f4f4f5_100%)]  w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="font-semibold text-2xl text-center text-red-800 mt-5">Login Your Account</h2>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn  border-red-800 border text-red-800 hover:text-white hover:bg-gradient-to-r from-red-500 via-red-600 to-red-900">Login</button>
          </div>
          {
              errorMessage && <p className="p-2 mt-2 font-semibold bg-red-300 text-red-700">{errorMessage}</p>
          }
        </form>
        <button onClick={handleGoogleSignIn} type="button" className="btn border-none text-indigo-300 bg-indigo-950 mb-4 hover:bg-indigo-200 hover:text-indigo-900"><FaGoogle></FaGoogle> Login With Google</button>
        <p className="text-center text-gray-600 font-semibold">Don't Have a account? <Link className="text-red-800" to="/signUp">Register</Link> </p>
      </div>
    </div>
    );
};

export default SignIn;