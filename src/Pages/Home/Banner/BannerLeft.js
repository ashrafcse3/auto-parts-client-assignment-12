import React from 'react';
import img1 from '../../../assets/images/banner/img1.jpg'
import img2 from '../../../assets/images/banner/img2.jpg'

const BannerLeft = () => {
    return (
        <div className='bg-white'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={img1} className="max-h-96" alt='' />
                            <div className='lg:mr-7'>
                                <h1 className="text-5xl font-bold italic font-mono">Black friday</h1>
                                <p className="py-6 text-8xl font-bold capitalize text-center text-red-600">Epic</p>
                                <p className='capitalize text-2xl tracking-widest text-center'>The best collection</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={img2} className="max-h-96" alt='' />
                            <div className='lg:mr-7'>
                                <h1 className="text-5xl font-bold italic font-mono text-center">On Sale</h1>
                                <p className="py-6 text-8xl font-bold capitalize text-center text-red-600">25% Off</p>
                                <p className='capitalize text-2xl tracking-widest text-center'>Give your orders now!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
            </div>
        </div>
    );
};

export default BannerLeft;