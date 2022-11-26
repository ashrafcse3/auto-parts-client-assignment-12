import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import Product from './Product';

const MyProducts = () => {
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:4000/products')
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>You have {products.length} products</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            {/* <th className='text-center'>index</th> */}
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Available items</th>
                            <th className='text-center'>Advertise status</th>
                            <th className='text-center'>Advertise option</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products.map((product, index) => <Product
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            ></Product>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;