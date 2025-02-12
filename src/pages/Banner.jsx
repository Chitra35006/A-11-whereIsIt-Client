import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Slide } from 'react-awesome-reveal';
import { motion, MotionConfig } from "motion/react"
import { div } from 'motion/react-client';

const Banner = () => {
    const slides = [
        {
          id: 1,
          image: "https://diamondbacklockandkey.com/wp-content/uploads/2018/02/car-key-replacement-services.png",
          title: '"Where the Lost Meet the Found."',
        },
        {
          id: 2,
          image: "https://i.ibb.co/HhCMCvL/0-Ub-Hc-HRdlasgs-YRjx.jpg",
          title: '"Lost Something? Let’s Bring It Back Home"',
        },
        {
          id: 3,
          image: "https://i.ibb.co/wy979gc/the-etiquette-of-finding-and-returning-lost-items.webp",
          title: '"Because Every Belonging Deserves to Be Found."',
        },
        {
          id: 4,
          image: "https://media.istockphoto.com/id/870765174/photo/office-clerk-searching-for-files.jpg?s=612x612&w=0&k=20&c=jqW58EHdc6VS1vxSng_FSRA7GhAnO6eVM8-RhaHPKl8=",
          title: '"Helping You Reconnect with What Matters"',
        },
      ];
    return (
        <div className='mx-auto' style={{ width: "100%", padding: "0 0" }}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ height: "500px" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} style={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
           {/* Text Overlay */}
      <div className="absolute top-32 sm:top-20 md:top-2/3 md:inset-0 sm:inset-1 flex items-center justify-center">
        <p className="md:text-3xl  text-[12px] sm:text-[16px] text-gray-800 font-bold bg-white/30 md:p-4 p-2 rounded-lg shadow-lg">
          <span className='text-red-800'>WhereIsIt</span> A home for the lost, a hope for the found.
        </p>
      </div>

          {/* Animated Floating Content */}
          <div className="absolute left-3/4 top-20 sm:top-1/3 sm:left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
          
              {/* Floating Image */}
              <motion.img
                src={slide.image}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="max-w-xs w-36 sm:w-52 md:w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-red-700 shadow-2xl"
              />

              {/* Floating Text */}
              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="mt-4 text-center bg-black bg-opacity-50 md:p-4 p-1 rounded-lg text-[10px] sm:text-[12px] md:text-lg font-bold shadow-lg"
              > 
                {slide.title}
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default Banner;