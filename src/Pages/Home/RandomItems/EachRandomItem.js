import React from 'react';
import { Link } from 'react-router-dom';

const EachRandomItem = ({ product: { image, name, resale_price } }) => {
    return (
        <Link>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure className='h-52'><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-center ">
                    <h2 className="text-4xl text-white font-extrabold">{name}!</h2>
                    <p className='text-pink-400 text-2xl font-bold'>price: ${resale_price}</p>
                </div>
            </div>
        </Link>
    );
};

export default EachRandomItem;