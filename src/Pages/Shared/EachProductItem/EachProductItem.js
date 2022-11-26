import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';

const EachProductItem = ({ product: { name, location, advertise_status, available_units, image, original_price, resale_price, posted_on, purchased_year, seller } }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='h-60'><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    {
                        advertise_status === 'Advertised' ?
                            <div className="badge badge-secondary">{advertise_status}</div>
                            : ''
                    }
                </h2>
                <p>Location: {location}</p>
                <div>
                    <p className='font-bold'>Resale price: ${resale_price}</p>
                    <p className='line-through'>Original price: ${original_price}</p>
                </div>
                <p>Purchased year: {purchased_year}</p>
                <p>posted it on {format(new Date(posted_on), 'PP')}</p>
                <div>
                    Seller: {seller}
                    <CheckBadgeIcon className="ml-2 badge bg-white text-black" />
                </div>
                <button className='btn'>Book now</button>
            </div>
        </div>
    );
};

export default EachProductItem;