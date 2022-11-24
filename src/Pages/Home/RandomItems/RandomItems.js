import React from 'react';
import EachRandomItem from './EachRandomItem';

const RandomItems = () => {
    return (
        <div className='bg-yellow-100 p-4'>
            <div className='mx-auto max-w-[1200px] py-8'>
                <h1 className='text-4xl font-bold mb-3'>Random items</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <EachRandomItem></EachRandomItem>
                    <EachRandomItem></EachRandomItem>
                    <EachRandomItem></EachRandomItem>
                </div>
            </div>
        </div>
    );
};

export default RandomItems;