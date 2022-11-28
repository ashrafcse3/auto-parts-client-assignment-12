import React, { useEffect, useState } from 'react';
import EachProductItem from '../../Shared/EachProductItem/EachProductItem';

const AdvertisedItems = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/advertisedproducts')
            .then(res => res.json())
            .then(data => setAdvertisedProducts(data))
    }, []);

    if (advertisedProducts.length === 0) return '';

    return (
        <div className='bg-gray-200 p-4'>
            <div className='mx-auto max-w-[1200px] py-8'>
                <h1 className='text-4xl font-bold mb-3'>Advertised items</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        advertisedProducts &&
                        advertisedProducts.map(product => <EachProductItem
                            key={product._id}
                            product={product}
                        ></EachProductItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;