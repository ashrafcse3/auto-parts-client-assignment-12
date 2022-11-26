import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category: { _id, name, image } }) => {
    return (
        <Link to={`/category/${_id}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-3 pt-3 h-40">
                    <img src={image} alt="Shoes" className="rounded-xl w-40" />
                </figure>
                <div className="card-body items-center text-center p-2">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Category;