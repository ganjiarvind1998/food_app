import React, { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storecontext";
import { toast } from "react-toastify";
import "./fooditems.css";

const FoodItems = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
    toast.success(`${name} added to cart`);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    toast.error(`${name} removed from cart`);
  };

  return (
    <Card className="food-item mb-3">
      <Link to={`/item/${id}`} className="food-item-link">
        <Card.Img variant="top" src={image} alt={name} className="food-item-image" />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/item/${id}`} className="food-item-link">
            {name}
          </Link>
        </Card.Title>
        <Card.Text className="food-item-description">{description}</Card.Text>
        <Card.Text className="food-item-price">₹{price}</Card.Text>
        <Row>
          <Col>
            {cartItems[id] > 0 ? (
              <div className="food-item-counter d-flex align-items-center justify-content-between">
                <Button 
                  variant="danger" 
                  onClick={() => handleRemoveFromCart(id)} 
                  disabled={cartItems[id] === 0}
                >
                  -
                </Button>
                <span className="mx-2">{cartItems[id]}</span>
                <Button variant="success" onClick={() => handleAddToCart(id)}>
                  +
                </Button>
              </div>
            ) : (
              <Button variant="success" onClick={() => handleAddToCart(id)}>
                Add
              </Button>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FoodItems;
