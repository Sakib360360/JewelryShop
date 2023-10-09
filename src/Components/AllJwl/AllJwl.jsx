import React, { useEffect, useState } from 'react';
import AllJwlTabuler from './AllJwlTabuler';

const AllJwl = () => {
    const [jwl, setJwl] = useState([])

    useEffect(() => {

        fetch(`https://jewelry-shop-server-side-cmo75eyi7-sakib360360.vercel.app/alljwl`)
            .then(response => response.json())
            .then(data => {
                setJwl(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div>
            <div className="overflow-x-auto mt-8 w-full mb-8">

                <table className="table w-full border-b-2">

                    <thead >
                        <tr>

                            <th className='bg-sky-100'>Name</ th>
                            <th className='bg-sky-100'>Seller</th>
                            <th className='bg-sky-100'>Price</th>


                        </tr>
                    </thead>
                    <tbody>

                    {
                            jwl.map(data => <AllJwlTabuler key={data._id} data={data}></AllJwlTabuler>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllJwl;