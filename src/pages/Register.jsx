import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import UseTheme from '../hooks/UseTheme';

const Register = () => {
   const { theme } = UseTheme();
   const [errorMessage, setErrorMessage] = useState(null);
   const navigate = useNavigate();
   const { createUser, setUser, updateUserProfile } = useAuth();

   const handleSignUp = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photoUrl = form.photoUrl.value;
      const password = form.password.value;
      const user = { name, email, photoUrl, password };
      const user2 = { name, email };
      console.log(user);

      // Reset error message
      setErrorMessage('');

      // Password validation
      if (password.length < 6) {
         setErrorMessage('Password must be at least 6 characters long');
         return;
      }

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
      if (!passwordRegex.test(password)) {
         setErrorMessage('Password must include at least one uppercase and one lowercase letter');
         return;
      }

      // Create User
      createUser(email, password)
         .then((result) => {
            console.log('User created:', result.user);
            form.reset(); // Reset form fields
            setUser(user); // Set user data to the state
            console.log(user);

            if (result.user?.uid) {
               Swal.fire({
                  icon: 'success',
                  title: 'Registration Successful!',
                  text: `Welcome, ${user.email}!`,
                  confirmButtonText: 'OK',
               });
            }

            // Update Profile
            updateUserProfile({
               displayName: name,
               photoURL: photoUrl,
            })
               .then(() => {
                  navigate('/');
               })
               .catch((err) => {
                  console.log('ERROR', err);
               });
         })
         .catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode, errorMessage);

            if (errorCode === 'auth/email-already-in-use') {
               setErrorMessage('This email address is already in use. Please try logging in or use a different email for sign up.');
            } else {
               setErrorMessage('An error occurred. Please try again.');
            }
         });
   };

   return (
      <div className={` p-4 min-h-screen flex justify-center items-center ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white'}`}>
         <Helmet>
            <title>Sign Up</title>
         </Helmet>
         <div
            className={`card border-l-4 border-red-800 w-full max-w-lg shrink-0 shadow-2xl p-10 ${theme === 'dark' ? 'bg-gradient-to-r from-slate-900 to-blue-900' : 'bg-[linear-gradient(25deg,#06105A_1%,_white_30%,_white_70%,#f4f4f5_100%)]'}`}
         >
            <h2 className="font-semibold text-2xl text-center mt-5">
               Register Your Account
            </h2>
            <form onSubmit={handleSignUp} className="card-body">
               {/* Name */}
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Name</span>
                  </label>
                  <input
                     type="text"
                     name="name"
                     placeholder="Enter Your Name"
                     className={`input input-bordered ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`}
                     required
                  />
               </div>

               {/* Photo Url */}
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Photo URL</span>
                  </label>
                  <input
                     type="text"
                     name="photoUrl"
                     placeholder="Enter Your Photo URL"
                     className={`input input-bordered ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`}
                     required
                  />
               </div>

               {/* Email */}
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

               {/* Password */}
               <div className="form-control relative">
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
                  {errorMessage && <p className="p-2 mt-2 font-semibold bg-red-300 text-red-700">{errorMessage}</p>}
               </div>

               <div className="form-control mt-6">
                  <button
                     className={`btn border-red-800 border text-red-800 hover:text-white hover:bg-gradient-to-r from-red-500 via-red-600 to-red-900 ${
                        theme === 'dark' ? 'bg-gray-700 text-white' : ''
                     }`}
                  >
                     Sign Up
                  </button>
               </div>
            </form>
            <p className="text-center font-semibold">
               Already Registered? Go to{' '}
               <Link className={`${theme=== "dark"?"text-red-400":"text-red-800"}`}to="/signin">
                  Login
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Register;
