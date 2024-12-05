import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { StoreContext } from "../../context/storecontext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import crossIcon from "../../assets/cross_icon.png"; // Adjust the path as needed
import "./cart.css";

const Cart = () => {
  const back = useNavigate();
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
    deleteFromCart,
  } = useContext(StoreContext);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(Object.keys(cartItems).length === 0);

  useEffect(() => {
    setIsCartEmpty(Object.keys(cartItems).length === 0);
  }, [cartItems]);

  const handleProceedToCheckout = () => {
    if (Object.keys(cartItems).length === 0) {
      Swal.fire({
        title: "Your cart is empty",
        text: "Please add items to the cart before proceeding.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    setIsOrdering(true);
    Swal.fire({
      title: "Processing Order",
      text: "Please wait while we process your order.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      setIsOrdering(false);
      setIsOrderPlaced(true);
      Swal.fire({
        title: "Order Confirmed!",
        text: "Your order has been successfully placed.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        clearCart();
        setIsOrderPlaced(false);
        back("/"); // Navigate back to the homepage
      });
    }, 3000);
  };

  const clearCart = () => {
    for (const itemId in cartItems) {
      deleteFromCart(itemId);
    }
    setIsCartEmpty(true);
  };

  const handleRemoveFromCart = (itemId) => {
    deleteFromCart(itemId);
    if (Object.keys(cartItems).length === 0) {
      setIsCartEmpty(true);
      back("/");
    }
  };

  const handleIncrementQuantity = (itemId) => {
    addToCart(itemId);
  };

  const handleDecrementQuantity = (itemId) => {
    if (cartItems[itemId] > 1) {
      removeFromCart(itemId);
    }
  };

  return (
    <div className="cart">
      {isCartEmpty ? (
        <div className="empty-cart">
          <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png" alt="Empty Cart" />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {food_list.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={item._id} className="cart-item">
                    <div className="cart-item-details">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-price">₹{item.price}</div>
                      <div className="cart-item-quantity">
                        <Button variant="outline-secondary" onClick={() => handleDecrementQuantity(item._id)}>-</Button>
                        <span className="mx-2">{cartItems[item._id]}</span>
                        <Button variant="outline-secondary" onClick={() => handleIncrementQuantity(item._id)}>+</Button>
                      </div>
                      <Button variant="link" onClick={() => handleRemoveFromCart(item._id)}>
                        <img src={crossIcon} alt="Remove" className="remove-icon" />
                      </Button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="cart-total">
            <div className="cart-total-details">
              <p>Subtotal:</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery fee:</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total:</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
            <Button
              onClick={handleProceedToCheckout}
              variant="primary"
              disabled={isCartEmpty || isOrdering}
            >
              PROCEED TO CHECKOUT
            </Button>
          </div>
        </div>
      )}
      {isOrderPlaced && (
        <div className="order-placed-message">
          Your order has been placed. Thank you!
        </div>
      )}
    </div>
  );
};

export default Cart;
