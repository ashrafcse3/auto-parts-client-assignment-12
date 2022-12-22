import React from 'react';

const SelectedProdudctModal = ({ selectedProduct: { name, location, advertise_status, available_units, image, original_price, resale_price, posted_on, purchased_year, seller } }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <label htmlFor="booking-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </label>
            </label>
        </div>
    );
};

export default SelectedProdudctModal;