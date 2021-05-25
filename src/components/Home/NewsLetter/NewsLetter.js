import React from 'react';
import newsImage from '../../../Images/newsimage.jpg';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <section className="w-75 newsletter shadow">
            <div className="row">
                <div className="col-md-4 news-img">
                    <img className="newsImage" src={newsImage} alt="" />
                </div>
                <div className="col-md-8 p-5 newsContent">
                    <h5 className="text-white">To win Amazing Discount Deals</h5>
                    <p className="text-white">Subscribe to Our Newsletters</p>
                    <input className="email" type="email" placeholder="Your email"/>
                    <input className="email-btn" type="submit" value="subscribe" />
                    

                </div>
            </div>
        </section>
    );
};

export default NewsLetter;