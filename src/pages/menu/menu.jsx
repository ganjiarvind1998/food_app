import React, {  useState } from "react";
import FoodDisplay from "../../components/fooddisplay/fooddisplay";
import ExploreMenu from "../../components/exploremenu/exploremenu"; // Import ExploreMenu


const Menu = () => {
  
  const [category, setCategory] = useState("All"); // State for selected category

  return (
    <div className="menu-page">
      
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
