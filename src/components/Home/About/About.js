import React from 'react';
import './About.css'
import aboutImg from '../../../Images/AboutImage.svg'
import aboutIcon1 from '../../../Images/icons/aboutIcon1.svg'
import aboutIcon2 from '../../../Images/icons/aboutIcon2.svg'
import { Link } from 'react-scroll';
const About = ({ id }) => {
    return (
        <section className="container w-75 about" id={id}>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">

                    <img className="w-100 about-image" src={aboutImg} alt="" />

                </div>
                <div className="col-md-6">
                    <h4 className="section-heading">About Us</h4>
                    <div>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo atque veniam ex voluptatibus cumque dolore deleniti. Beatae, aperiam minima.</p>
                        <div className="d-flex align-items-center">
                            <img className="mr-3" style={{ height: '70px' }} src={aboutIcon1} alt="" />
                            <div>
                                <h5>We Believe In Customer Satisfaction.</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, facere?</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="mr-3" style={{ height: '70px' }} src={aboutIcon2} alt="" />
                            <div>
                                <h5>We Provide On time Service.</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, facere?</p>
                            </div>
                        </div>
                        <button className="brand-btn-secondary mt-3 testimonials-btn">
                            <Link
                                activeClass='active'
                                to='review'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={600}>
                                Testimonials
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;