import React, { useState } from "react";
// import PropTypes from 'prop-types';
import Carousel from "react-bootstrap/Carousel";

// Stories.propTypes = {

// };

function Stories(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="container">
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-3.png?v=1.2"
          alt="Second slide"
        />

        

      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-4.png?v=1.2"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default Stories;
