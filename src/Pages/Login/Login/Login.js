import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const { user, signInUser, signInWithGoogle } = useContext(AuthContext);

    // if any user is logged in, send them back to home page
    if (user) return navigate(from, { replace: true });

    const onSubmit = data => {
        console.log(data);
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log('Login page', user);
                // send them back to home or from wherever they came
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    };

    const saveUserToDB = (email, role) => {
        const user = { email, role };
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const signedUser = result.user;
                // navigate(from, { replace: true });
                // The role will be 'user' for a signed up user with social login
                fetch(`http://localhost:4000/users/${signedUser.email}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (!data) {
                            saveUserToDB(signedUser.email, 'user');
                        }
                    })
            })
            .catch(error => setError(error.message));
    }

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
                <div>
                    {/* firebase errors */}
                    <p className='text-red-600'>{error}</p>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-info">Login</button>
                </div>
            </form >
            <div className='flex items-center justify-center'>
                <button onClick={handleGoogleSignIn} className='border border-blue-900 px-4 py-2 flex items-center'>Login with google <FcGoogle className='ml-2' /></button>
            </div>
        </div >
    );
};

export default Login;