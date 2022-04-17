import React from 'react';
import './Client.css'
const Client = ({ client }) => {
    const { name, img,about } = client;
    return (
        <div className='client-container'>
            <img  src={img} alt="" />
            <h3>{name}</h3>
            <p>{about}</p>
        </div>
    );
};

export default Client;