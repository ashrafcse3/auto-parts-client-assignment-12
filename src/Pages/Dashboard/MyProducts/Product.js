import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Product = ({ product, index, refetch }) => {
    const { _id, name, available_units, advertise_status } = product;
    const handleDeleteProduct = (_id) => {
        // console.log(_id);

        fetch(`http://localhost:4000/categories/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount === 1) {
                    refetch();
                    toast.success('deleted successfully');
                }
            });
    }
    const handleAdvertiseProduct = (_id) => {
        // console.log(_id);

        fetch(`http://localhost:4000/advertiseProduct/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ advertise_status: 'Advertised' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch();
                    toast.success('Product added for advertising');
                }
            });
    }

    const handleCancelProductAdvertising = (_id) => {
        // console.log(_id);

        fetch(`http://localhost:4000/advertiseProduct/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ advertise_status: 'Not Advertised' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch();
                    toast.success('Canceled advertise for this product');
                }
            });
    }

    const handleCannotAdvertise = () => {
        toast.error('Store some products to advertise it');
    }

    return (
        <tr>
            {/* <td className='text-center'>{index + 1}</td> */}
            <td className='text-center'>{name}</td>
            <td className='text-center'>{available_units}</td>
            <td className='text-center'>{advertise_status}</td>
            <td className='text-center flex'>

                {
                    available_units > 0 ?
                        advertise_status === 'Advertised' ?
                            <button onClick={() => handleCancelProductAdvertising(_id)} className="btn btn-primary btn-xs">Remove Advertising</button>
                            :
                            <button onClick={() => handleAdvertiseProduct(_id)} className="btn btn-info btn-xs">Advertise it</button>
                        :
                        <button onClick={handleCannotAdvertise} className="btn btn-error btn-xs">Can not Advertise</button>
                }
            </td>
            <td>
                <button className="btn btn-error btn-xs mr-2">Delete</button>
                <button className="btn btn-success btn-xs">Update</button>
            </td>
        </tr>
    );
};

export default Product;