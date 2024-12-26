import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { motion } from "motion/react";
import './Banner.css'; // Assuming a separate CSS file for better styling management

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
        <div className='banner-container mx-auto'>
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
                className="custom-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="custom-slide">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="slide-image"
                        />

                        {/* Text Overlay */}
                        <div className="overlay-text">
                            <p>
                                <span className='highlight-text'>WhereIsIt</span> A home for the lost, a hope for the found.
                            </p>
                        </div>

                        {/* Floating Content */}
                        <div className="floating-content">
                            <motion.img
                                src={slide.image}
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="floating-image"
                            />

                            <motion.div
                                animate={{ x: [-10, 10, -10] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="floating-text"
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
