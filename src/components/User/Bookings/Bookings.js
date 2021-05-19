import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PanelHeader from '../../Admin/PanelHeader/PanelHeader';
import BookingCard from '../BookingCard/BookingCard';

const Bookings = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        fetch('https://arcane-reef-18482.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => {
                setBookingData(data);
                console.log(data[0]);

            })
    }, [])
    console.log(loggedInUser);
    return (
        <section className="container p-5">
            <PanelHeader header={"your Bookings"}></PanelHeader>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default Bookings;