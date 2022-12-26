import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import Booking from './Booking';

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
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>You have {bookingsbyuser && bookingsbyuser.length} bookings booked</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>Index</th>
                            <th className='text-center'>product_name</th>
                            <th className='text-center'>product_price</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingsbyuser &&
                            bookingsbyuser.map((booking, index) => <Booking
                                key={booking._id}
                                index={index}
                                booking={booking}
                                refetch={refetch}
                            ></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserBookings;