import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import RandomItems from '../RandomItems/RandomItems';
import Helmet from 'react-helmet';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>AP | Home</title>
            </Helmet>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <AdvertisedItems></AdvertisedItems>
            <RandomItems></RandomItems>
        </div>
    );
};

export default Home;