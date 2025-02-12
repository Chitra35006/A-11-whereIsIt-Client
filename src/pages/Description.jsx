import React from 'react';
import cat from "../assets/cat.webp"
import dc from "../assets/dc.jpg"
import dog from "../assets/dog.webp"
import dog2 from "../assets/dog2.avif"
import phone from "../assets/phone.webp"
import p1 from "../assets/wallet.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const Description = () => {
    return (
        <div className="mx-auto w-11/12 min-h-screen bg-gray-100 p-6 mt-20 ">
          <h1 className='mt-6 mx-auto  md:w-3/12 md:my-2 text-center font-semibold text-lg bg-blue-950 text-white rounded-sm p-2'>Newsfeed</h1>
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Big Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:col-span-2">
          <img
            src={phone}
            alt="New Year UI Bundle"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 relative">
            <div className="absolute top-4 right-4 bg-blue-950 text-white px-3 py-1 rounded-full text-xs">
              21 Jan
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Found A Phone <br />
              12/A Elephant Street
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              140 Comments • 1k Likes
            </p>
            <div className="flex items-center mt-4">
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mr-2">
                #found
              </span>
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mr-2">
                #phone
              </span>
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                #VivoY11
              </span>
            </div>
            <button className="mt-6 bg-red-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded">
              Join Group
            </button>
          </div>
        </div>

        {/* Smaller Cards */}
        {/* dog Cards */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        {/* Static Text Content */}
        <p className="text-sm text-center bg-indigo-950 text-white px-3 py-1 rounded-full sm:mb-4 mb-2">22 Dec</p>
        <h3 className="sm:text-lg text-[12px] font-semibold">A Pet is Missing</h3>
        <p className="sm:text-sm font-semibold text-[10px] text-red-800">Name: Jimmy</p>
  
        {/* Swiper for Sliding Images */}
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-[250px] md:h-[400px] lg:h-[400px] mt-5"
        >
          {/* Swiper Slide with Animated Image */}
          <SwiperSlide>
            <motion.img
              src={dog}
              alt="Pet Image"
              className="md:h-[400px] h-[300px] w-full rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }} // Starts from bottom
              animate={{ opacity: 1, y: 0 }} // Moves to original position
              transition={{ duration: 1.5, ease: 'easeOut' }} // Smooth transition
            />
          </SwiperSlide>
          <SwiperSlide>
      <motion.img
        src={dog2} // Example: Replace with another image source
        alt="Another Pet Image"
        className="md:h-[400px] h-[300px] w-full rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    </SwiperSlide>
        </Swiper>
      </div>


        {/* catCards */}
    {/* catCards */}
<div className="bg-gray-600 md:h-[250px] h-[200px] text-white p-4 rounded-lg shadow-md relative overflow-hidden">
  {/* Static Text (Overlayed on Image) */}
  <p className="text-sm absolute bottom-16 left-4 right-4 z-10">
    "Found a pet near Uttara Block A"
  </p>
  
  <div className="mt-4 absolute bottom-4 left-4 z-10">
    <span className="block font-semibold">Fahim Rahman</span>
    <span className="text-sm">@fahim</span>
  </div>

  {/* Image Sliding Continuously */}
  <motion.div
    animate={{
      y: ["100%", "-100%"], // Slides from bottom (100%) to top (-100%)
    }}
    transition={{
        times: [0, 0.8, 1], // Defines the duration of each phase
        duration: 3, // Total duration of the animation
        ease: "easeInOut", // Smooth slide in and out
        repeat: Infinity, // Infinite loop
        repeatType: "loop", // Loop the animation seamlessly
        repeatDelay: 4, // Pause for 2 seconds before restarting
      }}
    className="absolute top-0 left-0 w-full h-full"
  >
    <div className="relative w-full h-[300px] rounded-lg shadow-lg overflow-hidden">
      {/* The Image */}
      <img
        src={cat} // Your image source
        alt="Found Pet"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  </motion.div>
</div>

 
 
        {/* dc Cards */}
        <div className="bg-red-600 md:h-[250px] h-[200px] text-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl text-black font-bold">80%</h3>
          <p className="text-sm mt-1">has found their missing document</p>
          <p className="text-sm">Find Your Document</p>
          
          <img src={dc}/>
        </div>
        {/* p1 Cards */}

        <div className="bg-gray-600 md:h-[250px] h-[200px] text-white p-4 rounded-lg shadow-md relative overflow-hidden">
  {/* Static Text (Overlayed on Image) */}
  <p className="text-sm absolute bottom-16 left-4 right-4 z-10">
    "Lost A Wallet in Uposohor Sylhet B[D]"
  </p>
  
  <div className="mt-4 absolute bottom-4 left-4 z-10">
    <span className="block font-semibold">Rina Roy</span>
    <span className="text-sm">@rroy</span>
  </div>

  {/* Image Sliding Continuously */}
  <motion.div
    animate={{
      y: ["100%", "-100%"], // Slides from bottom (100%) to top (-100%)
    }}
    transition={{
        times: [0, 0.8, 1], // Defines the duration of each phase
        duration: 3, // Total duration of the animation
        ease: "easeInOut", // Smooth slide in and out
        repeat: Infinity, // Infinite loop
        repeatType: "loop", // Loop the animation seamlessly
        repeatDelay: 4, // Pause for 2 seconds before restarting
      }}
    className="absolute top-0 left-0 w-full h-full"
  >
    <div className="relative w-full h-[300px] rounded-lg shadow-lg overflow-hidden">
      {/* The Image */}
      <img
        src={p1} // Your image source
        alt="Lost Wallet"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  </motion.div>
</div>
        
      </div>
    </div>
    );
};

export default Description;