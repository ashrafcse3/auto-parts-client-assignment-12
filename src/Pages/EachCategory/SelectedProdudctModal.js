import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const SelectedProdudctModal = ({ selectedProduct: { name, _id, resale_price, seller } }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const form = useRef();

    const handleConfirmBooking = (event) => {
        event.preventDefault();
        // make true the isloading function
        setIsLoading(true);
        const booking = {
            product_id: _id,
            product_name: name,
            product_price: resale_price,
            user_email: user?.email,
            phone: form.current.phone.value,
            meeting_location: form.current.meeting_location.value,
            seller_email: seller

        };

        fetch('http://localhost:4000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Your booking is confirmed');
                }
                else {
                    toast.error('Sorry, your booking is not confirmed yet, try again!');
                }

                // make false the isloading function
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });

    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <label htmlFor="booking-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-1">Price: <strong>${resale_price}</strong></p>
                    <form ref={form} onSubmit={handleConfirmBooking} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" value={user.email} disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting location</span>
                            </label>
                            <input name='meeting_location' type="text" placeholder="Meeting location, Ex: Noya para" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                className={`btn text-white 
                                ${isLoading ? 'loading' : ''}
                            `}>Confirm booking</button>
                        </div>
                    </form>
                </label>
            </label>
        </div>
    );
};

export default SelectedProdudctModal;