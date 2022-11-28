import React from 'react';
import EachRandomItem from './EachRandomItem';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const RandomItems = () => {
    const { data: randomproducts, isLoading, refetch } = useQuery({
        queryKey: ['randomproducts'],
        queryFn: () => fetch('http://localhost:4000/randomproducts')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='bg-gray-200 p-4'>
            <div className='mx-auto max-w-[1200px] py-8'>
                <div className='flex items-center'>
                    <h1 className='text-4xl font-bold mb-3 mr-8'>Random items</h1>
                    <div className='flex items-center hover:font-bold link' onClick={() => refetch()}>
                        <ArrowPathIcon className='h-10 font-bold' />
                        <p className='text-xl'>Reload</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        randomproducts &&
                        randomproducts.map(product => <EachRandomItem
                            key={product._id}
                            product={product}
                        ></EachRandomItem>)
                    }

                </div>
            </div>
        </div>
    );
};

export default RandomItems;