import React, { useContext } from 'react';

import Swal from 'sweetalert2';
import { FaArrowDown } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';

const AddJwl = () => {
    const { user } = useContext(AuthContext)
    const handleAddJwl = (event) => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const picture = form.url.value;
        const details = form.details.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const newJwl = {
            "name": name,
            "price": price,
            "picture": picture,
            "email": email,
            "details": details,
            "sellerName": sellerName


        }
        console.log(newJwl)

        fetch('http://localhost:5000/addJwl', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJwl)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
           

    }


    return (
        <div className=' flex justify-center'>
            <form className='border-2 p-4 m-4 bg-sky-50 shadow-2xl rounded-lg' onSubmit={handleAddJwl}>
                <div className='flex font-semibold text-primary  justify-center my-4'>
                    <h1>Add Your Jewel to Sell</h1>
                </div>
                <div className='flex justify-center text-primary mt-4 animate-bounce'>
                        <FaArrowDown></FaArrowDown>
                    </div>
                {/* form row */}
                <div className='flex my-4 '>
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <p className="label-text text-sky-500">Jewelry name</p>
                        </label>
                        <label className=" ">

                            <input  defaultValue={''} required type="text" placeholder="Jewelry name" name='name' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <p className="label-text text-sky-500">Price</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Price" defaultValue={''} name='price' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>

                </div>
                {/* form row */}
                
                {/* form row */}
                <div className='flex my-4 '>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text text-sky-500">Email</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Email" value={user?.email} name='email' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <p className="label-text text-sky-500">Seller name</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Seller Name" value={user?.displayName} name='sellerName' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>


                </div>
                {/* photourl */}
                
                <div className='flex my-4 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <p className="label-text text-sky-500">Photo URL</p>
                        </label>
                        <label className=" ">

                            <input required type="text" placeholder="Photo URL" name='url' className="input w-full input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>



                </div>
                <div className='flex my-4 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <p className="label-text text-sky-500">Details</p>
                        </label>
                        <label  className=" ">

                            <input   required type="text" placeholder="Details" name='details' className="input w-full   input-bordered placeholder-slate-600 bg-sky-100" />
                        </label>
                    </div>
                </div>
                <div>
                    <input required type="submit" className="btn btn-block btn-outline" />

                </div>
            </form>
        </div>
    );
};

export default AddJwl;