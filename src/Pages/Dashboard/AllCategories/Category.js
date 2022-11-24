import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const EachCategory = ({ category, refetch }) => {
    const { _id, name, image } = category;
    const handleDeleteCategory = (_id) => {
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

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="img" />
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-center'>{name}</td>
            <td className='text-center'>
                <Link to={`/dashboard/updatecategory/${_id}`}><button className="btn btn-info btn-xs mr-2">Update</button></Link>
                <button onClick={() => handleDeleteCategory(_id)} className="btn btn-error btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default EachCategory;