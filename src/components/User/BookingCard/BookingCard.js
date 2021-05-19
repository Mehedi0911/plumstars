import React from 'react';

const BookingCard = ({booking}) => {
    const { customerDetails, paymentID } = booking;
    const { bookingDate, name, address, zip, email, phone, serviceTitle, servicePrice, time, serviceDate, bookingState, setState } = customerDetails;
    const { id } = paymentID;
    const {_id} = booking;
    return (
        <div className="col-md-12">
        <div className="bg-dark p-3">
            <h5 className='text-white' >BookingID : {_id} </h5>
            <div style={{color:'white'}} className="row">
                <div className="col-md-6">
                    <h5 className="brand-text">Customer Detail</h5>
                    <p>Booking Date: {bookingDate}</p>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Address: {address}</p>
                    <p>Zip: {zip}</p>
                </div>
                <div className="col-md-6">
                    <h5 className="brand-text">Service Detail</h5>
                    <p>PayID: {id}</p>
                    <p>ServiceName: {serviceTitle}</p>
                    <p>ServicePrice: {servicePrice}</p>
                    <p>Date: {serviceDate}</p>
                    <p>Time: {time}</p>
                    <p className='brand-bg-primary p-2'>Booking State: {booking.setState}</p>
                    
                </div>
            </div>
        </div>
        <hr />
    </div>
    );
};

export default BookingCard;