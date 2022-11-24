import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className='p-5'>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>Add a product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body border border-blue-900">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register('name', { required: 'provide the product name' })} type="text" placeholder="name" className="input input-bordered" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Select the category</span>
                    </label>
                    <select {...register('category', { required: 'provide the product category' })} className="select select-bordered w-full">
                        <option defaultValue>Select an category</option>
                        <option value='excellent'>Excellent</option>
                        <option value='fetchcategories'>fetch all category</option>
                        {/* Loop through all category */}
                    </select>
                    {errors.category && <p className='text-red-600'>{errors.category?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input {...register('image', { required: 'provide the image' })} name="image" type="text" placeholder="image url" className="input input-bordered" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <input {...register('description', { required: 'provide the product description' })} name="description" type="text" placeholder="description" className="input input-bordered" />
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Condition type</span>
                    </label>
                    <select {...register('condition_type', { required: 'provide the product condition' })} className="select select-bordered w-full">
                        <option defaultValue>Select an option</option>
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                    </select>
                    {errors.condition_type && <p className='text-red-600'>{errors.condition_type?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Original price</span>
                    </label>
                    <input {...register('original_price', { required: 'provide the product original_price' })} name="original_price" type="text" placeholder="original_price" className="input input-bordered" />
                    {errors.original_price && <p className='text-red-600'>{errors.original_price?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resale price</span>
                    </label>
                    <input {...register('resale_price', { required: 'provide the product resale_price' })} name="resale_price" type="text" placeholder="resale_price" className="input input-bordered" />
                    {errors.resale_price && <p className='text-red-600'>{errors.resale_price?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Purchased year</span>
                    </label>
                    <input {...register('purchased_year', { required: 'provide the product purchased_year' })} type="text" placeholder="purchased_year" className="input input-bordered" />
                    {errors.purchased_year && <p className='text-red-600'>{errors.purchased_year?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Posted on Select it from date function</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name: Provide the seller name</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input {...register('location', { required: 'provide the location' })} type="text" placeholder="location" className="input input-bordered" />
                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input {...register('phone', { required: 'provide the phone' })} type="text" placeholder="phone" className="input input-bordered" />
                    {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-info">Add product</button>
                </div>
            </form >
        </div>
    );
};

export default AddAProduct;