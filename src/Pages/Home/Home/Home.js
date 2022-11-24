import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import RandomItems from '../RandomItems/RandomItems';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <AdvertisedItems></AdvertisedItems>
            <RandomItems></RandomItems>
        </div>
    );
};

export default Home;