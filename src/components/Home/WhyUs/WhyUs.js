import React from 'react';
import icon1 from '../../../Images/icons/W-icon1.svg'
import icon2 from '../../../Images/icons/W-icon2.svg'
import icon3 from '../../../Images/icons//W-icon3.svg'
import pMan from '../../../Images/icons/PlumberWU.svg'
const WhyUs = () => {
    return (
        <section className="brand-bg-secondary pt-5 mt-5">
            <div className="container w-75">
                <h5 className="section-heading pt-2">Why Choose Us?</h5>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="d-flex align-items-center">
                            <img className="mr-3 mb-3" style={{ height: '50px' }} src={icon3} alt="" />
                            <div>
                                <h5 className="brand-text">Lorem ipsum dolor sit amet.</h5>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, unde!</p>
                            </div>
                        </div>
                        <div style={{ borderLeft: '2px solid tomato', height: '20px', marginLeft: '1.5rem' }}></div>
                        <div className="d-flex align-items-center">
                            <img className="mr-3 mb-3" style={{ height: '50px' }} src={icon1} alt="" />
                            <div>
                                <h5 className="brand-text">Lorem ipsum dolor sit amet.</h5>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, unde!</p>
                            </div>
                        </div>
                        <div style={{ borderLeft: '2px solid tomato', height: '20px', marginLeft: '1.5rem' }}></div>
                        <div className="d-flex align-items-center">
                            <img className="mr-3 mb-3" style={{ height: '50px' }} src={icon2} alt="" />
                            <div>
                                <h5 className="brand-text">Lorem ipsum dolor sit amet.</h5>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, unde!</p>
                            </div>
                        </div>
                       
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img style={{height:'450px'}} src={pMan} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;