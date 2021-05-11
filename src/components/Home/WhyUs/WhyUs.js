import React from 'react';
import bullet from '../../../Images/icons/list.svg'
import pMan from '../../../Images/pManImage.png'
const WhyUs = () => {
    return (
        <section className="brand-bg-secondary pt-3 mt-5 mb-2">
            <div className="container w-75">
                <h5 className="section-heading">Why Choose Us?</h5>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="d-flex align-items-center">
                            <img style={{ height: '50px' }} src={bullet} alt="" />
                            <div>
                                <h6 className="brand-text">Lorem ipsum dolor sit amet.</h6>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, unde!</p>
                            </div>
                        </div>
                        <div style={{ borderLeft: '2px solid tomato', height: '20px', marginLeft: '1.5rem' }}></div>
                        <div className="d-flex align-items-center">
                            <img style={{ height: '50px' }} src={bullet} alt="" />
                            <div>
                                <h6 className="brand-text">Lorem ipsum dolor sit amet.</h6>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, unde!</p>
                            </div>
                        </div>
                        <div style={{ borderLeft: '2px solid tomato', height: '20px', marginLeft: '1.5rem' }}></div>
                        <div className="d-flex align-items-center">
                            <img style={{ height: '50px' }} src={bullet} alt="" />
                            <div>
                                <h6 className="brand-text">Lorem ipsum dolor sit amet.</h6>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, unde!</p>
                            </div>
                        </div>
                       
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={pMan} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;