import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel id='banner' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Xx2TBjL/coach1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-white fw-bold'>Open my door for new journey</h3>
            <p className='text-white'>Knowledge is the key to success.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/tHL0xrP/coach2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className='text-white fw-bold'>Learn everyday and motivate</h3>
            <p className='text-white'>Develop your skill and gain your goal</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/GWStTQh/coach3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className='text-white fw-bold'>Grow Your thinking ability</h3>
            <p className='text-white'>
              Thinking ability makes your new society.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;