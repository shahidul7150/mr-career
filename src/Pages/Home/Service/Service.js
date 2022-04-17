import React from 'react';
import './Service.css'


const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    return (
        <div className='service-container'>
            <img  src={img} alt="" />
            <h2>{name} </h2>
            <h4>Price:${price}</h4>
            <p>{description}</p>
            <button className='btn btn-primary'>Go to Checkout</button>
        </div>
    );
};

export default Service;