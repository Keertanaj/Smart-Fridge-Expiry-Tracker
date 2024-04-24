import React, { useState } from 'react';
import './Food.css';

export const FoodForm = ({ addFood }) => {
    const [task, setTask] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task && expiryDate) {
            addFood({ task, expiryDate }); // Submit both task and expiry date as one task object
            setTask('');
            setExpiryDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="FoodForm">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="Food-input"
                placeholder="Enter your food item!"
            />
            <input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="Food-input"
                placeholder="What is the expiry date"
            />
            <button type="submit" className="Food-btn">
                Add Task
            </button>
        </form>
    );
};
