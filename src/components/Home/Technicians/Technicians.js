import React, { useEffect, useState } from 'react';
import TechCard from '../Home/TechCard/TechCard';

const Technicians = () => {
    const [techData, setTechData] = useState([])
    useEffect(() => {
        fetch('https://arcane-reef-18482.herokuapp.com/technicians')
        .then(res => res.json())
        .then(data => {
            setTechData(data)
        })
    },[])
    return (
        <section className="container w-75 mt-5 pb-5">
            <h5 className="section-heading mb-5">Our Skilled Tech</h5>
            <div className="row">
               {
                   techData.map(tech => <TechCard tech ={tech}></TechCard>)
               }
            </div>
        </section>
    );
};

export default Technicians;