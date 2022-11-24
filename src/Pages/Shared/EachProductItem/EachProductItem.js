import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const EachProductItem = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Product name
                    <div className="badge badge-secondary">Advertised</div>
                </h2>
                <p>Location: Sylhet</p>
                <div>
                    <p>Resale price: $140</p>
                    <p>Original price: $242</p>
                </div>
                <p>3 years used</p>
                <p>posted it on 31, Nov, 2022</p>
                <div>
                    Seller: David
                    <CheckBadgeIcon className="ml-2 badge bg-white text-black" />
                </div>
                <button className='btn'>Book now</button>
            </div>
        </div>
    );
};

export default EachProductItem;