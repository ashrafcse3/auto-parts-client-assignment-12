import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [categories, setCategories] = useState();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:4000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const onSubmit = data => {

        const selectedCategory = categories.find(category => category.name === data.category)

        const newProduct = {
            name: data.name,
            category_name: data.category,
            category_id: selectedCategory._id,
            image: data.image,
            description: data.description,
            condition_type: data.condition_type,
            original_price: data.original_price,
            resale_price: data.resale_price,
            available_units: data.available_units,
            purchased_year: data.purchased_year,
            posted_on: new Date(),
            location: data.location,
            phone: data.phone,
            seller: user.email
        }
        console.log(newProduct);
        fetch('http://localhost:4000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => console.log(data))
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
                        {/* <option defaultValue>Select an category</option> */}
                        {
                            categories && categories.map((category, index) => <option
                                key={index}
                            >{category.name}</option>)
                        }
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
                        {/* <option defaultValue>Select an option</option> */}
                        <option value='Excellent'>Excellent</option>
                        <option value='Good'>Good</option>
                        <option value='Fair'>Fair</option>
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
                        <span className="label-text">Available units</span>
                    </label>
                    <input {...register('available_units', { required: 'provide the product available_units' })} name="available_units" type="text" placeholder="available_units" className="input input-bordered" />
                    {errors.available_units && <p className='text-red-600'>{errors.available_units?.message}</p>}
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