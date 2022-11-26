import React, { useEffect, useState } from 'react';
import Category from './Category';

const ProductCategories = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='bg-orange-100 p-4'>
            <div className='mx-auto max-w-[1200px] py-8'>
                <h1 className='text-4xl font-bold mb-3'>Product categories</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                    {
                        categories &&
                        categories.map(category => <Category
                            key={category._id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCategories;