import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/storecontext";
import { food_list } from "../../assets/assets";
import { assets } from "../../assets/assets";
import "./navbar.css";
import whatLogo from "../../assets/what.jpg"; // Your logo image

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { cartItems } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);
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
    setSearchQuery("");
    setSearchResults([]);
    navigate(`/food/${itemId}`);
  };

  const totalItems = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  return (
    <nav className="modern-navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <img src={whatLogo} alt="Logo" className="logo-img" />
          <span className="brand-name">Yumbox</span>
        </Link>
      </div>

      <div className="nav-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => {
            setMenu("home");
            setMobileMenu(false); // close menu after click
          }}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={menu === "menu" ? "active" : ""}
          onClick={() => {
            setMenu("menu");
            setMobileMenu(false);
          }}
        >
          <Link to="/menu">Menu</Link>
        </li>
        <li
          className={menu === "contact" ? "active" : ""}
          onClick={() => {
            setMenu("contact");
            setMobileMenu(false);
          }}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="nav-right">
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchQuery && (
            <div className="search-results">
              {searchResults.length === 0 ? (
                <div className="no-results">No results</div>
              ) : (
                searchResults.map((item) => (
                  <div
                    key={item._id}
                    className="search-item"
                    onClick={() => handleResultClick(item._id)}
                  >
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <Link to="/cart" className="cart-icon">
          <img src={assets.basket_icon} alt="Cart" />
          {totalItems > 0 && <span className="count">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
