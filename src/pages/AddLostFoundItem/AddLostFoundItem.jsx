import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import UseTheme from '../../hooks/UseTheme';

const AddLostFoundItem = () => {
  const { user } = useAuth();
  const { theme } = UseTheme(); // Get the current theme (light/dark)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (user) {
      setName((prev) => prev || user.displayName || "");  
      setEmail((prev) => prev || user.email || "");  
    }
  }, [user]);

  const resetForm = () => {
    setTitle("");
    setName("");
    setPhoto("");
    setPost("");
    setEmail("");
    setCategory("");
    setDescription("");
    setDate("");
    setLocation("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      post,
      photo,
      title,
      location,
      name,
      email,
      category,
      description,
      date
    };
    console.log(postData);
    // Send Data to Server
    fetch('http://localhost:5000/addPost', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success',
            text: 'Post Added Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
        resetForm();
      });
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <Helmet><title>Add Item</title></Helmet>
      <div className="text-center lg:w-2/5 md:w-[350px] mx-auto py-10">
        <h1 className="md:text-2xl text-xl font-bold text-red-800">Add Your Post</h1>
        <p className={`ml-2 ${theme === "dark"? "text-white":"text-gray-800"}`}>
          Lost something or found something? You need help? Post here to reach people.
        </p>
      </div>
      <div>
        <div className={`py-20 rounded-lg px-8 md:px-0 flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-[linear-gradient(25deg,#D0D4E6_5%,_white_30%,_white_70%,#B1B9E6_100%)]'}`}>
          <div className={`p-8 rounded-lg shadow-md w-full max-w-2xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#f7eff3]'}`}>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Post Type */}
                <div className="form-group mb-2">
                  <label htmlFor="unique-select" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Select Post Type
                  </label>
                  <select
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option id="0" value="" disabled>Post Type</option>
                    <option id="1" value="Lost">Lost</option>
                    <option id="2" value="Found">Found</option>
                  </select>
                </div>
                {/* Photo URL Link Input */}
                <div className="form-group">
                  <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Photo
                  </label>
                  <input
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    type="text"
                    required
                    id="photo"
                    placeholder="photoUrl"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Post Title */}
                <div className="form-group">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    required
                    id="title"
                    placeholder="Post Title"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Location Input */}
                <div className="form-group">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Location
                  </label>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    required
                    id="location"
                    placeholder="Item Found/Lost In that Location"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Name Input */}
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required
                    id="name"
                    placeholder="Your Name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Email Input */}
                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    id="email"
                    placeholder="Your Email"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Category Type */}
                <div className="form-group mb-2">
                  <label htmlFor="unique-select" className="block text-sm font-medium text-gray-700 dark:text-white">
                    Select A Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option id="0" value="" disabled>Category Type</option>
                    <option id="1" value="Lost">Pet</option>
                    <option id="2" value="Found">Document</option>
                    <option id="3" value="Found">Gadget</option>
                  </select>
                </div>
              </div>

              {/* Day Found Lost */}
              <div className="form-group">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-white">
                  Date[Found/Lost]
                </label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  name='applicationDeadline'
                  placeholder="Lost/Founded Date"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Description */}
              <div className={`p-4 mt-2 max-w-md mx-auto rounded-lg shadow-md ${theme === "dark"?"bg-gray-800":"bg-gray-100"}`}>
                <label htmlFor="description" className={`block text-sm font-medium mb-2 ${theme === "dark"?"text-white":"text-gray-700"}`}>
                  Add a description:
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  className="bg-red-300 px-6 py-3 font-semibold rounded-md hover:bg-gradient-to-r from-red-500 via-red-600 to-red-900 text-white transition"
                >
                  Add Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLostFoundItem;
