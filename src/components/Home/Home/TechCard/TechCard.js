import React from 'react';

const TechCard = (props) => {
    const {name, imgURL,details, dateAppointed} = props.tech;
    return (
        <div className="col-md-4">
            <div style={{borderRadius:'5px'}} className="tech-content bg-dark shadow p-3">
                <img style={{borderRadius:'25% 0'}} className="w-100 mb-3" src={imgURL} alt="" />
                <h5 className="brand-text mb-3 text-center">{name}</h5>
                <p className="text-white text-center">{details}</p>
            </div>
        </div>
    );
};

export default TechCard;