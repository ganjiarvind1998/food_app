import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./header.css";

const Header = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            src="https://images6.alphacoders.com/100/thumb-1920-1002209.jpg"
            className="d-block w-100 fade-in"
            alt="Slide 1"
          />
          <Carousel.Caption className="header-contents">
            <div className="caption-content slide-in">
              <h3>Exclusive Deals</h3>
              <p>Grab 30% off on all salads!</p>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            src="https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food-2048x1366.jpg"
            className="d-block w-100 fade-in"
            alt="Slide 2"
          />
          <Carousel.Caption className="header-contents">
            <div className="caption-content slide-in">
              <h3>Special Offer!</h3>
              <p>Get 30% off on all chicken rolls!</p>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            src="https://wallpapercave.com/wp/wp3376127.jpg"
            className="d-block w-100 fade-in"
            alt="Slide 3"
          />
          <Carousel.Caption className="header-contents">
            <div className="caption-content slide-in">
              <h3>Delicious Pizza</h3>
              <p>Enjoy 30% off on Veg Pizza!</p>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
