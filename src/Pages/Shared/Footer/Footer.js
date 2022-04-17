import React from 'react';

const Footer = () => {
    const time = new Date()
    const currentYear=time.getFullYear()
    return (
        <div className='bg-primary p-2'>
            <h5 className='text-white'>Mr.Career</h5>
            <p className='text-white'><small>Alright reserved copy© {currentYear} </small></p>
        </div>
    );
};

export default Footer;