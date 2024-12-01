// src/components/Habit.js
import React from 'react';

const Habit = ({ habit, toggleComplete, deleteHabit }) => {
    return (
        <div className={`habit ${habit.completed ? 'completed' : ''}`}>
            <h3>{habit.name}</h3>
            <div className="habit-actions">
                <button onClick={() => toggleComplete(habit.id)}>
                    {habit.completed ? '✔ Completed' : 'Mark as Done'}
                </button>
                <button className="delete-btn" onClick={() => deleteHabit(habit.id)}>
                    ❌ Delete
                </button>
            </div>
        </div>
    );
};

export default Habit;
