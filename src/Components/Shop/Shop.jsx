import React from 'react';

const Shop = ({item}) => {
    console.log(item)
    const {details,name,price,picture,sellerName,_id} = item
    return (
        <div className=''>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className="card w-80 h-96 md:w-60 bg-base-100 shadow-sm border-2 ">
                    <figure><img className='h-40 rounded-t-2xl w-full' src={picture} alt="photo of product" /></figure>
                    <hr />
                    <div className="card-body h-52 bg-slate-100">
                        <div className='flex flex-col h-20'>
                            <h2 className="font-semibold space-y-0">Name: {name}</h2>

                            <p className='my-0'>Price: {price} $</p>
                            <p className='my-2'>{details.slice(0,18)}...</p>
                            <button className='btn btn-warning'>Buy</button>

                        </div>

                        {/* <div className="card-actions justify-end">
                            <button onClick={''} className="btn btn-primary btn-outline"><Link to={`/toyDetails/${_id}`}>Details</Link></button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;