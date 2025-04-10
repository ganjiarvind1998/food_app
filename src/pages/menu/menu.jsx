import React, { useState } from "react";
import FoodDisplay from "../../components/fooddisplay/fooddisplay";
import ExploreMenu from "../../components/exploremenu/exploremenu";

const Menu = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="menu-page">
      {/* <h2 className="menu-title">Browse Our Menu</h2> */}
      {/* <p className="menu-subtitle">What's on your mind?</p> */}

      <div className="explore-menu">
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>

      <div className="food-display">
        <FoodDisplay category={category} />
      </div>
    </div>
  );
};

export default Menu;
