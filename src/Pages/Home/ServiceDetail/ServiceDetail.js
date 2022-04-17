import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div className='mb-5 mt-5 py-5 '>
            <h2>Service detail { serviceId}</h2>
            <Link to="/checkout">
                <button className='btn btn-primary'>Process Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;