import React from 'react';
import BannerLeft from './BannerLeft';
import BannerRightBottom from './BannerRightBottom';
import BannerRightTop from './BannerRightTop';

const Banner = () => {
    return (
        <div className='bg-gray-200'>
            <div className='grid lg:grid-cols-7 gap-4 mx-auto max-w-[1200px] py-8'>
                <div className='col-span-5 bg-yellow-600'>
                    <BannerLeft></BannerLeft>
                </div>
                <div className='col-span-2 grid grid-cols-1 gap-4'>
                    <BannerRightTop></BannerRightTop>
                    <BannerRightBottom></BannerRightBottom>
                </div>
            </div>
        </div>
    );
};

export default Banner;