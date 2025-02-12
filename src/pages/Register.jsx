import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

      setErrorMessage('');
      if (password.length < 6) {
         setErrorMessage('Password must be at least 6 characters long');
         return;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
      if (!passwordRegex.test(password)) {
         setErrorMessage('Password must include at least one uppercase and one lowercase letter');
         return;
      }

      createUser(email, password)
         .then((result) => {
            form.reset();
            setUser(result.user);
            Swal.fire({
               icon: 'success',
               title: 'Registration Successful!',
               text: `Welcome, ${email}!`,
               confirmButtonText: 'OK',
            });
            updateUserProfile({ displayName: name, photoURL: photoUrl })
               .then(() => navigate('/'))
               .catch((err) => console.log('ERROR', err));
         })
         .catch((err) => {
            if (err.code === 'auth/email-already-in-use') {
               setErrorMessage('This email is already in use.');
            } else {
               setErrorMessage('An error occurred. Please try again.');
            }
         });
   };

   return (
      <div className={`min-h-screen flex justify-center items-center ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white'}`}> 
         <Helmet><title>Sign Up</title></Helmet>
         <motion.div
            className={`card w-full max-w-lg shadow-2xl p-10 ${theme === 'dark' ? 'bg-gradient-to-r from-slate-900 to-blue-900' : 'bg-[linear-gradient(225deg,_#ffffff,_#d0e3f3,_#f8bfbb)]'}`}
            animate={{ borderColor: ['#7810c4', '#9bea71', '#f5c05e', '#e555d4', '#69dded'] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ borderLeftWidth: '4px',borderRightWidth:'4px', borderStyle: 'solid' }}
         >
            <h2 className="font-semibold text-2xl text-center mt-5">Register Your Account</h2>
            <form onSubmit={handleSignUp} className="card-body">
               <div className="form-control">
                  <label className="label"><span className="label-text">Name</span></label>
                  <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label"><span className="label-text">Photo URL</span></label>
                  <input type="text" name="photoUrl" placeholder="Enter Your Photo URL" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label"><span className="label-text">Email</span></label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label"><span className="label-text">Password</span></label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                  {errorMessage && <p className="p-2 mt-2 font-semibold bg-red-300 text-red-700">{errorMessage}</p>}
               </div>
               <div className="form-control mt-6">
                  <button className="btn border-red-800 border text-red-800 hover:text-white hover:bg-gradient-to-r from-red-500 via-red-600 to-red-900">Sign Up</button>
               </div>
            </form>
            <p className="text-center font-semibold">
               Already Registered? <Link className={`${theme=== "dark"?"text-red-400":"text-red-800"}`} to="/signin">Login</Link>
            </p>
         </motion.div>
      </div>
   );
};

export default Register;