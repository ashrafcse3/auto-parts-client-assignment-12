import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    return (
        <div className='bg-orange-100'>
            <div className='mx-auto max-w-[1200px] py-8'>
                <h1 className='text-4xl font-bold mb-3'>Product categories</h1>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <Link>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-3 pt-3">
                                <img src="https://www.gsfcarparts.com/media/wysiwyg/m2/home-cat-gsf-battery.png" alt="Shoes" className="rounded-xl w-40" />
                            </figure>
                            <div className="card-body items-center text-center p-2">
                                <h2 className="card-title">Batteries</h2>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-3 pt-3">
                                <img src="https://www.gsfcarparts.com/media/wysiwyg/m2/home-cat-gsf-battery.png" alt="Shoes" className="rounded-xl w-40" />
                            </figure>
                            <div className="card-body items-center text-center p-2">
                                <h2 className="card-title">Batteries</h2>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-3 pt-3">
                                <img src="https://www.gsfcarparts.com/media/wysiwyg/m2/home-cat-gsf-battery.png" alt="Shoes" className="rounded-xl w-40" />
                            </figure>
                            <div className="card-body items-center text-center p-2">
                                <h2 className="card-title">Batteries</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategories;