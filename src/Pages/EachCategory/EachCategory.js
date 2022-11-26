import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachProductItem from '../Shared/EachProductItem/EachProductItem';

const EachCategory = () => {
    const products = useLoaderData();
    return (
        <div className='mx-auto max-w-[1200px] py-8'>
            <h1 className='text-4xl font-bold mb-3'>{products.length} Product found</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products &&
                    products.map(product => <EachProductItem
                        key={product._id}
                        product={product}
                    ></EachProductItem>)
                }
            </div>
        </div>
    );
};

export default EachCategory;