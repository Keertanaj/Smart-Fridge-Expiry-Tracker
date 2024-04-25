import React, { useState } from "react";
import { Food } from "./Food";
import { FoodForm } from "./FoodForm";
import { v4 as uuidv4 } from "uuid";
import { EditFoodForm } from "./EditFoodForm";
import './Food.css';

const FoodWrapper = () => {
  const [Foods, setFoods] = useState([]);

  const addFood = (Food) => {
    setFoods([
      ...Foods,
      { id: uuidv4(), task: Food.task, expiryDate: Food.expiryDate, completed: false, isEditing: false },
    ]);
  }

  const deleteFood = (id) => setFoods(Foods.filter((Food) => Food.id !== id));

  const toggleComplete = (id) => {
    setFoods(
      Foods.map((Food) =>
      Food.id === id ? { ...Food, completed: !Food.completed } : Food
      )
    );
  }

  const editFood = (id) => {
    setFoods(
      Foods.map((Food) =>
        Food.id === id ? { ...Food, isEditing: !Food.isEditing } : Food
      )
    );
  }

  const editTask = (task, id) => {
    setFoods(
      Foods.map((Food) =>
        Food.id === id ? { ...Food, task, isEditing: !Food.isEditing } : Food
      )
    );
  };

  return (
    <div className="FoodWrapper">
      <h1>Enter your food item!</h1>
      <div className="underline"></div>
      <FoodForm addFood={addFood} />
      {}
      {Foods.map((Food) =>
        Food.isEditing ? (
          <EditFoodForm editFood={editTask} task={Food} />
        ) : (
          <Food
            key={Food.id}
            task={Food}
            deleteFood={deleteFood}
            editFood={editFood}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default FoodWrapper;
