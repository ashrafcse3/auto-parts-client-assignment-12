import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 my-7'>
            <form className="card-body border border-blue-900">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <Link to="/register" className="label-text-alt link link-hover">Do not have an account? Sign Up</Link>
                    </label>
                </div>
                <div>
                    <p className='text-red-600'>errors</p>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-info">Login</button>
                </div>
            </form>
            <div className='flex items-center justify-center'>
                <button className='border border-blue-900 px-4 py-2 flex items-center'>Login with google <FcGoogle className='ml-2' /></button>
            </div>
        </div>
    );
};

export default Login;