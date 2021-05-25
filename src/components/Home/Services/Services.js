import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import "animate.css/animate.min.css";
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
        <section style={{background:'#EBECF0', paddingTop:"3rem", paddingBottom:'3rem', fontFamily:'sans-serif'}} id={id}>
           <div className="container w-75 mt-5">
           <h5 className="section-heading text-center">Our Services</h5>
           <p className='text-center'>We Provide Top Service In Town</p>
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