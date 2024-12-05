import React  from "react";
import { useState } from "react";
import "./home.css";
import Header from "../../components/header/header";
import FoodDisplay from "../../components/fooddisplay/fooddisplay";


const Home = () => {
  const [category,] = useState("All");
  return (
    <div>
      <Header />
      <FoodDisplay category={category} />

    
    </div>
  );
}

export default Home;
