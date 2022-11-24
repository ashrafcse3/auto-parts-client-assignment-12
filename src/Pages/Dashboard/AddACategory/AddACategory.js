import React from 'react';
import { useForm } from 'react-hook-form';

const AddACategory = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className='pl-5'>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>Add a Category</h1>
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
                        <span className="label-text">Image</span>
                    </label>
                    <input {...register('image', { required: 'provide the category image' })} type="text" placeholder="image url" className="input input-bordered" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-info">Add category</button>
                </div>
            </form>
        </div>
    );
};

export default AddACategory;