import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/storecontext';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
// import './itemDetail.css'; // Ensure you have relevant styles here

const ItemDetail = () => {
  const { id } = useParams();
  const { food_list, addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  const item = food_list.find((item) => item._id === id);

  const handleAddToCart = (id) => {
    addToCart(id);
    toast.success(`${item.name} added to cart`);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    toast.error(`${item.name} removed from cart`);
  };

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card className="shadow-lg" style={{ width: '80%' }}>
        <Row noGutters>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.name}
              className="food-image"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <strong>₹{item.price}</strong>
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                {cartItems[id] > 0 ? (
                  <div className="d-flex align-items-center">
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
                  <Button variant="primary" onClick={() => handleAddToCart(id)}>
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

export default ItemDetail;
