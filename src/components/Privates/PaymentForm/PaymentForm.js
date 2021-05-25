import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { UserContext } from '../../../App';
const PaymentForm = ({handleBackBtn, customerData}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [paymentInfo, setPaymentInfo] = useState({})
  const [hasPaid, setHasPaid] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setPaymentInfo(paymentMethod)
        setHasPaid(true)
      }
    };
    
    //Handle Saving Payment and Booking details to database
    
    let history = useHistory();
    const handleBooking = () => {
      const newBooking = {
        customerDetails : customerData,
        paymentID :paymentInfo,
        setState:'In Review',
        userEmail:loggedInUser.email
      }
      history.push("/confirm");
      console.log(newBooking);
      const url = 'https://arcane-reef-18482.herokuapp.com/bookService'
      fetch(url,{
        method:"POST",
        headers:{'content-type' : 'application/json'},
        body:JSON.stringify(newBooking)
      })
      .then(res => {
        console.log('server side response' , res);
      })
    }

    return (
        
    <div>
      {!hasPaid &&   <div>
      <form onSubmit={handleSubmit}>
    <CardElement />
    <button className="btn btn-success mr-3 mt-3" type="submit" disabled={!stripe}>
      Pay
    </button>
    <button onClick={handleBackBtn} className="btn btn-warning  mr-3 mt-3">Go Back</button>
    
  </form>
  
    </div>}
    {
      hasPaid && <button onClick={handleBooking} className="brand-btn-primary w-100">Confirm</button>
    }
    </div>
    );
};

export default PaymentForm;