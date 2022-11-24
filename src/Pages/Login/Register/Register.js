import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className='mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 my-7'>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body border border-blue-900">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register('email', { required: 'provide your email' })} name="email" type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register('password', { required: 'provide your password' })} name="password" type="password" placeholder="password" className="input input-bordered" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <label className="label">
                        <Link to="/register" className="label-text-alt link link-hover">Do not have an account? Sign Up</Link>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Options</span>
                    </label>
                    <select {...register('options')} className="select select-bordered w-full">
                        <option defaultValue='user'>User</option>
                        <option value='seller'>Seller</option>
                    </select>
                </div>
                <div>
                    <p className='text-red-600'>firebase errors</p>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-info">Register</button>
                </div>
            </form >
            <div className='flex items-center justify-center'>
                <button className='border border-blue-900 px-4 py-2 flex items-center'>Login with google <FcGoogle className='ml-2' /></button>
            </div>
        </div >
    );
};

export default Register;