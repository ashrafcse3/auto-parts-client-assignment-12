import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const AllCategories = () => {
    const categories = useLoaderData();
    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>You have {categories.length} categories</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-center'>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories &&
                            categories.map(category => <Category
                                key={category._id}
                                category={category}
                            ></Category>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCategories;