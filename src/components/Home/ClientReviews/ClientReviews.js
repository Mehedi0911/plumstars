import React, { useRef, useEffect, useState } from 'react';

//Swiper Dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "../../Shared/Style.css";

import SwiperCore, {
    Keyboard, Pagination, Navigation
} from 'swiper/core';
import ReviewCard from '../ReviewCard/ReviewCard';

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

const ClientReviews = () => {

    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('https://arcane-reef-18482.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
    }, [])

    return (
        <section className="container p-5">
            <h5 className="section-heading">What Our Client Says</h5>
            <>
                <Swiper slidesPerView={1} spaceBetween={30} keyboard={{
                    "enabled": true
                }} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide><ReviewCard review={review}></ReviewCard></SwiperSlide>)
                    }
                </Swiper>
            </>
        </section>
    );
};

export default ClientReviews;