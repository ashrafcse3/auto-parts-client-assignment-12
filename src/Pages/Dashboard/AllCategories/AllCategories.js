import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import { useQuery } from '@tanstack/react-query';

const AllCategories = () => {
    // const categories = useLoaderData();
    const { data: categories, isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:4000/categories')
            .then(res => res.json())
    });

    if (isLoading) {
        return 'loading';
    }

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>You have {categories.length} categories</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories &&
                            categories.map(category => <Category
                                key={category._id}
                                category={category}
                                refetch={refetch}
                            ></Category>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCategories;