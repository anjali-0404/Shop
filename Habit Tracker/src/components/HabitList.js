// src/components/HabitList.js
import React from 'react';
import Habit from './Habit';

const HabitList = ({ habits, toggleComplete, deleteHabit }) => {
    if (!habits.length) {
        return <p className="empty-list">No habits added yet. Start by adding one!</p>;
    }

    return (
        <div className="habit-list">
            {habits.map((habit) => (
                <Habit
                    key={habit.id}
                    habit={habit}
                    toggleComplete={toggleComplete}
                    deleteHabit={deleteHabit}
                />
            ))}
        </div>
    );
};

export default HabitList;
