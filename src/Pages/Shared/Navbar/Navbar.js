import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../../contexts/AuthProvider';
import iconImg from '../../../assets/icons/icon.png';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const getUserName = email => {
        let userName = email.split('@')[0];

        return userName;
    }

    const getGreeting = () => {
        const date = new Date();
        let greetingOfDay;

        const hour = date.getHours();

        if (hour >= 6 && hour < 12) {
            greetingOfDay = 'Morning';
        }
        else if (hour >= 12 && hour < 17) {
            greetingOfDay = 'Afternoon';
        }
        else {
            greetingOfDay = 'Night';
        }

        return greetingOfDay;
    }

    const menuItems = <>
        <li><Link to='/' className='link link-hover'>Home</Link></li>
        {
            user?.uid ?
                <li><Link to='/dashboard' className='link link-hover'>Dashboard</Link></li>
                : ''
        }
        <li><Link to='/blog' className='link link-hover'>Blog</Link></li>
    </>;

    const handleLogOut = () => {
        console.log('logout clicked')
        logOutUser()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className='bg-base-100'>
                <div className="navbar mx-auto max-w-[1200px]">
                    <div className="flex-1">
                        <Link to='/' className='flex items-center btn btn-ghost normal-case'>
                            <img className="h-10 mr-2" src={iconImg} alt="" />
                            <p className="text-blue-900 text-3xl font-extrabold">
                                Auto parts</p>
                        </Link>
                    </div>
                    <div>
                        <PhoneIcon className='h-8 w-8 mr-2 text-blue-900' />
                        <div className="flex flex-col text-gray-700">
                            <p className='font-bold '>(+800) 123 456 329</p>
                            <p>Give us a call</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-blue-900 text-white'>
                <div className="navbar mx-auto max-w-[1200px]">
                    <div className="flex-1">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-900 text-white rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-none">
                        <ul className='p-0 menu menu-horizontal'>
                            {
                                user?.uid ?
                                    <>
                                        <li className='mr-2'>{`${getGreeting()}, ${getUserName(user.email)}`}</li>
                                        <li onClick={handleLogOut} className='link link-hover border rounded p-1'>Logout</li>
                                    </>
                                    :
                                    <>
                                        <li><Link to="/login" className='link link-hover'>Login</Link></li>
                                        <li><Link to="/register" className='link link-hover'>Sign Up</Link></li>
                                    </>
                            }
                            <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;