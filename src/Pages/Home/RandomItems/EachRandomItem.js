import React from 'react';
import { Link } from 'react-router-dom';

const EachRandomItem = () => {
    return (
        <Link>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body text-center ">
                    <h2 className="text-6xl text-white font-extrabold">Shoes!</h2>
                    <p className='text-pink-400 text-2xl font-bold'>price: $242</p>
                </div>
            </div>
        </Link>
    );
};

export default EachRandomItem;