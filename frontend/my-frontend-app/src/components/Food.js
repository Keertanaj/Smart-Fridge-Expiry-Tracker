import React from 'react';
import './Food.css';

export const Food = ({ task, deleteFood, editFood, toggleComplete }) => {
  return (
    <div className="Food">
      <div className="task-info">
        <p
          className={`${task.completed ? 'completed' : 'incompleted'}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        {task.expiryDate && (
          <p className="expiry-date">Expiry Date: {task.expiryDate}</p>
        )}
      </div>
      <div>
        <div className="edit-icon" onClick={() => editFood(task.id)}>
          Edit
        </div>
        <div className="delete-icon" onClick={() => deleteFood(task.id)}>
          Delete
        </div>
      </div>
    </div>
  );
};
