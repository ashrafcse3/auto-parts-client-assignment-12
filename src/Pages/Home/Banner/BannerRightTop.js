import React from 'react';
import img3 from '../../../assets/images/banner/img3.jpg'

const BannerRightTop = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${img3})` }}>
            <div className="hero-overlay bg-opacity-60 bg-white"></div>
            <div className="hero-content text-center text-black">
                <div className="max-w-md">
                    <h1 className="mb-2 text-6xl font-bold">2022 Sale</h1>
                    <p className="mb-2 text-2xl">Get up to</p>
                    <p className='uppercase text-4xl font-bold text-red-600'>20% sale</p>
                </div>
            </div>
        </div>
    );
};

export default BannerRightTop;