import React from 'react';
import './Header.css'

const Header = ({id}) => {
    return (
        <header className="d-flex justify-content-center align-items-center" id={id}>
            <div className="header-content w-50">
                <h5 className="text-white">Best Quality Plumber Works</h5>
                <hr className="w-25" />
                <h3 className="brand-text">Work in Your Comfort</h3>
                <p style={{opacity:'.7'}} className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium a quibusdam, vero ut corporis non voluptates. Exercitationem, facilis labore. Sed magni dignissimos quis doloremque nobis.</p>
                <button className = 'brand-btn-primary'>Appointment</button>
                <button className = 'brand-btn-secondary'>Learn More</button>


            </div>

        </header>
    );
};

export default Header;