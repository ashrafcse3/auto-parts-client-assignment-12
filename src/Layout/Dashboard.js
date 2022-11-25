import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-auto max-w-[1200px] py-8 px-3'>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side border border-blue-800 rounded-lg">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li><Link to='/dashboard/allcategories'>All categories list</Link></li>
                            <li><Link to='/dashboard/addacategory'>Add a Category</Link></li>
                            <hr />
                            <li><Link to='/dashboard/myproducts'>My products</Link></li>
                            <li><Link to='/dashboard/addaproduct'>Add a Product</Link></li>
                            <hr />
                            <li><Link to='/dashboard/allusers'>All users</Link></li>
                            <li><Link to='/dashboard/allsellers'>All sellers</Link></li>
                            <hr />
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;