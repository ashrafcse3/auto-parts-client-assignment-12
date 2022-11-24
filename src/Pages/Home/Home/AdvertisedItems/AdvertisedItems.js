import React from 'react';
import EachItem from './EachItem';

const AdvertisedItems = () => {
    return (
        <div className='bg-cyan-100'>
            <div className='mx-auto max-w-[1200px] py-8'>
                <h1 className='text-4xl font-bold mb-3'>Product categories</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <EachItem></EachItem>
                    <EachItem></EachItem>
                    <EachItem></EachItem>
                    <EachItem></EachItem>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;