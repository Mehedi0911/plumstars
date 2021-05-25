import React from 'react';

const TechCard = (props) => {
    const {name, imgURL,details, dateAppointed} = props.tech;
    return (
        <div className="col-md-4 text-center">
            <div style={{borderRadius:'5px', background:'#FFEEE1'}} className="tech-content shadow p-3">
                <img style={{height:'200px'}} className="mb-3" src={imgURL} alt="" />
                <h5 className="brand-text mb-3 text-center">{name}</h5>
                <p className="text-white text-center">{details}</p>
            </div>
        </div>
    );
};

export default TechCard;