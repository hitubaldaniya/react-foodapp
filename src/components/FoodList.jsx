import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div className="food-data">
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
};

export default FoodList;
