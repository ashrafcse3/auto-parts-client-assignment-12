import React from 'react';

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
                }
            });
    }

    const handleUpdateCategory = (category) => {
        console.log(category)
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
                <button onClick={() => handleUpdateCategory(category)} className="btn btn-info btn-xs mr-2">Update</button>
                <button onClick={() => handleDeleteCategory(_id)} className="btn btn-error btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default EachCategory;