import React, { useEffect, useState } from 'react';

const AppointmentCard = ({ booking }) => {
    const { customerDetails, paymentID } = booking;
    const { name, address, zip, email, phone, serviceTitle, servicePrice, time, date, bookingState, setState } = customerDetails;
    const { id } = paymentID;
    const {_id} = booking;
    console.log(booking);
    const [editState, setEditState] = useState('')

    useEffect(() => {
        fetch(`https://arcane-reef-18482.herokuapp.com/editService/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0].customerDetails.setState);
            setEditState(data[0].customerDetails.setState)
        })
    },[])

    const handleOnchange = (e) => {
        const setState = e.target.value;
        const customerDetails = {setState}
        fetch(`https://arcane-reef-18482.herokuapp.com/update/${_id}`, {
            method:'PATCH',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(customerDetails)
        })
        .then(res => res.json())
        .then(result => {
                console.log('Updated Successfully');
        })
    }
    
    return (
        <div className="col-md-12 mb-3">
            <div style={{color:'white'}} className="bg-dark p-3">
                <h5 >BookingID : {booking._id}</h5>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="brand-text">Customer Detail</h5>
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
                        <p>Time: {time}</p>
                        <form>
                            <select onChange={handleOnchange} class="form-control" id="exampleFormControlSelect1">
                                <option>{booking.setState}</option>
                                {
                                    bookingState.map(book => <option>{book}</option>)
                                }
                                
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;