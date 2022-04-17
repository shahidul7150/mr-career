import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='services' className='mt-5'>
            <h2 className='fw-bold'>My services </h2>
            <div className='services-container'>
            {
                services.map(service => <Service key={service} service={service}>
                </Service>)
            }
           </div>
        </div>
    );
};

export default Services;