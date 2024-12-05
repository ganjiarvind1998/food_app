import React from "react";
import { SocialIcon } from "react-social-icons";
import { assets } from "../../assets/assets";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content-logo" id="footer">
        <img className="logo" src={assets.logo} alt="Logo" />
      </div>
      <div className="footer-content-description">
        <p>
          A food website project will feature categorized sections for salads,
          ice creams, rolls, and sandwiches, offering diverse recipes with
          high-quality photos and detailed instructions. Each category will
          include nutritional information and cater to various dietary
          preferences. 
        </p>
      </div>
      <div>
        <h4>CUSTOMER SERVICE</h4>
        <p>Help & FAQs</p>
        <p>Order Tracking</p>
        <p>Shipping & Delivery</p>
        <p>Order History</p>
        <p>Advanced Search</p>
        <p>Login</p>
      </div>
      <div>
        <h4>ABOUT US</h4>
        <p>About us</p>
        <p>Careers</p>
        <p>Our Stores</p>
        <p>Corporate Sales</p>
      </div>
      <div>
        <h4>MORE INFORMATION</h4>
        <p>Affiliates</p>
        <p>Refer a friend</p>
        <p>Student Beans Offers</p>
        <p>Gift Vouchers</p>
      </div>
      <div className="social-icons">
        <SocialIcon url="https://twitter.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://youtube.com" />
        <SocialIcon url="https://linkedin.com" />
        <SocialIcon url="https://instagram.com" />
      </div>
    </footer>
  );
};

export default Footer;
