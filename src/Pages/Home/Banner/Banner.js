import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Xx2TBjL/coach1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-dark fw-bold'>First slide label</h3>
            <p className='text-dark'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/tHL0xrP/coach2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className='text-dark fw-bold'>Second slide label</h3>
            <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/GWStTQh/coach3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className='text-dark fw-bold'>Third slide label</h3>
            <p className='text-dark'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;