import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/storecontext";
import { food_list } from "../../assets/assets";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { assets } from "../../assets/assets";
import "./navbar.css";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { cartItems } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim()) {
      const results = food_list.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (itemId) => {
    setShowSearchInput(false);
    setSearchQuery("");
    setSearchResults([]);
    navigate(`/food/${itemId}`);
  };

  // Calculate total items count
  const totalItems = Object.values(cartItems).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto navbar-nav">
          <Nav.Link
            as={Link}
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            HOME
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            MENU
          </Nav.Link>
          <Nav.Link
            as={Link} to="/contact"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            CONTACT
          </Nav.Link>
        </Nav>
        <Form inline className="ml-auto navbar-search">
          <FormControl
            type="text"
            placeholder="Search..."
            className="mr-sm-2 search-input"
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setShowSearchInput(true)}
            onBlur={() => setTimeout(() => setShowSearchInput(false), 200)}
          />
          <div className={`search-results ${showSearchInput ? "show" : ""}`}>
            {searchQuery.trim() && searchResults.length === 0 ? (
              <div className="no-results">Item not found</div>
            ) : (
              searchResults.map((item) => (
                <div
                  key={item._id}
                  className="search-result-item"
                  onMouseDown={() => handleResultClick(item._id)}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))
            )}
          </div>
        </Form>
        <Nav className="ml-auto navbar-right">
          <Nav.Link as={Link} to="/cart" className="navbar-cart">
            <img src={assets.basket_icon} alt="basket" />
            {totalItems > 0 && (
              <div className="cart-item-count">{totalItems}</div>
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
