import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const GallerySection = () => {
    return (
        <div>
            <div className="container ml-8 lg:px-32 md:px-4 md:py-8 mx-auto items-center ">
                <div className='overflow-x-hidden md:overflow-visible'>
                    <div data-aos="zoom-in">
                        <h1 className='text-center text-secondary text-3xl font-bold py-12'>Gallery</h1>
                    </div>
                </div>
                <div className='grid overflow-x-hidden md:overflow-visible grid-cols-1 md:grid-cols-3 gap-4'>
                    <div data-aos="fade-right">
                        <img className='md:h-44 h-40 w-60 md:w-72 md:scale-100 md:hover:scale-105 ease-in duration-500 ' src="https://ion.r2net.com/images/HomePage/SpecialGalleriesBanner/N/Mobile/Vertical/DiamondStuds.jpg" alt="" />
                    </div>
                    <div data-aos="fade-down">
                        <img className='md:h-44 h-40 w-60 md:w-72 md:scale-100 md:hover:scale-105 ease-in duration-500' src="https://st.depositphotos.com/3006519/4596/i/450/depositphotos_45960435-stock-photo-gold-jewelry.jpg" alt="" />
                    </div>
                    <div data-aos="fade-left">
                        <img className='md:h-44 h-40 w-60 md:w-72 md:scale-100 md:hover:scale-105 ease-in duration-500' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzFX2tMTbDJzxaBkhjAAKMnnvGPHYhXeZFw&usqp=CAU" alt="" />
                    </div>
                    <div data-aos="fade-right">
                        <img className='md:h-44 h-40 w-60 md:w-72 md:scale-100 md:hover:scale-105 ease-in duration-500' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKWBhJE1EDLSVxpDJBrK1nHIiOU_xEzIR5A&usqp=CAU" alt="" />
                    </div>
                    <div data-aos="fade-down">
                        <img className='md:h-44 h-40 w-60 md:w-72 md:scale-100 md:hover:scale-105 ease-in duration-500' src="https://noraydesigns.com/cdn/shop/articles/types_of_gold_jewelry.jpg?v=1610129125" alt="" />
                    </div>
                    <div data-aos="fade-left">
                        <img className='md:h-44 h-40 w-60 md:w-72 md:scale-100 md:hover:scale-105 ease-in duration-500' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL254khlRsakuqBjk78CGgRYfL8M0quCb2g&usqp=CAU" alt="" />
                    </div>
                    <div data-aos="fade-right">
                        <img className='md:h-44 h-40 w-60 md:w-72 md:scale-100 md:hover:scale-105 ease-in duration-500' src="https://img.freepik.com/premium-photo/jewelry-diamond-rings-necklaces-show-luxury-retail-store-window-display-showcase_293060-5163.jpg" alt="" />
                    </div>
                    <div data-aos="fade-down">
                        <img className='md:h-44 h-40 w-60 md:w-72 md:scale-100 md:hover:scale-105 ease-in duration-500' src="https://static.vecteezy.com/system/resources/thumbnails/012/809/868/small/gold-and-silver-diamond-gemstone-sapphire-ring-necklaces-and-pearl-earrings-in-luxury-jewelry-box-photo.jpg" alt="" />
                    </div>
                    <div data-aos="fade-left">
                        <img className='md:h-44 h-40 w-60 md:w-72 md:scale-100 md:hover:scale-105 ease-in duration-500' src="https://st.depositphotos.com/3006519/4596/i/450/depositphotos_45960435-stock-photo-gold-jewelry.jpg" alt="" />
                    </div>


                </div>
            </div>

        </div>
    );
};

export default GallerySection;