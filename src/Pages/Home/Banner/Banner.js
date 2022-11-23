import React from 'react';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-7'>
            <div className='col-span-5 bg-yellow-600'>left</div>
            <div className='col-span-2'>
                <div>right top</div>
                <div>right bottom</div>
            </div>
        </div>
    );
};

export default Banner;