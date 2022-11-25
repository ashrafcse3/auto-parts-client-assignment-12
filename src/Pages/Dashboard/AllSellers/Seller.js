import React from 'react';
import { toast } from 'react-hot-toast';

const Seller = ({ seller, index, refetch }) => {
    const { _id, email } = seller;
    const handleDeleteCategory = (_id) => {
        // console.log(_id);

        fetch(`http://localhost:4000/users/${_id}`, {
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
            <td className='text-center'>{email}</td>
            <td className='text-center'>
                <button onClick={() => handleDeleteCategory(_id)} className="btn btn-error btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default Seller;