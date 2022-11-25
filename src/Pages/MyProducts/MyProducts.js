import React from 'react';
import { useQuery } from '@tanstack/react-query';
// import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    // const { data: products, isLoading, refetch } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: () => fetch('http://localhost:4000/products')
    //         .then(res => res.json())
    // });

    // if (isLoading) {
    //     return <Loading></Loading>;
    // }

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>You have 2 products</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>index</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Category</th>
                            <th className='text-center'>Resale price</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-center'>1</td>
                            <td className='text-center'>Name</td>
                            <td className='text-center'>category</td>
                            <td className='text-center'>$112</td>
                            <td className='text-center'>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">8</span>
                                        </div>
                                    </label>
                                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                        <div className="card-body">
                                            <span className="font-bold text-lg">8 Items</span>
                                            <span className="text-info">Subtotal: $999</span>
                                            <div className="card-actions">
                                                <button className="btn btn-primary btn-block">View cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {/* {
                            categories &&
                            categories.map(category => <Category
                                key={category._id}
                                category={category}
                                refetch={refetch}
                            ></Category>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;