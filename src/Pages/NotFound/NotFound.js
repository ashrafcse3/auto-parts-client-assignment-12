import React from 'react';
import img3 from '../../assets/images/banner/img3.jpg'
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img3})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <p className='text-2xl'>Auto parts error page</p>
                        <h1 className="my-5 text-5xl font-bold uppercase ">404 Not found</h1>
                        <p className="mb-5">Use the navbar to visit other pages</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;