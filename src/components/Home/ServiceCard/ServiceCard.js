import React from 'react';
import { useHistory } from "react-router-dom";
import './ServiceCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
const ServiceCard = (props) => {
    
    const {_id, title, price, description, imgURL} = props.service;
    let history = useHistory();
    const handleBookingBtn = () => {
                history.push(`/checkout/${_id}`)
    }
    return (
        <div className="col-md-4">
            <div className="p-3 service-content shadow-sm">
                <div className="img-div">
                <img className="image-fluid w-100"  src={imgURL} alt="" />
                </div>
               <h5 className="brand-text mt-3">{title}</h5>
               <p>{description}</p>
               <p className="brand-text">Price: ${price}</p>
               <button onClick={handleBookingBtn} className="book-btn">Book Service <FontAwesomeIcon icon={faArrowCircleRight} /></button>
            </div>
        </div>
    );
};

export default ServiceCard;