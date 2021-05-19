import React, { useEffect, useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import PanelHeader from '../PanelHeader/PanelHeader';

const Appointments = () => {
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        fetch('https://arcane-reef-18482.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => {
                setBookingData(data);
                console.log(data[0]);
               
            })
    }, [])

    return (
        <section className="container w-100 mt-5 pb-5">
            <div>
            <PanelHeader header={"All Appointments"}></PanelHeader>
            <div className="row">
               
                {
                    bookingData.map(booking => <AppointmentCard booking={booking}></AppointmentCard>)
                }
              
            </div>
            </div>
        </section>
    );
};

export default Appointments;