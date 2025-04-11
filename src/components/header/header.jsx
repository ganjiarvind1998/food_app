import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./header.css";
// import logo from "../assets/biryani.png"; // Adjust path if Header.jsx is in another folder
import logo from "../../assets/biryani.png";



const Header = () => {
  const slides = [
    {
      image: "https://thumbs.dreamstime.com/b/chicken-dum-biryani-white-bowl-traditional-indian-one-pot-dish-background-high-angle-view-156498926.jpg",
      title: "Savor the Flavor",
      subtitle: "Flat 40% off on biryani this week!",
    },
    {
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      title: "Fresh & Healthy",
      subtitle: "Order any salad and get a smoothie FREE!",
    },
    {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      title: "Pizza Party!",
      subtitle: "Buy 1 Get 1 Free on all pizzas 🍕",
    },
  ];

  return (
    <Carousel fade controls={false} indicators={true}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image-container">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="d-block w-100 slide-img" />
            <div className="gradient-overlay" />
            {/* <img src={logo} className="brand-logo" alt="Brand" /> */}

            <Carousel.Caption className="header-contents">
              <div className="caption-content fancy-text">
                <h3>{slide.title}</h3>
                <p>{slide.subtitle}</p>
                {/* <button className="order-btn">Order Now</button> */}
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Header;
