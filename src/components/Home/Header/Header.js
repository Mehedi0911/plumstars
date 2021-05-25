import React from 'react';
import './Header.css'
import headerImg from '../../../Images/headerImg.svg'
import ScrollAnimation from 'react-animate-on-scroll';
const Header = ({ id }) => {
    return (
        <header className="d-flex justify-content-center align-items-center" id={id}>

            <div className="row w-75">
                <div className="header-content col-md-6 d-flex justify-content-center align-items-center">
                    <ScrollAnimation animateIn='animate__fadeInLeft' duration={1}>
                        <div>
                            <h1>Best Quality <br /> Plumber Works in Town</h1>

                            <h3 className="brand-text">Work in Your Comfort</h3>
                            <p style={{ opacity: '.7' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium a quibusdam, vero ut corporis non voluptates. Exercitationem, facilis labore. Sed magni dignissimos quis doloremque nobis.</p>
                            <button className='brand-btn-primary'>Appointment</button>
                            <button className='brand-btn-secondary'>Learn More</button>
                        </div>
                    </ScrollAnimation>
                </div>
               
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <ScrollAnimation animateIn='animate__fadeInRight' duration={1}>
                        <div>
                            <img className='img-fluid' style={{ height: '300px' }} src={headerImg} alt="" />
                        </div>
                        </ScrollAnimation>
                    </div>
                
            </div>

        </header>
    );
};

export default Header;