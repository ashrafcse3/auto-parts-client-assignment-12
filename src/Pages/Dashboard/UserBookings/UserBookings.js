import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const UserBookings = () => {
    const { data: bookingsbyuser, isLoading, refetch } = useQuery({
        queryKey: ['bookingsbyuser'],
        queryFn: () => fetch('http://localhost:4000/bookingsbyuser/ashraf.uuul7@gmail.com')
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>You have {bookingsbyuser && bookingsbyuser.length} Users</h1>

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
                        {/* {
                            allusers &&
                            allusers.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></User>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserBookings;