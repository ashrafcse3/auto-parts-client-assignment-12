import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const menuItems = <>
        <li><Link>Home</Link></li>
    </>;
    return (
        <div>
            <div className='bg-base-100'>
                <div className="navbar mx-auto max-w-[1200px]">
                    <div className="flex-1">
                        <Link className="text-blue-900 btn btn-ghost normal-case text-3xl font-extrabold">Auto parts</Link>
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
                    <div className="navbar-start">
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

                </div>
            </div>
        </div>
    );
};

export default Navbar;