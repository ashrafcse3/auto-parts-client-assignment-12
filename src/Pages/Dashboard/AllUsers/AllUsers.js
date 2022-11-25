import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import User from './User';

const AllUsers = () => {
    const { data: allusers, isLoading, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: () => fetch('http://localhost:4000/allusers')
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>You have {allusers && allusers.length} Users</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>Index</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers &&
                            allusers.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;