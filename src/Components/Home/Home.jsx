import React, { useEffect, useState } from 'react';
import Bannar from './Bannar';
import GallerySection from '../Gallary/Gallary';
import Shop from '../Shop/Shop';

const Home = () => {
    const [jwl, setJwl] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/alljwl`)
            .then(response => response.json())
            .then(data => {
                setJwl(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div >
                <Bannar></Bannar>
            </div>

            {/* gallery */}
            <div>
                <GallerySection></GallerySection>
            </div>
            {/* shop */}
            <div>
                <div className='overflow-x-hidden md:overflow-visible'>
                    <div data-aos="zoom-in">
                        <h1 className='text-center text-secondary text-3xl font-bold py-12'>Shop</h1>
                    </div>
                    <div className='flex flex-wrap justify-center mx-auto mt-24 gap-8 md:gap-24'>
                        {
                            jwl.map((item, index) => {
                                {
                                    return <>
                                        <Shop key={index} item={item}></Shop>
                                    </>
                                }
                            })
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;