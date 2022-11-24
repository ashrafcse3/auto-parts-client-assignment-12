import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <AdvertisedItems></AdvertisedItems>
        </div>
    );
};

export default Home;