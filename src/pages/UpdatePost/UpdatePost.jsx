import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';




const UpdatePost = () => {
    const singlePostData = useLoaderData();
    const [name, setName] = useState(singlePostData?.name);
    const [email, setEmail] = useState(singlePostData?.email);
    const [photo, setPhoto] = useState(singlePostData?.photo);
    const [description, setDescription] = useState(singlePostData?.description);
    const[post, setPost] = useState(singlePostData?.post);
    const[location, setLocation] = useState(singlePostData?.location);
    const[category, setCategory] = useState(singlePostData?.category);
    const[title, setTitle] = useState(singlePostData?.title);
    const [date, setDate] = useState(
        singlePostData?.date ? new Date(singlePostData.date) : new Date()
      );
      

    const {id} = useParams();

    const handleUpdateData =(e)=>{
        e.preventDefault();
        const formattedDate = date.toISOString().split('T')[0];
        const data={
            post,
            photo,
            title,
            location,
            name,
            email,
            category,
            description,
            date:formattedDate
        }
        console.log(data);
        fetch(`http://localhost:5000/posting/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json" ,
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Updated!",
          text: " Data Updated.",
          icon: "success",
        });
        console.log(data);
      });
    }

    return (
        <div>
            <Helmet><title>Update Post</title></Helmet>
            <div>
      <div className="text-center lg:w-2/5 md:w-[350px] mx-auto py-10">
        <h1 className="md:text-2xl text-xl font-bold text-red-800">Add Your Post</h1>
        <p className="mt-2">
          Losted Something or Founded Something ? You Need help ? Post Here to Reach People
        </p>
      </div>
      <div>
        <div className="py-20 rounded-lg px-8 md:px-0 flex items-center justify-center bg-[linear-gradient(25deg,#fdba74_5%,_white_30%,_white_70%,#fca5a5_100%)]">
        <div className="p-8 rounded-lg shadow-md w-full max-w-2xl bg-[#f7eff3]">
            <form onSubmit={handleUpdateData}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Post Type */}
                 <div className="form-group mb-2">
                  <label
                    htmlFor="unique-select"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Post Type
                  </label>
                  <select
                    // id="campaign"
                    value={post}
                    onChange={(e)=> setPost(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option id="0" value="" disabled>Post Type</option>
                    <option id="1" value="Lost">Lost</option>
                    <option id="2" value="Found">Found</option>
                  </select>
                </div>
                {/* PhotoURL Link Input */}
                <div className="form-group">
                  <label
                    htmlFor="photoUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Photo
                  </label>
                  <input
                  value={photo}
                  onChange={(e)=>setPhoto(e.target.value)}
                    type="text"
                    required
                    id="photo"
                    placeholder="photoUrl"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* PostTitle */}
                <div className="form-group">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                    type="text"
                    required
                    id="title"
                    placeholder="Post Title"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                 {/* Location Input */}
                 <div className="form-group">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <input
                  value={location}
                  onChange={(e)=>setLocation(e.target.value)}
                    type="text"
                    required
                    id="name"
                    placeholder="Item Found/Lost In that Location"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Name Input */}
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium  text-gray-700"
                  >
                    Name
                  </label>
                  <input readOnly
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                    type="text"
                    required
                    id="name"
                    placeholder="Your Name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
               
                {/* Email Input */}
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input readOnly
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    required
                    id="email"
                    placeholder="Your Email"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Category Type */}
                <div className="form-group mb-2">
                  <label
                    htmlFor="unique-select"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select A Category
                  </label>
                  <select
                    // id="campaign"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option id="0" value="" disabled>Category Type</option>
                    <option id="1" value="Lost">Pet</option>
                    <option id="2" value="Found">Document</option>
                    <option id="3" value="Found">Gadget</option>
                  </select>
                </div>
              </div>

              {/* Day Found Lost*/}
              <div className="form-group">
              <DatePicker
        selected={date}
        onChange={(newDate) => setDate(newDate)}
        dateFormat="yyyy-MM-dd"
      />
                 
                </div>
              {/* Description */}
              <div className="p-4 mt-2 max-w-md mx-auto rounded-lg shadow-md bg-gray-50">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium mb-2 text-gray-800"
                >
                  Add a description:
                </label>
                <textarea
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                  id="description"
                  name="description"
                  rows="4"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your description here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="bg-red-300 px-6 py-3 font-semibold rounded-md  hover:bg-gradient-to-r from-red-500 via-red-600 to-red-900 text-white transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default UpdatePost;