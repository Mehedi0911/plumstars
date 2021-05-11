import React from 'react';
import hours from '../../../Images/icons/24-hours.svg'
import delivery from '../../../Images/icons/delivery.svg'
import plumber from '../../../Images/icons/plumber.svg'
import './Features.css'
const Features = () => {
    return (
        <section className="container w-75 features">
            <div className="row feat-container">
                <div className="col-md-4 brand-bg-primary feat-card">
                    <div className="p-3 text-center">
                        <img style={{ height: '50px' }} src={hours} alt="" />
                    </div>
                    <div className="text-center text-white">
                        <h6>24/7 Support</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sapiente!</p>
                    </div>
                </div>
                <div className="col-md-4 brand-bg-secondary feat-card">
                    <div className="p-3 text-center">
                        <img style={{ height: '50px' }} src={plumber} alt="" />
                    </div>
                    <div className="text-center text-white">
                        <h6>Expert Service</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sapiente!</p>
                    </div>
                </div>
                <div className="col-md-4 brand-bg-primary feat-card">
                    <div className="p-3 text-center">
                        <img style={{ height: '50px' }} src={delivery} alt="" />
                    </div>
                    <div className="text-center text-white">
                        <h6>Reach Anywhere</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sapiente!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;