import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h2>Service detail { serviceId}</h2>
            <Link to="/checkout">
                <button className='btn btn-primary'>Process Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;