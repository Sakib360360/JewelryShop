import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import MyJwlCard from './MyJwlCard';


const MyJwl = () => {
    const { user } = useContext(AuthContext)
    const [myJwl, setMyJwl] = useState([])
    const [message,setMessage] = useState(null)
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://jewelry-shop-server-side-cmo75eyi7-sakib360360.vercel.app/myJwl/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyJwl(data)
                setTimeout(() => {
                    if(data?.length>0){
                        setLoading(false)
                        setMessage('Here are your products!')
                    }
                }, 100);
                if(myJwl.length<=0){
                    setLoading(false)
                    setMessage('Sorry you hanve not upload any product here. Please Add your product.')
                }
            })
    }, [])
    const handleFocus = (event) => {
        event.target.style.backgroundColor = '#dfe6ed';
    };

    const handleBlur = (event) => {
        event.target.style.backgroundColor = '#FFFFFF';
    };

    const handleDelete = (id) => {


        Swal.fire({
            title: 'Are you sure?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://jewelry-shop-server-side-cmo75eyi7-sakib360360.vercel.app/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',

                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', '', 'success')
                            const newMyToys = myJwl.filter(toy => toy._id !== id)
                            setMyJwl(newMyToys)
                        }
                    })

            } else if (result.isDenied) {
                Swal.fire('Try again', '', 'info')
            }
        })
    }
    const sortedToysLowestToHighest = [...myJwl].sort((a, b) => a.price - b.price);
    const sortedToysHighestToLowes = [...myJwl].sort((a, b) => b.price - a.price);
    const handleSortLowestToHighest = () => {
        setMyJwl(sortedToysLowestToHighest)
    }
    const handleSortHighestToLowest = () => {
        setMyJwl(sortedToysHighestToLowes)
    }
    return (
        <div className='max-w-6xl'>
            <div className='flex justify-center items-center my-8'>
                <h1 className='px-2'>Sort by price</h1>
                <button onFocus={handleFocus}
                    onBlur={handleBlur} onClick={handleSortLowestToHighest} className='px-2 border-2 py-1'>Lowest to Highest</button>
                <button onFocus={handleFocus}
                    onBlur={handleBlur} onClick={handleSortHighestToLowest} className='px-2 border-2 py-1'>Highest to Lowest</button>
            </div>
            {/* loading state */}
            {
                loading && <div className='flex justify-center items-center my-8'><progress className="progress w-56"></progress></div>
            }
            {
                message && <div className='flex justify-center items-center my-8'><p className='text-warning text-2xl font-semiboldsemi w-1/2 text-center'>{message}</p></div>
            }
            <div className="overflow-x-auto w-full mb-8">

                <table className="table w-full border-b-2">
                    {/* head */}
                    <thead>
                        <tr>
                      
                            <th>Jewelry</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myJwl?.map((item, index) => <MyJwlCard handleDelete={handleDelete} key={index} item={item} index={index}></MyJwlCard>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyJwl;