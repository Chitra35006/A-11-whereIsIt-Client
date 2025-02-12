import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, MotionConfig } from "motion/react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const DetailsPage = () => {

    const{user} = useAuth();
    console.log(user.displayName);

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
  //  console.log(title,email);
  const buttonText = post === "Lost" ? "Found This!" : "This is Mine!";
  const bgColor =
    post === "Lost"
      ? "bg-gray-50 border-gray-300"
      : "bg-orange-50 border-orange-300";
  const borderColor = post === "Lost" ? "border-gray-300" : "border-orange-300";
  const buttonColor = post === "Lost" ? "text-red-800 " : "text-green-800";

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    recoveredLocation: '',
    userName: user?.displayName || '',
    userEmail: user?.email || '',
    receiverName: name,  // Receiver's name
    receiverEmail: email, // Receiver's email
    handoverDate: '',
    title:title,
    postId: '',
    img:photo// Store dynamic post ID
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
      title:title,
      img:photo// Set dynamic postId when modal opens
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/recoveredItems');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async(e)=>{
    e.preventDefault();
    const dataToSubmit = {
        postId: formData.postId,
        recoveredLocation: formData.recoveredLocation,
        userName: formData.userName,
        email: formData.userEmail,
        receiverName: formData.receiverName,
        receiverEmail: formData.receiverEmail,
        handoverDate: formData.handoverDate,
        title:formData.title,
        img:formData.img
      };
      console.log(dataToSubmit);
      fetch('http://localhost:5000/recoverItem',{
        method: "POST",
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(dataToSubmit)
      })
      .then(res=> res.json())
      .then(data =>{
              
              if(data.insertedId){
                handleCloseModal();
                  Swal.fire({
                      title: 'Success',
                      text: 'Recover Item Added Successfully',
                      icon: 'success',
                      confirmButtonText: 'OK'
                    })
              }
              resetForm();
          })
 }



  return (
    <div>
      <Helmet>
        <title>Details Page</title>
      </Helmet>
      <div
        className={`w-11/12 mx-auto max-w-sm mt-4 rounded-lg overflow-hidden ${bgColor} border ${borderColor} shadow-md flex flex-col`}
      >
        <div className="flex items-center p-4 border-b">
          <motion.img
            src={photo}
            alt="Post"
            className="w-20 h-20 object-cover border-2"
            style={{
              borderRadius: "50%", // Circular border radius
            }}
            animate={{
              borderColor: [
                "#be185d",
                "#ecff33",
                "#16a34a",
                "#ff6133",
                "#ea580c",
              ],
              borderRadius: ["50%", "10%", "50%"], // Animating the border radius (circular to more square and back)
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop", // Makes the animation loop
            }}
          />
          <div className="ml-4">
            <h2 className="md:text-lg text-base font-semibold">{title}</h2>
            <p className={`text-sm font-bold text-gray-500 ${buttonColor}`}>
              {post}
            </p>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 bg-indigo-100 px-2 py-1 rounded-full">
            <BsPersonCircle className="text-indigo-900" size={18} />
            <p className="md:text-sm font-semibold text-indigo-900 text-[10px]">
              {name}
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-200 px-2 py-1 rounded-full">
            <FaMapMarkerAlt className="text-red-500" size={16} />
            <p className="md:text-sm font-semibold text-[10px]">{location}</p>
          </div>
        </div>

        <div className="p-4 border-t flex flex-col space-y-2">
          <p className="text-sm text-gray-700">{description}</p>
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="mr-1 text-red-800" />
              <p className="md:text-sm font-se text-[10px]">{date}</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-red-800" size={16} />
              <p className="font-semibold md:text-sm text-[10px]">{email}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                handleOpenModal(_id);
              }}
              className="md:text-lg text-base bg-indigo-950 hover:bg-gradient-to-r from-orange-500 via-red-600 to-red-900  font-semibold text-white py-2 px-4 rounded-md"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
       {/* Modal */}
       {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-lg mt-20 ">
            <h2 className="text-xl font-semibold mb-4">Recovered Item Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label>Recovered Location</label>
                <input
                  type="text"
                  name="recoveredLocation"
                  value={formData.recoveredLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Item Title</label>
                <input
                  type="email"
                  value={formData.title}
                  readOnly
                  className="w-full px-4 py-2 border bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label>Item Image</label>
                <input
                  type="email"
                  value={formData.img}
                  readOnly
                  className="w-full px-4 py-2 border bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label>Your Name</label>
                <input
                  type="text"
                  value={formData.userName}
                  readOnly
                  className="w-full px-4 py-2 border bg-gray-100"
                />
              </div>

              
              <div className="mb-4">
                <label>Your Email</label>
                <input
                  type="email"
                  value={formData.userEmail}
                  readOnly
                  className="w-full px-4 py-2 border bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label>Receiver/Sender Name</label>
                <input
                  type="text"
                  value={formData.receiverName}
                  readOnly
                  className="w-full px-4 py-2 border bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label>Receiver/Sender Email</label>
                <input
                  type="email"
                  value={formData.receiverEmail}
                  readOnly
                  className="w-full px-4 py-2 border bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label>Handover Date</label>
                <input
                  type="date"
                  name="handoverDate"
                  value={formData.handoverDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button onClick={handleCloseModal} type="button" className="px-4 py-2 bg-gray-400 text-white rounded">
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
