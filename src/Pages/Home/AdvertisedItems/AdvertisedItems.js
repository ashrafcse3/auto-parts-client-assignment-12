import React from 'react';
import EachProductItem from '../../Shared/EachProductItem/EachProductItem';

const AdvertisedItems = () => {
    return (
        <div className='bg-cyan-100'>
            <div className='mx-auto max-w-[1200px] py-8'>
                <h1 className='text-4xl font-bold mb-3'>Advertised items</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <EachProductItem></EachProductItem>
                    <EachProductItem></EachProductItem>
                    <EachProductItem></EachProductItem>
                    <EachProductItem></EachProductItem>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;