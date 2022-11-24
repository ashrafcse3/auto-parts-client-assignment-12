import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LeftSideBar from '../Pages/Shared/LeftSideBar/LeftSideBar';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-auto max-w-[1200px] py-8'>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side border border-blue-800 rounded-lg">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li><Link to='/dashboard/addacategory'>Add a Category</Link></li>
                            <li><Link to='/dashboard/addaproduct'>Add a Product</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;