import React from 'react';

const AllJwlTabuler = ({ data }) => {
    const { details, name, price, picture, sellerName, _id } = data
    return (
        <tr>

            <td className='border-l-2'>

                {name}
            </td>
            <td className='border-l-2 border-r-2'>{sellerName}</td>
            <td>


                <span className="badge badge-ghost badge-sm">{price}$</span>
            </td>

        </tr>
    );
};

export default AllJwlTabuler;