import React, { useContext } from "react";
import "./fooddisplay.css";
import { StoreContext } from "../../context/storecontext";
import FoodItems from "../fooditems/fooditems";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Delicious Dishes Curated Just for You 🍽️</h2>
      <p className="food-subheading">Hand-picked meals based on your cravings and location</p>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItems
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
