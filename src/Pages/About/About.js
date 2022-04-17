import React from 'react';
import myPic from "../../images/me.jpg"

const About = () => {
    return (
        <div className='p-5'>
          
            <img width="200px" src={myPic} alt="" />
            <h2 className='text-white bg-primary w-25 mx-auto p-4'>Shahidul Islam</h2>
            <p className='w-25 mx-auto text-start'>I would like to achieve my goal withing 6 months.So now I trying hard day and night in front of focus my goal .Everyday I would like to learning my confusing matter.I hope ,I over come my goal. </p>
        </div>
    );
};

export default About;