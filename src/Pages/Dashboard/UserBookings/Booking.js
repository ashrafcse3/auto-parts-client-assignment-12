import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Booking = ({ booking: { _id, product_name, product_price }, index, refetch }) => {
    const handleBookingDelete = (_id) => {
        // console.log(_id);

        fetch(`http://localhost:4000/booking/${_id}`, {
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
    return (
        <tr>
            <td className='text-center'>{index + 1}</td>
            <td className='text-center'>{product_name}</td>
            <td className='text-center'>{product_price}</td>
            <td className='text-center'>
                <Link to={`http://localhost:4000/bookingpay/${_id}`}><button className="btn btn-success btn-xs mr-1">Pay</button></Link>
                {/* <button onClick={() => handleDeleteCategory(_id)} className="btn btn-error btn-xs mr-1">Details</button> */}
                <button onClick={() => handleBookingDelete(_id)} className="btn btn-error btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default Booking;