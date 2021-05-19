import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = ({id}) => {

    const [services, setServices] = useState([])

    useEffect(() => {
            const url = 'https://arcane-reef-18482.herokuapp.com/services'
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    },[])
    return (
        <section style={{background:'#EBECF0', paddingTop:"8rem", paddingBottom:'5rem'}} id={id}>
           <div className="container w-75 mt-5">
           <h5 className="section-heading">Our Services</h5>
           <div className="row pt-5">
                {
                    services.map(service => <ServiceCard service ={service}></ServiceCard>)
                }
           </div>
           </div>
        </section>
    );
};

export default Services;