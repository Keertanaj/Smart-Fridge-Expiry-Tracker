import React, { useState } from 'react';

export const EditFoodForm = ({ editfood, task }) => {
  const [taskValue, setTaskValue] = useState(task.task);
  const [expiryDateValue, setExpiryDateValue] = useState(task.expiryDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    editfood({ task: taskValue, expiryDate: expiryDateValue }, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="foodForm">
      <input
        type="text"
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        className="food-input"
        placeholder="Update task"
      />
      <input
        type="date"
        value={expiryDateValue}
        onChange={(e) => setExpiryDateValue(e.target.value)}
        className="food-input"
        placeholder="Update expiry date"
      />
      <button type="submit" className="food-btn">
        Update Task
      </button>
    </form>
  );
};
