import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import UseTheme from "../../hooks/UseTheme";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { motion, MotionConfig } from "motion/react";
const DetailsPage = () => {
  const { theme } = UseTheme();  // Get the theme (light or dark)

  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    post,
    _id,
    photo,
    title,
    location,
    name,
    email,
    category,
    description,
    date,
  } = useLoaderData();

  const buttonText = post === "Lost" ? "Found This!" : "This is Mine!";
  
  // Theme-specific classes
  const bgColor = theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black";
  const borderColor = theme === "dark" ? "border-gray-600" : "border-gray-300";
  const buttonColor = post === "Lost" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700 ";

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    recoveredLocation: '',
    userName: user?.displayName || '',
    userEmail: user?.email || '',
    receiverName: name,
    receiverEmail: email,
    handoverDate: '',
    title: title,
    postId: '',
    img: photo,
  });

  const handleOpenModal = (id) => {
    setIsModalOpen(true);
    setFormData((prevState) => ({
      ...prevState,
      postId: id,
      userName: user?.displayName || '',
      userEmail: user?.email || '',
      receiverName: name,
      receiverEmail: email,
      title: title,
      img: photo,
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/recoveredItems');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      postId: formData.postId,
      recoveredLocation: formData.recoveredLocation,
      userName: formData.userName,
      email: formData.userEmail,
      receiverName: formData.receiverName,
      receiverEmail: formData.receiverEmail,
      handoverDate: formData.handoverDate,
      title: formData.title,
      img: formData.img,
    };

    fetch('http://localhost:5000/recoverItem', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(dataToSubmit),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          handleCloseModal();
          Swal.fire({
            title: 'Success',
            text: 'Recover Item Added Successfully',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Details Page</title>
      </Helmet>
      <div className={`w-11/12 mx-auto max-w-sm mt-4 rounded-lg shadow-xl overflow-hidden ${bgColor} border ${borderColor} shadow-md flex flex-col`}>
        <div className="flex items-center p-4 border-b">
          <motion.img
            src={photo}
            alt="Post"
            className="w-20 h-20 object-cover border-2"
            style={{
              borderRadius: "50%", // Circular border radius
            }}
          />
          <div className="ml-4">
            <h2 className="md:text-lg text-base font-semibold">{title}</h2>
            <p className={`text-sm font-bold text-center rounded-xl w-4/12 ${buttonColor}`}>{post}</p>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div className={`flex items-center space-x-2 px-2 py-1 rounded-full ${theme === "dark" ? "bg-gray-700 text-white" : "bg-indigo-100 text-indigo-900"}`}>
            <BsPersonCircle className={`${theme === "dark"? "text-indigo-300":"text-indigo-900"}`} size={18} />
            <p className="md:text-sm font-semibold">{name}</p>
          </div>
          <div className={`flex items-center space-x-2 px-2 py-1 rounded-full ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"}`}>
            <FaMapMarkerAlt className="text-red-500" size={16} />
            <p className="md:text-sm font-semibold">{location}</p>
          </div>
        </div>

        <div className="p-4 border-t flex flex-col space-y-2">
          <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{description}</p>
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="mr-1 text-red-800" />
              <p className="md:text-sm">{date}</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-red-800" size={16} />
              <p className="font-semibold">{email}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={() => handleOpenModal(_id)} className={`md:text-lg text-base ${buttonColor} font-semibold text-white py-2 px-4 rounded-md`}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center p-4">
          <div className={`bg-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-lg mt-20 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white"}`}>
            <h2 className="text-xl font-semibold mb-4">Recovered Item Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className={`${theme === "dark" ? "text-white" : ""}`}>Recovered Location</label>
                <input
                  type="text"
                  name="recoveredLocation"
                  value={formData.recoveredLocation}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label className={`${theme === "dark" ? "text-white" : ""}`}>Item Title</label>
                <input
                  type="text"
                  value={formData.title}
                  readOnly
                  className="w-full px-4 py-2 border bg-gray-100"
                />
              </div>
              {/* Add other form inputs similarly */}
              <div className="flex justify-end space-x-3">
                <button onClick={handleCloseModal} type="button" className={`px-4 py-2 ${theme === "dark" ? "bg-gray-600" : "bg-gray-400"} text-white rounded`}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-indigo-950 text-white rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
