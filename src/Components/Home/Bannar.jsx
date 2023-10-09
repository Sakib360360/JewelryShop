import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Bannar.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Bannar = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                
                // modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide ><div className="relative">
                    <img className="md:h-[90vh] h-[60vh]  w-full" src="https://keepsakesjewelry.com/images/Flash/bridal-jewelry-at-keepsakes-jewelry.jpg" alt="" />
                    <div className="absolute md:top-72 md:left-20 space-y-3">

                        <Link to='/allToys'><button className="md:px-20">.</button></Link>
                    </div>
                </div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Bannar;