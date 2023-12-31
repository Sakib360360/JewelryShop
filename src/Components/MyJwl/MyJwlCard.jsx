import React from 'react';


const MyJwlCard = ({ item }) => {
    const { price,  name, email, picture, _id } = item


    return (
        <tr>
            
            <td className='border-l-2'>

                <div className="flex items-center space-x-3">

                    <div className="">
                        <div className="rounded-full w-12 h-12">
                            <img className='' src={picture} alt="Toy" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td className='border-l-2 border-r-2'>{email}</td>
            <td>


                <span className="badge badge-ghost badge-sm">{price}$</span>
            </td>
            <td className='border-r-2'><button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
        </tr>
    );
};

export default MyJwlCard;

