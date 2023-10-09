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
                    <img className="md:h-[90vh] h-[60vh]  w-full" src="https://dcassetcdn.com/design_img/2886222/654209/654209_15888442_2886222_088350be_image.jpg" alt="" />
                    <div className="absolute top-64 right-24 md:top-96 md:right-40 space-y-3">

                        <Link to='/allJwl'><button className="md:px-20 btn btn-outline">Sell All</button></Link>
                    </div>
                </div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Bannar;