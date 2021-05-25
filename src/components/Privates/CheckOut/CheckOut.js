import React, { useContext, useEffect, useState } from 'react';
//Stripe Payment Requirements
import PaymentForm from '../PaymentForm/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

//React hook form
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';


//Datepicker Dependencies.....
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { UserContext } from '../../../App';

const stripePromise = loadStripe('pk_test_51IqLETGPs5ZHTEdtPP6dyGKds02FbAUD7P8mbZvho3Q88mMmVM5URHNTbHgqqsNzHaLf6dWYgTiCYmTBkXVPh3hV00kNCrB0X5');

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());

    const handleDateChange = (date) => {
        setSelectedDate(date);
       
    };
    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        data.serviceTitle = service.title;
        data.servicePrice = service.price;
        data.bookingDate = new Date().toDateString();
        data.serviceDate = selectedDate.toDateString();
        data.bookingState = ['In Review', 'In Progress', 'Completed', 'Reviewed']
        e.preventDefault();
        console.log(data);
        setCustomerData(data);
        setDetailsSubmitted(true);
    };

    //states
    const [customerData, setCustomerData] = useState({});
    const [detailsSubmitted, setDetailsSubmitted] = useState(false);
    const [service, setService] = useState({})


    const serviceID = useParams();

    useEffect(() => {
        fetch(`https://arcane-reef-18482.herokuapp.com/service/${serviceID.serviceID}`)
            .then(res => res.json())
            .then(data => {
                setService(data[0])
            })
    },[])

    const handleBackBtn = () => {
        setDetailsSubmitted(false);
    }
    return (
        <section style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center p-5">
            <div>
                <div style={{ height: '60px' }} className="bg-dark pl-5 pr-5 d-flex justify-content-center align-items-center mb-5">
                    <h4 className="text-white"><span className="brand-text">plumbStar</span> Checkout</h4>
                </div>
                <div>
                    <h5>Order Details</h5>
                    <p>Service Name: {service.title}</p>
                    <p>Service Cost: {service.price}</p>

                </div>
                <hr />
                {
                    !detailsSubmitted &&
                    <div>
                        <h5>Your Personal Details</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="d-flex">
                                <input type="text" name="name" className="form-control mr-2" placeholder="your name" {...register("name")} required />
                                <input type="email" name="email" className="form-control" placeholder="your email" {...register("email")} required />
                            </div>
                            <input type="text" name="address" className="form-control mt-3 mb-3" placeholder="your address" {...register("address")} required />
                            <div className="d-flex">
                                <input type="text" name="zip" className="form-control mr-2" placeholder="zip code" {...register("zip")} required />
                                <input type="text" name="phone" className="form-control" placeholder="your phone" {...register("phone")} required />
                            </div>
                            <div className="d-flex">

                                {/* datepicker....... */}
                                <div>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justify="space-around">

                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="MM/dd/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                               
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />

                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </div>
                                <select class="form-control mt-3" name="time" placeholder="select service time" {...register("time")} required >
                                    <option>08.00 AM - 10.00 AM</option>
                                    <option>10.00 AM - 12.00 PM</option>
                                    <option>12.00 PM - 02.00 PM</option>
                                    <option>02.00 PM - 04.00 PM</option>
                                    <option>06.00 PM - 08.00 PM</option>
                                </select>
                            </div>

                            <input className="w-100 mt-3 brand-btn-primary" type="submit" value="Proceed Payments" {...register("example")} />

                        </form>
                    </div>
                }
                {
                    detailsSubmitted &&
                    <div>
                        <Elements stripe={stripePromise}>
                            <PaymentForm handleBackBtn={handleBackBtn} customerData={customerData}></PaymentForm>
                        </Elements>
                    </div>
                }
            </div>
        </section>
    );
};

export default CheckOut;