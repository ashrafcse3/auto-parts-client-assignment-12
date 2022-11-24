import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link className="link link-hover">Home</Link>
            </div>
            <p className="font-bold">
                <span className='text-5xl'>Auto parts</span> <br />Selling second hand car products since 2022
            </p>
            <div>
                <p>Copyright © 2022 - All right reserved by Auto parts Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;