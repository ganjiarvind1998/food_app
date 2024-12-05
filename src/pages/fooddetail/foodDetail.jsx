import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { food_list } from '../../assets/assets'; // Adjust the path as needed
import { StoreContext } from '../../context/storecontext';
import './foodDetail.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";

const FoodDetail = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  const foodItem = food_list.find(item => item._id === id);

  if (!foodItem) {
    return <div>Food item not found</div>;
  }

  const cartItemQuantity = cartItems[id] || 0;
  const price = foodItem.price || 'Price not available'; // Provide a fallback for the price

  const handleAddToCart = () => {
    addToCart(id);
    toast.success(`${foodItem.name} added to cart`);
  };

  const handleRemoveFromCart = () => {
    if (cartItemQuantity > 0) {
      removeFromCart(id);
      toast.error(`${foodItem.name} removed from cart`);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card className="shadow-lg" style={{ width: '80%' }}>
        <Row noGutters>
          <Col md={6}>
            <Card.Img variant="top" src={foodItem.image} alt={foodItem.name} className="food-image" />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{foodItem.name}</Card.Title>
              <Card.Text>{foodItem.description}</Card.Text>
              <Card.Text><strong>₹{price}</strong></Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                {cartItemQuantity > 0 ? (
                  <div className="d-flex align-items-center">
                    <Button
                      onClick={handleRemoveFromCart}
                      variant="danger"
                      disabled={cartItemQuantity === 0}
                    >
                      -
                    </Button>
                    <span className="mx-2">{cartItemQuantity}</span>
                    <Button onClick={handleAddToCart} variant="success">
                      +
                    </Button>
                  </div>
                ) : (
                  <Button onClick={handleAddToCart} variant="primary">
                    Add
                  </Button>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default FoodDetail;
