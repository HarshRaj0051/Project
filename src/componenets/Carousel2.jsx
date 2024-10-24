import React from 'react';
import Slider from 'react-slick';
import './Carousel2.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Change this value to adjust the gap between images
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="slider-div" style={{marginBottom:'70px'}}>
    <Slider {...settings}>

      <div className='image-div'>
        <img src="./images/google.png" alt="Company Logo 1" style={{ width: '200px', height: '100px' }} />
      </div>

      <div className='image-div'>
        <img src="./images/hcl.png" alt="Company Logo 2" style={{ width: '200px', height: '100px' }} />
      </div>

      <div className='image-div' >
        <img src="./images/Infosys.png" alt="Company Logo 3" style={{ width: '200px', height: '100px'}}/>
      </div>
      
      <div className='image-div'>
        <img src="./images/logitech.png" alt="Company Logo 4" style={{ width: '200px', height: '100px' }} />
      </div>

      <div className='image-div'>
        <img src="./images/wipro.png" alt="Company Logo 5"  style={{ width: '200px', height: '100px' }}/>
      </div>

      <div className='image-div'>
        <img src="./images/cisco.png" alt="Company Logo 6"  style={{ width: '200px', height: '100px' }}/>
      </div>

      <div className='image-div'>
        <img src="./images/tcs.png" alt="Company Logo 6"  style={{ width: '200px', height: '100px' }}/>
      </div>

      <div className='image-div'>
        <img src="./images/Zensar.png" alt="Company Logo 6"  style={{ width: '200px', height: '100px' }}/>
      </div>

      <div className='image-div'>
        <img src="./images/tech.png" alt="Company Logo 6"  style={{ width: '200px', height: '100px' }}/>
      </div>
      
      <div className='image-div'>
        <img src="./images/Unionsys.png" alt="Company Logo 6"  style={{ width: '200px', height: '100px' }}/>
      </div>
      
      <div className='image-div'>
        <img src="./images/cipl.png" alt="Company Logo 6"  style={{ width: '200px', height: '100px' }}/>  
      </div>

      <div className='image-div'>
        <img src="./images/pandit.jpg" alt="Company Logo 6"  style={{ width: '200px', height: '100px' }}/>  
      </div>

      <div className='image-div'>
        <img src="./images/phn.jpg" alt="Company Logo 6"  style={{ width: '200px', height: '100px' }}/>  
      </div>

      <div className='image-div'>
        <img src="./images/channels4.jpg" alt="Company Logo 6"  style={{ width: '200px', height: '100px' }}/>  
      </div>
      
      
      
    </Slider>
    </div>
  );
};

export default Carousel;
