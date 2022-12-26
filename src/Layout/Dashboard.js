import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Helmet from 'react-helmet';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    // useAdmin hook to verify user as a admin
    // useSeller hook to verify user as a seller
    // if (loading) return <Loading></Loading>;
    const [isSeller] = useSeller(user?.email);


    return (
        <div>
            <Helmet>
                <title>AP | Dashboard</title>
            </Helmet>
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
                            {
                                isSeller &&
                                <>
                                    <li><Link to='/dashboard/myproducts'>My products</Link></li>
                                    <li><Link to='/dashboard/addaproduct'>Add a Product</Link></li>
                                    <hr />
                                </>
                            }
                            <li><NavLink to='/dashboard/allcategories'>All categories list</NavLink></li>
                            <li><NavLink to='/dashboard/addacategory'>Add a Category</NavLink></li>
                            <hr />

                            <li><NavLink to='/dashboard/allusers'>All users</NavLink></li>
                            <li><NavLink to='/dashboard/allsellers'>All sellers</NavLink></li>
                            <hr />

                            <li><NavLink to='/dashboard/userbookings'>My bookings</NavLink></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;