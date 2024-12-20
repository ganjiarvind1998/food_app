import React from 'react';
import './contact.css'; // Ensure you have the updated CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Order Delight - Contact Information</h2>
      
      <section className="about-us">
        <h3>About Us</h3>
        <p>
          Order Delight is your ultimate destination for a delightful food ordering experience. We offer a wide variety of dishes from different cuisines, ensuring there's something for everyone. Our mission is to provide quick, convenient, and delicious meals right to your doorstep. With a user-friendly interface and seamless ordering process, we aim to make your food ordering experience as enjoyable as possible.
        </p>
      </section>
      
      <section className="customer-care">
        <h3>Customer Care</h3>
        <p>For any inquiries, concerns, or assistance, please reach out to our Customer Care team. We are here to help you 24/7.</p>
        <p>Email: <a href="mailto:support@orderdelight.com">support@orderdelight.com</a></p>
        <p>Phone: 1-800-123-4567</p>
      </section>
      
      <section className="social-media">
        <h3>Social Media</h3>
        <p>Stay connected with us on social media for the latest updates, offers, and more:</p>
        <p>
          <a href="https://www.facebook.com/orderdelight" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.twitter.com/orderdelight" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://www.instagram.com/orderdelight" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </section>
      
      <section className="feedback">
        <h3>Feedback</h3>
        <p>We value your feedback and suggestions. Please let us know how we can improve your experience with Order Delight. Your opinions are important to us and help us serve you better.</p>
        <p><a href="https://orderdelight.com/feedback" target="_blank" rel="noopener noreferrer">Feedback Form</a></p>
      </section>
    </div>
  );
};

export default Contact;
