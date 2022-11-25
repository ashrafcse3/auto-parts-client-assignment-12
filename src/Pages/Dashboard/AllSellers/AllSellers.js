import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import Seller from './Seller';

const AllSellers = () => {
    const { data: allsellers, isLoading, refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: () => fetch('http://localhost:4000/allsellers')
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>You have {allsellers && allsellers.length} Users</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>Index</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allsellers &&
                            allsellers.map((seller, index) => <Seller
                                key={seller._id}
                                seller={seller}
                                index={index}
                                refetch={refetch}
                            ></Seller>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;